import React from 'react';

class Edit extends React.Component   {

    constructor (props) {
        super(props);
        this.state = {
            newpost: this.props.postInfo
        }
    }

    editPost = () => {

    }

    render() {
        return(
            <div className='post-div'>
                <form>
                    <textarea className = 'edit-input' rows = '5' cols = '70'>{this.props.newpost.body}</textarea>
                    <button  className='apply-edit' onClick={this.editPost}></button>
                </form>
            </div>
        )
    };
  }
  
  export default Edit;