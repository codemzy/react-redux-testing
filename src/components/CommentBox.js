import React from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
    }
    
    _handleChange(event) {
        this.setState({
            comment: event.target.value
        });
    }
    
    render() {
        return (
            <div className="comment-box">
                <textarea value={this.state.comment} onChange={this._handleChange.bind(this)} />
                <button>Submit Comment</button>
            </div>
        );
    }
}

export default CommentBox;