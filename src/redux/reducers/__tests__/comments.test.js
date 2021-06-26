import commentsReducer from 'redux/reducers/comments';
import { SAVE_COMMENT } from 'redux/actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment',
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    // to test default of reducer
    const newState = commentsReducer([], { type: 'lakjsdflk' });

    expect(newState).toEqual([]);
});
