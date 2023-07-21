import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: 'pointer',
      pointerEvents: 'auto'
    }
  }
  displayPost = () => {
    const divCon = document.createElement(`div`);
    divCon.id = `divCon`;
    divCon.className = `div-con`;
    let idInput = document.createElement(`input`);
    idInput.className = `id-input`;
    idInput.id = `idInput`;
    idInput.setAttribute(`type`, `number`);
    idInput.setAttribute(`placeholder`, `1 to 100`);
    idInput.setAttribute(`min`, `1`);
    idInput.setAttribute(`max`, `100`);

    const applyBtn = document.createElement(`button`);
    applyBtn.className = `submit-btn`;
    applyBtn.innerHTML = `Apply`;
    applyBtn.addEventListener(`click`, function () {
      if (idInput.value >= 1 && idInput.value <= 100) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idInput.value}`)
          .then((response) => response.json())
          .then((json) => {
            let postInfo = json.body;
            let postDiv = document.createElement(`div`);
            postDiv.id = `postDiv`;
            postDiv.className = `post-div`;
            postDiv.innerHTML = postInfo;
            localStorage.setItem('post', JSON.stringify(postInfo));
            console.log(json);
            divCon.appendChild(postDiv);
          })
          .catch((err) => {
            console.error(`Error: `, err);
          });
      } else {
        alert(`Type ID from 1 to 100.`);
      }
    });

    divCon.appendChild(idInput);
    divCon.appendChild(applyBtn);
    document.body.appendChild(divCon);
    this.setState({
      cursor: 'not-allowed',
      pointerEvents: 'none'
    });
  };
  render() {
    return (
      <>
        <button style={this.state} className="run-btn" onClick={this.displayPost}>
          Run
        </button>
        <Delete />
        <Edit />
      </>
    );
  }
}

export default App;
