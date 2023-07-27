import React from "react";
import Edit from './Edit';

class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            isEditable: false
        }
    }

    displayPost = () => {
        let postId = prompt('Type post ID from 1 to 100');
        if (postId >= 1 && postId <= 100) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then((response) => response.json())
          .then((json) => {
            this.setState({post: json});
          })
        }
    }

    showEdit = () => {
        this.setState({isEditable: true});
    }

    render() {
        console.log(this.state.post);
        return(
            <div id='divCon' className="div-con">
                <button className="run-btn" onClick={this.displayPost}>Apply</button>
                {
                    this.state.post ? 
                    <div>
                        <p>{this.state.post.body}</p>
                        <button className="edit-btn" onClick={this.showEdit}>Edit</button>
                    </div>: null
                }
                    {
                        this.state.isEditable ? <Edit postInfo = {this.state.post}/>: null
                    }
            </div>
        )
    }

}

export default App;