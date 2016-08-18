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
    
    _handleSubmit(event) {
        event.preventDefault();
        this.setState({
            comment: ''
        });
    }
    
    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)} className="comment-box">
                <textarea value={this.state.comment} onChange={this._handleChange.bind(this)} />
                <button action="submit">Submit Comment</button>
            </form>
        );
    }
}

export default CommentBox;