const divCon = document.createElement(`div`);
divCon.id = `divCon`;
divCon.className = `div-con`;
const runBtn = document.createElement(`button`);
runBtn.className = `run-btn`;
runBtn.innerHTML = `Run`
runBtn.addEventListener(`click`, function () {

    let idInput = document.createElement(`input`);
    idInput.className = `id-input`;
    idInput.id = `idInput`
    idInput.setAttribute(`type`, `number`);
    idInput.setAttribute(`placeholder`, `1 to 100`);
    idInput.setAttribute(`min`, `1`);
    idInput.setAttribute(`max`, `100`);

    const applyBtn = document.createElement(`button`);
    applyBtn.className = `submit-btn`;
    applyBtn.innerHTML = `Apply`
    applyBtn.addEventListener(`click`, function () {
        let postDiv = document.createElement(`div`);
        postDiv.id = `postDiv`;
        postDiv.className = `post-div`;
        // console.log(idInput);
        // console.dir(idInput);
        if (idInput.value >= 1 && idInput.value <= 100) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idInput.value}`)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => {
            console.error(`Error: `, err)
        })
        const commentBtn = document.createElement(`button`);
        commentBtn.className = `comment-btn`;
        commentBtn.innerHTML = `Comments`;
        commentBtn.addEventListener(`click`, function() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${idInput.value}/comments`)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => {
                console.error(`Error: `, err)
            })
        })
        divCon.appendChild(commentBtn);
        }
        else {
            alert(`Type ID from 1 to 100.`);
        }
    });

    runBtn.style.cursor = `not-allowed`;
    runBtn.style.pointerEvents = `none`;

    divCon.appendChild(idInput);
    divCon.appendChild(applyBtn);
});
divCon.appendChild(runBtn);
document.body.appendChild(divCon);