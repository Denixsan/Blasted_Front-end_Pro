// List of users

let userObj = [];

// let userObj = [
//     {
//         name: `Carl`,
//         password: `1234`,
//         age: 35,
//         email: `carl1234@poot.com`,
//         phone: 88005553535,
//         card: 5432133722329734
//     },
//     {
//         name: `Carla`,
//         password: `1111`,
//         age: 28,
//         email: `carlafe@poot.com`,
//         phone: 2283221488,
//         card: 5679135526201213
//     },
//     {
//         name: `Charlotte`,
//         password: `0000`,
//         age: 42,
//         email: `pusca@poot.com`,
//         phone: 0752324523,
//         card: 6566148593108271
//     }
// ];

// Integrating list of users into HTML

function userNav() {
  userObj = JSON.parse(localStorage.getItem(`users`));
  console.log(userObj);
  console.dir(userObj);
    const posDiv = document.getElementById(`posDiv`);

  // Creating `Add` button

    const addBtn = document.createElement(`button`);
    addBtn.id = `addBtn`;
    addBtn.className = `add-btn`;
    addBtn.innerHTML = `Add`;

    addBtn.addEventListener(`click`, function () {
      const addDiv = document.createElement(`div`);
      addDiv.id = `addDiv`;
      addDiv.className = `add-div`;
      addDiv.style.display = `flex`;

  // Creating form inside addDiv

      const addForm = document.createElement(`form`);
      addForm.id = `addForm`;
      addForm.className = `add_form`;
      
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

      // Creating the `Apply changes` button

      const btnAC = document.createElement(`input`);
      btnAC.id = `btnAC`;
      btnAC.className = `btn_ac`;
      btnAC.setAttribute(`type`, `submit`);
      btnAC.setAttribute(`value`, `CREATE`);

      // Creating the alert text below `APPLY CHANGES` button

      let alertText = document.createElement(`span`);
      alertText.className = `alert-text`;

       // Submit and validate creation

      addForm.addEventListener (`submit`, (event) => {
        event.preventDefault();
        if (confirm(`Are you sure you want to create user?`)) {
          for (j = 0; j < addForm.length - 1; j++) {
            if (!addForm[0].value.match(patternName)) {
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = `Your name must consist letters only [a-z].`;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is invalid";
              break;
            } else if (!addForm[1].value.match(patternPSWRD)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = `Your password must consist at least 4 numbers only [0-9].`;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is invalid";
              break;
            } else if (!addForm[2].value.match(patternAge)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = `Your password must consist at least 2 numbers only [0-9].`;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is invalid";
              break;
             } else if (!addForm[3].value.match(patternEmail)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = `POOTIS POOTIS POOTIS`;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is NOT POOTIS";
              break;
              } else if (!addForm[4].value.match(patternPhone)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = `Your phone number is not correct.`;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is invalid";
              break;
              } else if (!addForm[5].value.match(patternCard)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = `Your card number is not correct.`;
              alertText.innerHTML = "One of your inputs is invalid";
                break;
            } else {
              addForm.classList.add("valid");
              addForm.classList.remove("invalid");
              alertText.innerHTML = "";
            }
            
          }
          if (alertText.innerHTML === ``) {
            console.log(`Yes`);
            userObj.push({name: addForm.userName.value, password: addForm.pswrd.value, 
              age: addForm.userAge.value, email: addForm.userEmail.value, phone: addForm.userPhone.value,
            card: addForm.userCard.value});
            localStorage.setItem('users', JSON.stringify(userObj));
              posDiv.innerHTML = ``;
              userNav();
            alert(`Your creation is saved.`);
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
            addDiv.innerHTML = ``;
            addDiv.style.display = `none`;
            addDiv.remove();
          }
        } else {
          console.log(`No`);
          alert(`Creation is cancelled.`);
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
          addDiv.innerHTML = ``;
          addDiv.style.display = `none`;
          addDiv.remove();
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

      addForm.appendChild(userNameLabel);
      addForm.appendChild(userName);
      addForm.appendChild(alertTextName);
      addForm.appendChild(pswrdLabel);
      addForm.appendChild(pswrd);
      addForm.appendChild(alertTextPSWRD);
      addForm.appendChild(userAgeLabel);
      addForm.appendChild(userAge);
      addForm.appendChild(alertTextAge);
      addForm.appendChild(userEmailLabel);
      addForm.appendChild(userEmail);
      addForm.appendChild(alertTextEmail);
      addForm.appendChild(userPhoneLabel);
      addForm.appendChild(userPhone);
      addForm.appendChild(alertTextPhone);
      addForm.appendChild(userCardLabel);
      addForm.appendChild(userCard);
      addForm.appendChild(alertTextCard);
      addForm.appendChild(btnAC);
      addForm.appendChild(alertText);
      addDiv.appendChild(addForm);
      posDiv.appendChild(addDiv);
      console.dir(addForm);
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
  
    for (let i = 0; i < userObj.length; i++) {
      const li = document.createElement(`li`);

    // Creating `Edit` button

      const editBtn = document.createElement(`button`);
      editBtn.id = `editBtn`;
      editBtn.className = `edit-btn`;
      editBtn.innerHTML = `Edit`;
      editBtn.setAttribute(`data-cidx`, [i]);

      editBtn.addEventListener(`click`, function (event) {
        let cidx = +event.target.getAttribute(`data-cidx`);
        const editDiv = document.createElement(`div`);
        editDiv.id = `editDiv`;
        editDiv.className = `edit-div`;
        editDiv.style.display = `flex`;

    // Creating form inside editDiv

        const editForm = document.createElement(`form`);
        editForm.id = `editForm`;
        editForm.className = `edit_form`;
        
        // Creating the input for name

        const userNameLabel = document.createElement(`label`);
        userNameLabel.setAttribute(`for`, `userName`);
        userNameLabel.innerHTML = `User's name:`;

        let userName = document.createElement(`input`);
        userName.setAttribute(`type`, `text`);
        userName.id = `userName`;
        userName.className = `form_input`;
        userName.setAttribute(`name`, `user_name`);
        userName.setAttribute(`value`, `${userObj[cidx].name}`);
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
        pswrd.setAttribute(`value`, `${userObj[cidx].password}`);
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
        userAge.setAttribute(`value`, `${userObj[cidx].age}`);
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
        userEmail.setAttribute(`value`, `${userObj[cidx].email}`);
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
        userPhone.setAttribute(`value`, `${userObj[cidx].phone}`);
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
        userCard.setAttribute(`value`, `${userObj[cidx].card}`);
        userCard.setAttribute(`placeholder`, `1111222233334444`);

        let alertTextCard = document.createElement(`span`);
        alertTextCard.className = `alert-text`;
        const patternCard = /^[0-9]{16}$/;

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

        editForm.addEventListener (`submit`, (event) => {
          event.preventDefault();
          if (confirm(`Are you sure you want to apply changes?`)) {
            for (j = 0; j < editForm.length - 1; j++) {
              if (!editForm[0].value.match(patternName)) {
                  editForm.classList.remove("valid");
                  editForm.classList.add("invalid");
                  alertTextName.innerHTML = `Your name must consist letters only [a-z].`;
                  alertTextPSWRD.innerHTML = ``;
                  alertTextAge.innerHTML = ``;
                  alertTextEmail.innerHTML = ``;
                  alertTextPhone.innerHTML = ``;
                  alertTextCard.innerHTML = ``;
                  alertText.innerHTML = "One of your inputs is invalid";
                  break;
              } else if (!editForm[1].value.match(patternPSWRD)){
                editForm.classList.remove("valid");
                editForm.classList.add("invalid");
                alertTextName.innerHTML = ``;
                alertTextPSWRD.innerHTML = `Your password must consist at least 4 numbers only [0-9].`;
                alertTextAge.innerHTML = ``;
                alertTextEmail.innerHTML = ``;
                alertTextPhone.innerHTML = ``;
                alertTextCard.innerHTML = ``;
                alertText.innerHTML = "One of your inputs is invalid";
                break;
              } else if (!editForm[2].value.match(patternAge)){
                editForm.classList.remove("valid");
                editForm.classList.add("invalid");
                alertTextName.innerHTML = ``;
                alertTextPSWRD.innerHTML = ``;
                alertTextAge.innerHTML = `Your password must consist at least 2 numbers only [0-9].`;
                alertTextEmail.innerHTML = ``;
                alertTextPhone.innerHTML = ``;
                alertTextCard.innerHTML = ``;
                alertText.innerHTML = "One of your inputs is invalid";
                break;
               } else if (!editForm[3].value.match(patternEmail)){
                  editForm.classList.remove("valid");
                  editForm.classList.add("invalid");
                  alertTextName.innerHTML = ``;
                  alertTextPSWRD.innerHTML = ``;
                  alertTextAge.innerHTML = ``;
                  alertTextEmail.innerHTML = `POOTIS POOTIS POOTIS`;
                  alertTextPhone.innerHTML = ``;
                  alertTextCard.innerHTML = ``;
                  alertText.innerHTML = "One of your inputs is NOT POOTIS";
                  break;
                } else if (!editForm[4].value.match(patternPhone)){
                  editForm.classList.remove("valid");
                  editForm.classList.add("invalid");
                  alertTextName.innerHTML = ``;
                  alertTextPSWRD.innerHTML = ``;
                  alertTextAge.innerHTML = ``;
                  alertTextEmail.innerHTML = ``;
                  alertTextPhone.innerHTML = `Your phone number is not correct.`;
                  alertTextCard.innerHTML = ``;
                  alertText.innerHTML = "One of your inputs is invalid";
                  break;
                } else if (!editForm[5].value.match(patternCard)){
                  editForm.classList.remove("valid");
                  editForm.classList.add("invalid");
                  alertTextName.innerHTML = ``;
                  alertTextPSWRD.innerHTML = ``;
                  alertTextAge.innerHTML = ``;
                  alertTextEmail.innerHTML = ``;
                  alertTextPhone.innerHTML = ``;
                  alertTextCard.innerHTML = `Your card number is not correct.`;
                  alertText.innerHTML = "One of your inputs is invalid";
                  break;
              } else {
                editForm.classList.add("valid");
                editForm.classList.remove("invalid");
                alertText.innerHTML = "";
              }
              
            }
            if (alertText.innerHTML === ``) {
              console.log(`Yes`);
              userObj[cidx].name = editForm.userName.value;
              userObj[cidx].password = editForm.pswrd.value;
              userObj[cidx].age = editForm.userAge.value;
              userObj[cidx].email = editForm.userEmail.value;
              userObj[cidx].phone = editForm.userPhone.value;
              userObj[cidx].card = editForm.userCard.value;
              localStorage.setItem('users', JSON.stringify(userObj));
              li.innerHTML = `<span>User ${[i+1]}: ${userObj[i].name}</span>`;
              li.appendChild(editBtn);
              li.appendChild(removeBtn);
              li.appendChild(viewBtn);
              alert(`Your changes are saved.`);
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
              editDiv.innerHTML = ``;
              editDiv.style.display = `none`;
              editDiv.remove();
            }
          } else {
            console.log(`No`);
            alert(`Your changes are cancelled.`);
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
            editDiv.innerHTML = ``;
            editDiv.style.display = `none`;
            editDiv.remove();
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

        editForm.appendChild(userNameLabel);
        editForm.appendChild(userName);
        editForm.appendChild(alertTextName);
        editForm.appendChild(pswrdLabel);
        editForm.appendChild(pswrd);
        editForm.appendChild(alertTextPSWRD);
        editForm.appendChild(userAgeLabel);
        editForm.appendChild(userAge);
        editForm.appendChild(alertTextAge);
        editForm.appendChild(userEmailLabel);
        editForm.appendChild(userEmail);
        editForm.appendChild(alertTextEmail);
        editForm.appendChild(userPhoneLabel);
        editForm.appendChild(userPhone);
        editForm.appendChild(alertTextPhone);
        editForm.appendChild(userCardLabel);
        editForm.appendChild(userCard);
        editForm.appendChild(alertTextCard);
        editForm.appendChild(btnAC);
        editForm.appendChild(alertText);
        editDiv.appendChild(editForm);
        posDiv.appendChild(editDiv);
        console.dir(editForm);
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

if (userObj === null){
  console.log(2);
  const posDiv = document.getElementById(`posDiv`);

  // Creating `Add` button

    const addBtn = document.createElement(`button`);
    addBtn.id = `addBtn`;
    addBtn.className = `add-btn`;
    addBtn.innerHTML = `Add`;

    addBtn.addEventListener(`click`, function () {
      const addDiv = document.createElement(`div`);
      addDiv.id = `addDiv`;
      addDiv.className = `add-div`;
      addDiv.style.display = `flex`;

  // Creating form inside addDiv

      const addForm = document.createElement(`form`);
      addForm.id = `addForm`;
      addForm.className = `add_form`;
      
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

      // Creating the `Apply changes` button

      const btnAC = document.createElement(`input`);
      btnAC.id = `btnAC`;
      btnAC.className = `btn_ac`;
      btnAC.setAttribute(`type`, `submit`);
      btnAC.setAttribute(`value`, `CREATE`);

      // Creating the alert text below `APPLY CHANGES` button

      let alertText = document.createElement(`span`);
      alertText.className = `alert-text`;

       // Submit and validate creation

      addForm.addEventListener (`submit`, (event) => {
        event.preventDefault();
        if (confirm(`Are you sure you want to create user?`)) {
          for (j = 0; j < addForm.length - 1; j++) {
            if (!addForm[0].value.match(patternName)) {
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = `Your name must consist letters only [a-z].`;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is invalid";
              break;
            } else if (!addForm[1].value.match(patternPSWRD)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = `Your password must consist at least 4 numbers only [0-9].`;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is invalid";
              break;
            } else if (!addForm[2].value.match(patternAge)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = `Your password must consist at least 2 numbers only [0-9].`;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is invalid";
              break;
             } else if (!addForm[3].value.match(patternEmail)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = `POOTIS POOTIS POOTIS`;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is NOT POOTIS";
              break;
              } else if (!addForm[4].value.match(patternPhone)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = `Your phone number is not correct.`;
              alertTextCard.innerHTML = ``;
              alertText.innerHTML = "One of your inputs is invalid";
              break;
              } else if (!addForm[5].value.match(patternCard)){
              addForm.classList.remove("valid");
              addForm.classList.add("invalid");
              alertTextName.innerHTML = ``;
              alertTextPSWRD.innerHTML = ``;
              alertTextAge.innerHTML = ``;
              alertTextEmail.innerHTML = ``;
              alertTextPhone.innerHTML = ``;
              alertTextCard.innerHTML = `Your card number is not correct.`;
              alertText.innerHTML = "One of your inputs is invalid";
                break;
            } else {
              addForm.classList.add("valid");
              addForm.classList.remove("invalid");
              alertText.innerHTML = "";
            }
            
          }
          if (alertText.innerHTML === ``) {
            console.log(`Yes`);
            userObj += ({name: addForm.userName.value, password: addForm.pswrd.value, 
              age: addForm.userAge.value, email: addForm.userEmail.value, phone: addForm.userPhone.value,
            card: addForm.userCard.value});
            localStorage.setItem('users', JSON.stringify(userObj));
              posDiv.innerHTML = ``;
              userNav();
            alert(`Your creation is saved.`);
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
            addDiv.innerHTML = ``;
            addDiv.style.display = `none`;
            addDiv.remove();
          }
        } else {
          console.log(`No`);
          alert(`Creation is cancelled.`);
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
          addDiv.innerHTML = ``;
          addDiv.style.display = `none`;
          addDiv.remove();
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

      addForm.appendChild(userNameLabel);
      addForm.appendChild(userName);
      addForm.appendChild(alertTextName);
      addForm.appendChild(pswrdLabel);
      addForm.appendChild(pswrd);
      addForm.appendChild(alertTextPSWRD);
      addForm.appendChild(userAgeLabel);
      addForm.appendChild(userAge);
      addForm.appendChild(alertTextAge);
      addForm.appendChild(userEmailLabel);
      addForm.appendChild(userEmail);
      addForm.appendChild(alertTextEmail);
      addForm.appendChild(userPhoneLabel);
      addForm.appendChild(userPhone);
      addForm.appendChild(alertTextPhone);
      addForm.appendChild(userCardLabel);
      addForm.appendChild(userCard);
      addForm.appendChild(alertTextCard);
      addForm.appendChild(btnAC);
      addForm.appendChild(alertText);
      addDiv.appendChild(addForm);
      posDiv.appendChild(addDiv);
      console.dir(addForm);
    });
    posDiv.appendChild(addBtn);
}

else {
  console.log(1);
  userNav();
}