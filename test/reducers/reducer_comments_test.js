import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/reducer_comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        expect(commentReducer([], {})).to.eql([]);
    });
    it('handles action SAVE_COMMENT', () => {
        const ACTION = { type: SAVE_COMMENT, payload: 'new comment' };
        expect(commentReducer([], ACTION)).to.eql(['new comment']);
    });
});
