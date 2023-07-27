import './App.css';
import {Component} from 'react'

 class View extends Component   {
  render() {
    return(
     <div className='viewWindow'>
        <h3>Content</h3>
        <p contentEditable>{this.props.idPost}</p>
     </div>
    )
  };
}

export default View;