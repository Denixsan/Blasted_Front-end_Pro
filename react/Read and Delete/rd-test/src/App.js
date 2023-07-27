import './App.css';
import {Component} from 'react'
import ViewSection from './ViewSection.js'

 class App extends Component   {
  constructor (props) { 
    super(props)
    this.state = {
      list:[],
      isFetching : true,
      setIsHovering: false,
      currentPost:0
      
      
  }
   
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) 
 .then((json) => {
   this.setState({list: json},
     this.setState({isFetching: false})

     )})
 
}
handleClick = (event) => {
  this.state.setIsHovering?this.setState({setIsHovering:false,currentPost:+event }):this.setState({setIsHovering:true,currentPost:+event})
};

handleMouseOut = () => {
  this.setState({setIsHovering: false});
};
  render() {
    return(
    <div className='mainWindow'>
    {this.state.isFetching?<div>Loading...</div>:
    <ol>
      {(this.state.list).map((value,index) => {return(
        <li key = {value.id}>
          <h3 contentEditable>{value.title}</h3>
          <button id={index} onClick={(event)=>this.handleClick(event.target.id)} >Read</button>
          {this.state.setIsHovering&&index === this.state.currentPost&&<ViewSection idPost= {value.body} />}
          </li>)
        })}
    </ol>}
    </div>
    )
  };
}

export default App;
