import React from "react";

class View extends React.Component {
  render() {
    return (
      <div className="read-con">
        <h3>Content</h3>
        <p contentEditable>{this.props.postId}</p>
      </div>
    );
  }
}

export default View;