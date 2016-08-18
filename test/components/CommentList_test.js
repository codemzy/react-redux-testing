import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList.js';

describe('CommentList', () => {
    let component;
    beforeEach(() => {
        const PROPS = { comments: ['New Comment', 'Another Comment'] };
        component = renderComponent(CommentList, null, PROPS);
    });
    
    it('shows an <li> for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });
    it('shows each comment that is provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Another Comment');
    });
});