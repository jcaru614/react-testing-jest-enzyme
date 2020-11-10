import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type save comment', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }
    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
})
it('handles unkown type', () => {
    const newState = commentsReducer([], {type: 'LSDKFJASLDFH'})
    expect(newState).toEqual([])
})



