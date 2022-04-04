import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../app/store';
import { mockData } from './mockData';
import { Authors } from '../Authors';

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

describe('Authors component', () => {
    it('finds title', () => {
        const { getByTestId } = renderWithState(<Authors />, { mockData });
        const elem = getByTestId('title');
        expect(elem.innerHTML).toBe('Find New Authors');
    });
    
    // todo: test if it renders the list of authors properly

    // todo: test pagination feature
});

