import React from 'react';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursor: 'pointer',
            pointerEvents: 'auto'
          }
    }
    editPost = () => {
        let editInput = document.createElement('input');
        editInput.setAttribute('type', 'textarea');
        editInput.id = 'editInput';
        editInput.className = 'edit-input';
        editInput.innerHTML = JSON.parse(localStorage.getItem('post'));
        let applyEdit = document.createElement('button');
        applyEdit.id = 'applyEdit';
        applyEdit.className = 'apply-edit';
        applyEdit.innerHTML = 'Apply';
        this.divCon.appendChild(editInput);
        this.divCon.appendChild(applyEdit);
        this.setState({
            cursor: 'not-allowed',
            pointerEvents: 'none'
          });
    }
    render() {
        return (
          <button style={this.state} id="editBtn" className="edit-btn" onClick={this.editPost}>
            Edit
          </button>
        );
      }
}

export default Edit;