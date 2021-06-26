import { SAVE_COMMENT } from 'redux/actions/types';

export const saveComment = (comment) => (dispatch) => {
    dispatch({ type: SAVE_COMMENT, payload: comment });
};
