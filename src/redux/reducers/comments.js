/* eslint-disable import/no-anonymous-default-export */
import { SAVE_COMMENT, FETCH_COMMENTS } from 'redux/actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(({ name }) => name);
            return [...state, ...comments];
        case SAVE_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}
