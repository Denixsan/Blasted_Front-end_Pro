// List of users

let userObj = [
    {
        name: `Carl`,
        password: `1234`,
        age: 35,
        email: `carl1234@poot.com`,
        phone: 88005553535,
        card: 5432133722329734
    },
    {
        name: `Carla`,
        password: `1111`,
        age: 28,
        email: `carlafe@poot.com`,
        phone: 2283221488,
        card: 5679135526201213
    },
    {
        name: `Charlotte`,
        password: `0000`,
        age: 42,
        email: `pusca@poot.com`,
        phone: 0752324523,
        card: 6566148593108271
    }
];

console.log(userObj);

function userNav() {
    const posDiv = document.getElementById(`posDiv`);
    const ul = document.createElement(`ul`);
    ul.className = `user-nav`;
    ul.id = `userNav`
  
    for (let i = 0; i < userObj.length; i++) {
      const li = document.createElement(`li`);
      const editBtn = document.createElement(`button`);
      editBtn.id = `editBtn`;
      editBtn.className = `edit-btn`;
      editBtn.innerHTML = `Edit`;
      const removeBtn = document.createElement(`button`);
      removeBtn.id = `removeBtn`;
      removeBtn.className = `remove-btn`;
      removeBtn.setAttribute(`data-cidx`, [i]);
      removeBtn.innerHTML = `Remove`;
      removeBtn.addEventListener('click', function (event) {
        if (confirm(`Are you sure you want to delete?`)) {
            let cidx = +event.target.getAttribute('data-cidx');
            userObj.splice(cidx, 1);
            posDiv.innerHTML = ``;
            userNav();
            console.log(userObj);
        }
      });
      const viewBtn = document.createElement(`button`);
      viewBtn.id = `viewBtn`;
      viewBtn.className = `view-btn`;
      viewBtn.innerHTML = `View`;
      viewBtn.setAttribute(`data-cidx`, [i]);

    viewBtn.addEventListener(`click`, function(event) {
        let cidx = +event.target.getAttribute(`data-cidx`);
        const viewDiv = document.createElement(`div`);
        viewDiv.style.display = `flex`;
        viewDiv.id = `viewDiv`;
        viewDiv.className = `view-div`;
        viewDiv.innerHTML += `<span>User name: ${userObj[cidx].name}<span><br><span>Password: ${userObj[cidx].password}<span><br>
        <span>User's Age: ${userObj[cidx].age}<span><br><span>Email: ${userObj[cidx].email}<span><br><span>Phone number: ${userObj[cidx].phone}<span><br>
        <span>Card number: ${userObj[cidx].card}<span><br>`;

        let closeBtn = document.createElement(`button`);
        closeBtn.setAttribute(`class`, `close-btn`);
        closeBtn.innerHTML = `Close`;
        closeBtn.addEventListener(`click`, function() {
            viewDiv.innerHTML = ``;
            viewDiv.style.display = `none`;
            viewDiv.remove();
            for (const button of document.querySelectorAll("#editBtn")) {
                button.style.cursor = `pointer`;
                button.style.pointerEvents = `auto`;
              }
            for (const button2 of document.querySelectorAll("#removeBtn")) {
                button2.style.cursor = `pointer`;
                button2.style.pointerEvents = `auto`;
            }
            for (const button3 of document.querySelectorAll("#viewBtn")) {
                button3.style.cursor = `pointer`;
                button3.style.pointerEvents = `auto`;
            }
        });
        for (const button of document.querySelectorAll("#editBtn")) {
            button.style.cursor = `not-allowed`;
            button.style.pointerEvents = `none`;
        }
        for (const button2 of document.querySelectorAll("#removeBtn")) {
            button2.style.cursor = `not-allowed`;
            button2.style.pointerEvents = `none`;
        }
        for (const button3 of document.querySelectorAll("#viewBtn")) {
            button3.style.cursor = `not-allowed`;
            button3.style.pointerEvents = `none`;
        }
        viewDiv.appendChild(closeBtn);
        posDiv.appendChild(viewDiv);
    });

      li.innerHTML = `<span>User ${[i+1]}: ${userObj[i].name}</span>`;
    
      li.appendChild(editBtn);
      li.appendChild(removeBtn);
      li.appendChild(viewBtn);
      ul.appendChild(li);
    }
  
    posDiv.appendChild(ul);
  }

userNav();