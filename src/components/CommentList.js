import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
    const LIST = props.comments.map(comment => <li key={comment}>{comment}</li>);
    return (
        <ul className="comment-list">{LIST}</ul>
    );
};

export default connect((state) => {
    return {
        comments: state.comments
    };
})(CommentList);