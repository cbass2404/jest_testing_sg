import { SAVE_COMMENT } from 'actions/types';

export const saveComment = (comment) => (dispatch) => {
    dispatch({ type: SAVE_COMMENT, payload: comment });
};
