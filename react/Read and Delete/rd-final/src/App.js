import React from "react";
import ViewContent from "./ViewContent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isFetching: true,
      isHovering: false,
      currentPost: 0,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ list: json, isFetching: false });
      });
  }
  openRead = (event) => {
    this.state.isHovering
      ? this.setState({ isHovering: false })
      : this.setState({ isHovering: true, currentPost: +event });
  };

  render() {
    return (
      <div className="div-con">
        {this.state.isFetching ? null : (
          <ol className="list">
            {this.state.list.map((value, index) => {
              return (
                <li key={value.id}>
                  <h3 contentEditable>
                    {value.id}. {value.title}
                  </h3>
                  <button
                    id={index}
                    className="read-btn"
                    onClick={(event) => this.openRead(event.target.id)}
                  >
                    Read
                  </button>
                  {this.state.isHovering && index === this.state.currentPost ? (
                    <ViewContent postId={value.body} />
                  ) : null}
                </li>
              );
            })}
          </ol>
        )}
      </div>
    );
  }
}

export default App;