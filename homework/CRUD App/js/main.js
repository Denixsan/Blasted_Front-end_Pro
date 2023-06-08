// List of users

let userObj = [];

console.log(userObj);
console.dir(userObj);

// Integrating list of users into HTML

function userNav() {

  // Creating position block
  
  const posDiv = document.createElement(`div`);
  posDiv.id = `posDiv`;
  posDiv.className = `pos-div`;
  document.body.appendChild(posDiv);

  // Receiving list of users from localStorage (if we have one)

  userObj = JSON.parse(localStorage.getItem(`users`));
  console.log(userObj);
  console.dir(userObj);

  // Creating `Add` button

    const addBtn = document.createElement(`button`);
    addBtn.id = `addBtn`;
    addBtn.className = `add-btn`;
    addBtn.innerHTML = `Add`;

    addBtn.addEventListener(`click`, function () {
      createForm ();
    });

    const ul = document.createElement(`ul`);
    ul.className = `user-nav`;
    ul.id = `userNav`;
    addBtn.addEventListener(`click`, function () {
      const createDiv = document.createElement(`div`);
      createDiv.id = `createDiv`;
      createDiv.className = `create-div`;
      createDiv.style.display = `flex`;

    });
  
    for (var i = 0; i < userObj.length; i++) {
      const li = document.createElement(`li`);

    // Creating `Edit` button

      const editBtn = document.createElement(`button`);
      editBtn.id = `editBtn`;
      editBtn.className = `edit-btn`;
      editBtn.innerHTML = `Edit`;
      editBtn.setAttribute(`data-cidx`, [i]);

      editBtn.addEventListener(`click`, function (event){
        createForm (`edit`, `edit`);
      }); 

    // Creating `Remove` button

      const removeBtn = document.createElement(`button`);
      removeBtn.id = `removeBtn`;
      removeBtn.className = `remove-btn`;
      removeBtn.setAttribute(`data-cidx`, [i]);
      removeBtn.innerHTML = `Remove`;

      removeBtn.addEventListener('click', function (event) {
        if (confirm(`Are you sure you want to delete?`)) {
            let cidx = +event.target.getAttribute('data-cidx');
            userObj.splice(cidx, 1);
            localStorage.setItem('users', JSON.stringify(userObj));
            posDiv.innerHTML = ``;
            userNav();
            console.log(userObj);
        }
      });

    // Creating `View` button

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
        viewDiv.innerHTML += `<span>User name: ${userObj[cidx].name}</span><br>
                            <span>Password: ${userObj[cidx].password}</span><br>
                            <span>User's Age: ${userObj[cidx].age}</span><br>
                            <span>Email: ${userObj[cidx].email}</span><br>
                            <span>Phone number: ${userObj[cidx].phone}</span><br>
                            <span>Card number: ${userObj[cidx].card}</span><br>`;

        // Creating `Close` button inside viewDiv block

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
            for (const button4 of document.querySelectorAll("#addBtn")) {
              button4.style.cursor = `pointer`;
              button4.style.pointerEvents = `auto`;
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
        for (const button4 of document.querySelectorAll("#addBtn")) {
          button4.style.cursor = `not-allowed`;
          button4.style.pointerEvents = `none`;
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
    posDiv.appendChild(addBtn);
    posDiv.appendChild(ul);
  }

if (userObj.length == 0 && localStorage.getItem(`users`) == null){
  console.log(2);
  const posDiv = document.createElement(`div`);
  posDiv.id = `posDiv`;
  posDiv.className = `pos-div`;
  document.body.appendChild(posDiv);

  // Creating `Add` button

    const addBtn = document.createElement(`button`);
    addBtn.id = `addBtn`;
    addBtn.className = `add-btn`;
    addBtn.innerHTML = `Add`;

    addBtn.addEventListener(`click`, function() {
      createForm ();
    });

    posDiv.appendChild(addBtn);
}

else {
  console.log(1);
  userNav();
}

// Function for form

function createForm(listDiv, listForm) {
  if (listDiv === 'edit') {
    let cidx = +event.target.getAttribute(`data-cidx`);
    window.cidx = cidx;
    listDiv = document.createElement(`div`);
    listDiv.id = `editDiv`;
    listDiv.className = `edit-div`;
  }
  else {
    listDiv = document.createElement(`div`);
    listDiv.id = `addDiv`;
    listDiv.className = `add-div`;
  }
  listDiv.style.display = `flex`;

// Creating form inside editDiv

  if (listDiv.id === `editDiv`) {
    listForm = document.createElement(`form`);
    listForm.id = `editForm`;
    listForm.className = `edit_form`;
  }
  else {
    listForm = document.createElement(`form`);
    listForm.id = `addForm`;
    listForm.className = `add_form`;
  }
  
  // Creating the input for name

  const userNameLabel = document.createElement(`label`);
  userNameLabel.setAttribute(`for`, `userName`);
  userNameLabel.innerHTML = `User's name:`;

  let userName = document.createElement(`input`);
  userName.setAttribute(`type`, `text`);
  userName.id = `userName`;
  userName.className = `form_input`;
  userName.setAttribute(`name`, `user_name`);
  userName.setAttribute(`placeholder`, `Name`);

  let alertTextName = document.createElement(`span`);
  alertTextName.className = `alert-text`;
  const patternName = /[a-zA-Z]{1,}$/;

  // Creating the input for password

  const pswrdLabel = document.createElement(`label`);
  pswrdLabel.setAttribute(`for`, `pswrd`);
  pswrdLabel.innerHTML = `Password:`;

  let pswrd = document.createElement(`input`);
  pswrd.setAttribute(`type`, `password`);
  pswrd.id = `pswrd`;
  pswrd.className = `form_input`;
  pswrd.setAttribute(`name`, `user_password`);
  pswrd.setAttribute(`placeholder`, `Password`);

  let alertTextPSWRD = document.createElement(`span`);
  alertTextPSWRD.className = `alert-text`;
  const patternPSWRD = /^[0-9]{4,}$/;

  // Creating the input for age

  const userAgeLabel = document.createElement(`label`);
  userAgeLabel.setAttribute(`for`, `userAge`);
  userAgeLabel.innerHTML = `User's age [10-110]:`;

  let userAge = document.createElement(`input`);
  userAge.setAttribute(`type`, `number`);
  userAge.id = `userAge`;
  userAge.className = `form_input`;
  userAge.setAttribute(`name`, `user_age`);
  userAge.setAttribute(`min`, `10`);
  userAge.setAttribute(`max`, `110`);
  userAge.setAttribute(`placeholder`, `69`);

  let alertTextAge = document.createElement(`span`);
  alertTextAge.className = `alert-text`;
  const patternAge = /^[0-9]{2,}$/;

  // Creating the input for email

  const userEmailLabel = document.createElement(`label`);
  userEmailLabel.setAttribute(`for`, `userEmail`);
  userEmailLabel.innerHTML = `User's @poot.com email:`;

  let userEmail = document.createElement(`input`);
  userEmail.setAttribute(`type`, `email`);
  userEmail.id = `userEmail`;
  userEmail.className = `form_input`;
  userEmail.setAttribute(`name`, `user_email`);
  userEmail.setAttribute(`placeholder`, `abcd@poot.com`);

  let alertTextEmail = document.createElement(`span`);
  alertTextEmail.className = `alert-text`;
  const patternEmail = /^[^ ]+@poot+\.com$/;

  // Creating the input for phone number

  const userPhoneLabel = document.createElement(`label`);
  userPhoneLabel.setAttribute(`for`, `userPhone`);
  userPhoneLabel.innerHTML = `User's phone number:`;

  let userPhone = document.createElement(`input`);
  userPhone.setAttribute(`type`, `text`);
  userPhone.id = `userPhone`;
  userPhone.className = `form_input`;
  userPhone.setAttribute(`name`, `user_phone`);
  userPhone.setAttribute(`placeholder`, `1112223344`);

  let alertTextPhone = document.createElement(`span`);
  alertTextPhone.className = `alert-text`;
  const patternPhone = /^[0-9]{10}$/;

  // Creating the input for card number

  const userCardLabel = document.createElement(`label`);
  userCardLabel.setAttribute(`for`, `userCard`);
  userCardLabel.innerHTML = `User's card number:`;

  let userCard = document.createElement(`input`);
  userCard.setAttribute(`type`, `text`);
  userCard.id = `userCard`;
  userCard.className = `form_input`;
  userCard.setAttribute(`name`, `user_card`);
  userCard.setAttribute(`placeholder`, `1111222233334444`);

  let alertTextCard = document.createElement(`span`);
  alertTextCard.className = `alert-text`;
  const patternCard = /^[0-9]{16}$/;

  if (listDiv.id === `editDiv`) {
    userName.setAttribute(`value`, `${userObj[cidx].name}`);
    pswrd.setAttribute(`value`, `${userObj[cidx].password}`);
    userAge.setAttribute(`value`, `${userObj[cidx].age}`);
    userEmail.setAttribute(`value`, `${userObj[cidx].email}`);
    userPhone.setAttribute(`value`, `${userObj[cidx].phone}`);
    userCard.setAttribute(`value`, `${userObj[cidx].card}`);
  }

  // Creating the `Apply changes` button

  const btnAC = document.createElement(`input`);
  btnAC.id = `btnAC`;
  btnAC.className = `btn_ac`;
  btnAC.setAttribute(`type`, `submit`);
  btnAC.setAttribute(`value`, `APPLY CHANGES`);

  // Creating the alert text below `APPLY CHANGES` button

  let alertText = document.createElement(`span`);
  alertText.className = `alert-text`;

  // Submit and validate changes

  listForm.addEventListener (`submit`, (event) => {
    event.preventDefault();
    if (confirm(`Are you sure you want to complete the operation?`)) {
      for (j = 0; j < listForm.length - 1; j++) {
        if (!listForm[0].value.match(patternName)) {
          listForm.classList.remove("valid");
          listForm.classList.add("invalid");
            alertTextName.innerHTML = `Your name must consist letters only [a-z].`;
            alertTextPSWRD.innerHTML = ``;
            alertTextAge.innerHTML = ``;
            alertTextEmail.innerHTML = ``;
            alertTextPhone.innerHTML = ``;
            alertTextCard.innerHTML = ``;
            alertText.innerHTML = "One of your inputs is invalid";
            break;
        } else if (!listForm[1].value.match(patternPSWRD)){
          listForm.classList.remove("valid");
          listForm.classList.add("invalid");
          alertTextName.innerHTML = ``;
          alertTextPSWRD.innerHTML = `Your password must consist at least 4 numbers only [0-9].`;
          alertTextAge.innerHTML = ``;
          alertTextEmail.innerHTML = ``;
          alertTextPhone.innerHTML = ``;
          alertTextCard.innerHTML = ``;
          alertText.innerHTML = "One of your inputs is invalid";
          break;
        } else if (!listForm[2].value.match(patternAge)){
          listForm.classList.remove("valid");
          listForm.classList.add("invalid");
          alertTextName.innerHTML = ``;
          alertTextPSWRD.innerHTML = ``;
          alertTextAge.innerHTML = `Your age must consist at least 2 numbers only [0-9].`;
          alertTextEmail.innerHTML = ``;
          alertTextPhone.innerHTML = ``;
          alertTextCard.innerHTML = ``;
          alertText.innerHTML = "One of your inputs is invalid";
          break;
         } else if (!listForm[3].value.match(patternEmail)){
          listForm.classList.remove("valid");
          listForm.classList.add("invalid");
            alertTextName.innerHTML = ``;
            alertTextPSWRD.innerHTML = ``;
            alertTextAge.innerHTML = ``;
            alertTextEmail.innerHTML = `POOTIS POOTIS POOTIS`;
            alertTextPhone.innerHTML = ``;
            alertTextCard.innerHTML = ``;
            alertText.innerHTML = "One of your inputs is NOT POOTIS";
            break;
          } else if (!listForm[4].value.match(patternPhone)){
            listForm.classList.remove("valid");
            listForm.classList.add("invalid");
            alertTextName.innerHTML = ``;
            alertTextPSWRD.innerHTML = ``;
            alertTextAge.innerHTML = ``;
            alertTextEmail.innerHTML = ``;
            alertTextPhone.innerHTML = `Your phone number is not correct.`;
            alertTextCard.innerHTML = ``;
            alertText.innerHTML = "One of your inputs is invalid";
            break;
          } else if (!listForm[5].value.match(patternCard)){
            listForm.classList.remove("valid");
            listForm.classList.add("invalid");
            alertTextName.innerHTML = ``;
            alertTextPSWRD.innerHTML = ``;
            alertTextAge.innerHTML = ``;
            alertTextEmail.innerHTML = ``;
            alertTextPhone.innerHTML = ``;
            alertTextCard.innerHTML = `Your card number is not correct.`;
            alertText.innerHTML = "One of your inputs is invalid";
            break;
        } else {
          listForm.classList.add("valid");
          listForm.classList.remove("invalid");
          alertText.innerHTML = "";
        }
        
      }
      if (alertText.innerHTML === ``) {
        console.log(`Yes`);
        if (listDiv.id === `editDiv`) {
        userObj[cidx].name = listForm.userName.value;
        userObj[cidx].password = listForm.pswrd.value;
        userObj[cidx].age = listForm.userAge.value;
        userObj[cidx].email = listForm.userEmail.value;
        userObj[cidx].phone = listForm.userPhone.value;
        userObj[cidx].card = listForm.userCard.value;
        localStorage.setItem('users', JSON.stringify(userObj));
        posDiv.innerHTML = ``;
        userNav();
        alert(`Your changes are saved.`);
        }
        else {
          userObj.push({name: addForm.userName.value, password: addForm.pswrd.value, 
            age: addForm.userAge.value, email: addForm.userEmail.value, phone: addForm.userPhone.value,
          card: addForm.userCard.value});
          localStorage.setItem('users', JSON.stringify(userObj));
          posDiv.innerHTML = ``;
          userNav();
          alert(`Your creation is saved.`);
        }
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
        for (const button4 of document.querySelectorAll("#addBtn")) {
          button4.style.cursor = `pointer`;
          button4.style.pointerEvents = `auto`;
        }
      }
    } else {
      console.log(`No`);
      if (listDiv.id === `editDiv`) {
      alert(`Your changes are cancelled.`);
      }
      else {
        alert(`Creation is cancelled.`);
      }
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
      for (const button4 of document.querySelectorAll("#addBtn")) {
        button4.style.cursor = `pointer`;
        button4.style.pointerEvents = `auto`;
      }
      listDiv.innerHTML = ``;
      listDiv.style.display = `none`;
      listDiv.remove();
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
  for (const button4 of document.querySelectorAll("#addBtn")) {
    button4.style.cursor = `not-allowed`;
    button4.style.pointerEvents = `none`;
  }

  listForm.appendChild(userNameLabel);
  listForm.appendChild(userName);
  listForm.appendChild(alertTextName);
  listForm.appendChild(pswrdLabel);
  listForm.appendChild(pswrd);
  listForm.appendChild(alertTextPSWRD);
  listForm.appendChild(userAgeLabel);
  listForm.appendChild(userAge);
  listForm.appendChild(alertTextAge);
  listForm.appendChild(userEmailLabel);
  listForm.appendChild(userEmail);
  listForm.appendChild(alertTextEmail);
  listForm.appendChild(userPhoneLabel);
  listForm.appendChild(userPhone);
  listForm.appendChild(alertTextPhone);
  listForm.appendChild(userCardLabel);
  listForm.appendChild(userCard);
  listForm.appendChild(alertTextCard);
  listForm.appendChild(btnAC);
  listForm.appendChild(alertText);
  listDiv.appendChild(listForm);
  posDiv.appendChild(listDiv);
  console.dir(listForm);
}