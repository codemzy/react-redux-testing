import React from 'react';

// components
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
