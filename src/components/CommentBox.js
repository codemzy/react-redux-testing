import React from 'react';
import { connect } from 'react-redux';

// actions
import { saveComment } from '../actions';

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
        this.props.dispatch(saveComment(this.state.comment));
        this.setState({
            comment: ''
        });
    }
    
    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)} className="comment-box">
                <h4>Add a comment</h4>
                <textarea className="form-control" value={this.state.comment} onChange={this._handleChange.bind(this)} />
                <button className="btn btn-success" action="submit">Submit Comment</button>
            </form>
        );
    }
}

export default connect()(CommentBox);