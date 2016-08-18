import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types.js';
import { saveComment } from '../../src/actions/index.js';

describe('actions', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            const ACTION = saveComment();
            expect(ACTION.type).to.equal(SAVE_COMMENT);
        });
        it('has the correct payload', () => {
            const ACTION = saveComment('new comment');
            expect(ACTION.payload).to.equal('new comment');
        });
    });
})