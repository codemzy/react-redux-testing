import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox.js';

describe('CommentBox', () => {
    
    let component = renderComponent(CommentBox);
    it('Has the class comment-box', () => {
        expect(component).to.have.class('comment-box');
    });
    it('Has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });
    it('Has a button', () => {
        expect(component.find('button')).to.exist;
    });
    
});