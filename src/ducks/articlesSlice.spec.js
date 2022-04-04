import articlesReducer from './articlesSlice';
  
describe('articles reducer', () => {
    it('should handle initial state', () => {
        expect(articlesReducer(undefined, { type: 'unknown' })).toEqual({
            data: undefined,
            status: 'idle',
        });
    });

    // todo: test selectors
});
  