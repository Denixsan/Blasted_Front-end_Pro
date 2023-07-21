import React from 'react';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursor: 'pointer',
            pointerEvents: 'auto'
          }
    }
    deletePost = () => {
              this.props.postDiv.innerHTML = ``;
          this.setState({
            cursor: 'not-allowed',
            pointerEvents: 'none'
          });
    }
    render() {
        return (
          <button style={this.state} id="removeBtn" className="remove-btn" onClick={this.deletePost}>
            Delete
          </button>
        );
      }
}

export default Delete;