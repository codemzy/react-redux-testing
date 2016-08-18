import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox.js';

describe('CommentBox', () => {
    
    let component;
    
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });
  
    it('Has the class comment-box', () => {
        expect(component).to.have.class('comment-box');
    });
    it('Has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });
    it('Has a button', () => {
        expect(component.find('button')).to.exist;
    });
    
    describe('entering text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });
        it('shows text in text area', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });
        it('clears the input when submitted', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
    
});