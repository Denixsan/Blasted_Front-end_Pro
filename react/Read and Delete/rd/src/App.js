import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'auto'
    }
  }
  displayPost = () => {
        this.setState({
      display: 'none'
    });
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
            const editBtn = document.createElement(`button`);
            editBtn.className = `edit-btn`;
            editBtn.innerHTML = `Edit`;
            editBtn.addEventListener('click', function () {
              let editInput = document.createElement('textarea');
              editInput.id = 'editInput';
              editInput.className = 'edit-input';
              editInput.setAttribute('rows', '5');
              editInput.setAttribute('cols', '70');
              editInput.value = postInfo;
              let applyEdit = document.createElement('button');
              applyEdit.id = 'applyEdit';
              applyEdit.className = 'apply-edit';
              applyEdit.innerHTML = 'Apply';
              applyEdit.addEventListener('click', function() {
                postDiv.innerHTML = editInput.value;
                editInput.remove();
                applyEdit.remove();
                postDiv.appendChild(editBtn);
                postDiv.appendChild(deleteBtn);
              })
              divCon.appendChild(editInput);
              divCon.appendChild(applyEdit);
            })
            const deleteBtn = document.createElement(`button`);
            deleteBtn.className = `delete-btn`;
            deleteBtn.innerHTML = `Delete`;
            deleteBtn.addEventListener('click', function () {
              postDiv.innerHTML = ``;
              divCon.appendChild(idInput);
              divCon.appendChild(applyBtn);
            })
            postDiv.appendChild(editBtn);
            postDiv.appendChild(deleteBtn);
            applyBtn.remove();
            idInput.remove();
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
  };

  render() {
    return (
      <>
        <button style={this.state} className="run-btn" onClick={this.displayPost}>
          Run
        </button>
      </>
    );
  }
}

export default App;
