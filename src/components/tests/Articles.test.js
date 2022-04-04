import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../app/store';
import { mockData } from './mockData';
import { Articles } from '../Articles';

// todo: add to test up set up file so it can be used across test files
const renderWithState = (
    ui,
    { initialState, ...renderOptions } = {}
  ) => {
    const Wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
  
    return render(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('Articles component', () => {
    it('finds title', () => {
        const { getByTestId } = renderWithState(<Articles />, { mockData });
        const elem = getByTestId('title');
        expect(elem.innerHTML).toBe('Find New Articles');
    });
    
    // todo: test if it renders the list of articles properly

    // todo: test the ArticleSummary child component 
});

