// Product menu declaration

let listObj = [
    {
        name: `Memes 1`,
        items: [{
            name: `Doggy`,
            items: [{
                image: `images/1.png`,
                name: `Doggy`,
                price: 100,
            }],
        },
        {
            name: `Pepe`,
            items: [{
                image: `images/2.png`,
                name: `Pepe`,
                price: 50,
            }],
        },
        {
            name: `Meme Man`,
            items: [{
                image: `images/3.png`,
                name: `Meme Man`,
                price: 150,
            }]
        }],
    },
    {
        name: `Memes 2`,
        items: [{
            name: `Spoderman`,
            items: [{
                image: `images/4.png`,
                name: `Spoderman`,
                price: 125,
            }],
        },
        {
            name: `Sanic`,
            items: [{
                image: `images/5.png`,
                name: `Sanic`,
                price: 100,
            }],
        },
        {
            name: `Mario`,
            items: [{
                image: `images/6.png`,
                name: `Mario`,
                price: 150,
            }]
        }],
    },
    {
        name: `Memes 3`,
        items: [{
            name: `Morshu`,
            items: [{
                image: `images/7.png`,
                name: `Morshu`,
                price: 70,
            }],
        },
        {
            name: `Just a lion`,
            items: [{
                image: `images/8.png`,
                name: `Just a lion`,
                price: 30,
            }],
        },
        {
            name: `Ducks`,
            items: [{
                image: `images/9.png`,
                name: `Ducks`,
                price: 110,
            }]
        }]
    }
];

// New arrays of objects declaration for localStorage 

let dataForm = [];
let dataInfo = [];

const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
}

//  `Result` block assignment

const resultDiv = document.getElementById(`result`);
const myOrderTable = document.getElementById(`myOrderTable`);

// Integrate product menu to HTML

function renderNav() {
    const ul = document.createElement(`ul`);
    ul.className = `root-nav`;
    ul.id = `ulNav`
  
    for (let i = 0; i < listObj.length; i++) {
      const li = document.createElement(`li`);
      li.innerHTML = `<span>${listObj[i].name}</span>`;
  
      // // console.log(`Category`, listObj[i]);
  
      const ul2 = document.createElement(`ul`);

      for (let j = 0; j < listObj[i].items.length; j++) {
        const li2 = document.createElement(`li`);
        li2.innerHTML = `<span>${listObj[i].items[j].name}</span>`;
        //   console.log(`Subcategory`, listObj[i].items[j]);

        const ul3 = document.createElement(`ul`);
        for (let k = 0; k < listObj[i].items[j].items.length; k++) {
          const div = document.createElement(`div`);
          div.className = `card`;
          div.innerHTML = `<img src=${listObj[i].items[j].items[k].image} alt="Pepe">` + `<br>` + `<h3>${listObj[i].items[j].items[k].name}</h3>` + `<p>${listObj[i].items[j].items[k].price}$</p>` + `<br>
                            <button class="buy-btn" data-cidx='${i}' data-sidx='${j}' data-pidx='${k}' onclick="buyForm()">Buy</button>`;
          
          ul3.appendChild(div);
          //   console.log(`Card`, listObj[i].items[j].items[k]);
        }
  
        li2.appendChild(ul3);
  
        ul2.appendChild(li2);
      }
  
      li.appendChild(ul2);
  
      ul.appendChild(li);
    }
  
    document.body.appendChild(ul);
  }

renderNav();

// Creating the `Confirm!` button

function btnFinish(productName, totalPrice) {
    const btnFinish = document.createElement('button');
    btnFinish.textContent = 'Confirm!'
    btnFinish.setAttribute('id', 'btnFinish');
    btnFinish.classList.add('btn-order');


    btnFinish.addEventListener('click', function(){
        resultDiv.style.display = `none`;
        const date = new Date();
        dataForm.push({ name: productName, date: date.toLocaleString("ua", options), price: totalPrice, dataInfo});
        console.log(dataForm);
        dataInfo = [];
        localStorage.setItem('product', JSON.stringify(dataForm));
        cartInfo();
        resultDiv.innerHTML = ``;
    })
    resultDiv.appendChild(btnFinish);
}

// Creating the `My orders` table

function makeTableHTML() {
    let myOrderBlock = document.getElementById(`myOrderBlock`);
    window.myOrderBlock = myOrderBlock;
    let myOrderTable = document.createElement(`table`);
    myOrderTable.id = `myOrderTable`
    const arr3 = [` `,`Product name`, `Date`, `Price`, ` `];
    let row = document.createElement("tr");
    for (let y = 0; y < arr3.length; y++) {
        let td = document.createElement("td");
        td.innerHTML = arr3[y];
        row.appendChild(td);
    }
    myOrderTable.appendChild(row); 
    myOrderBlock.appendChild(myOrderTable);
}

function addRowToTable (array) {
    array = JSON.parse(localStorage.getItem('product'));
    console.log(array);
    for (let x = 0; x < array.length; x++) {
        let newRow = document.createElement("tr");
        let newTd1 = document.createElement(`td`);

        // Creating 'More' button

        let expBtn = document.createElement(`button`);
        expBtn.setAttribute(`id`, `expBtn`);
        expBtn.innerHTML = `More`;
        expBtn.setAttribute(`data-sidx`, x);
        expBtn.addEventListener('click', function () {
          let sidx = +event.target.getAttribute('data-sidx');
          let moreInfo = document.createElement(`div`);
            moreInfo.style.display = `flex`;
            moreInfo.id = `moreInfo`;
            moreInfo.innerHTML = array[sidx].dataInfo.map((x) => `${x.name}: ${x.value}`).join('<br>') + `<br>`;

            // Creating `Close` button inside `moreInfo` block

            let closeBtn = document.createElement(`button`);
            closeBtn.setAttribute(`class`, `close-btn`);
            closeBtn.innerHTML = `Close`;
            closeBtn.addEventListener(`click`, function() {
                moreInfo.innerHTML = ``;
                moreInfo.style.display = `none`;
                moreInfo.remove();
                for (const button of document.querySelectorAll("#expBtn")) {
                    button.style.cursor = `pointer`;
                    button.style.pointerEvents = `auto`;
                  }
                  for (const button2 of document.querySelectorAll("#deleteBtn")) {
                    button2.style.cursor = `pointer`;
                    button2.style.pointerEvents = `auto`;
                  }
            });
            for (const button of document.querySelectorAll("#expBtn")) {
                button.style.cursor = `not-allowed`;
                button.style.pointerEvents = `none`;
            }
            for (const button2 of document.querySelectorAll("#deleteBtn")) {
                button2.style.cursor = `not-allowed`;
                button2.style.pointerEvents = `none`;
            }
            moreInfo.appendChild(closeBtn);
            document.body.appendChild(moreInfo);
        });
        newTd1.appendChild(expBtn);
        newRow.appendChild(newTd1);
        let newTd2 = document.createElement(`td`);
        newTd2.innerHTML = array[x].name;
        newRow.appendChild(newTd2);
        let newTd3 = document.createElement(`td`);
        newTd3.innerHTML = array[x].date;
        newRow.appendChild(newTd3);
        let newTd4 = document.createElement(`td`);
        newTd4.innerHTML = array[x].price;
        newRow.appendChild(newTd4);
        let newTd5 = document.createElement(`td`);

        // Creating 'Delete' button

        let deleteBtn = document.createElement(`button`);
        deleteBtn.setAttribute(`id`, `deleteBtn`);
        deleteBtn.setAttribute(`data-cidx`, [x]);
        deleteBtn.innerHTML = `X`;
        deleteBtn.addEventListener('click', function (event) {
            let cidx = +event.target.getAttribute('data-cidx');
            array.splice(cidx, 1);
            newRow.remove(cidx, 1);
            localStorage.setItem(`product`, JSON.stringify(array));
            cartInfo();
            myOrderBlock.innerHTML = ``;
            makeTableHTML();
            addRowToTable(dataForm);
          });
        newTd5.appendChild(deleteBtn);
        newRow.appendChild(newTd5);
    document.getElementById(`myOrderTable`).appendChild(newRow);
    }
}

// Few adjustments for the `My orders` button

function cartInfo (){
    const link = document.querySelector('.my-order');
    const formInfo = localStorage.getItem('product');
    // console.log(formInfo);
    window.formInfo = formInfo;
    if(formInfo!== null) {
        dataForm = JSON.parse(formInfo)
    } 
    link.innerHTML = `My Orders (${dataForm.length})`
    
}

cartInfo();

//Toggle subcategories in menu

document.querySelector(`.root-nav`).onclick = function(event) {
    console.log(event.target.nextElementSibling);
    closeAllSubMenu(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle(`sub-menu-active`);
}

// Close all submenus, which are not useful for user

function closeAllSubMenu(current = null) {
    let parents = [];
    if (current) {
        console.dir(current);
        let currentParent = current.parentNode;
        while (currentParent) {
            if (currentParent.classList.contains(`root-nav`)) break;
            if (currentParent.nodeName === `UL`) {
                parents.push(currentParent);
            }
            currentParent = currentParent.parentNode;
        }
    };
    const subMenu = document.querySelectorAll(`.root-nav ul`);
    Array.from(subMenu).forEach(item => {
        if (item != current && !parents.includes(item)) {
            item.classList.remove(`sub-menu-active`);
        }
    });       
}


// Open form by clicking the `Buy` button

function buyForm() {
    const cidx = event.target.getAttribute('data-cidx');
    const sidx = event.target.getAttribute('data-sidx');
    const pidx = event.target.getAttribute('data-pidx');
    console.log(cidx, sidx, pidx, listObj[cidx].items[sidx].items[pidx]);
    resultDiv.innerHTML += `<br>Name of product: ` + listObj[cidx].items[sidx].items[pidx].name + `<br>Price: ` + 
    listObj[cidx].items[sidx].items[pidx].price + `$<br>`;
    document.getElementById(`buy-form`).style.display = `block`;
    resultDiv.style.display = `none`;
    window.price = listObj[cidx].items[sidx].items[pidx].price;
    window.productName = listObj[cidx].items[sidx].items[pidx].name;
}

// Form validation and opening the `Result` block

document.querySelector(`form`).addEventListener(`submit`, (event) => {
    event.preventDefault();
    let form = document.getElementById(`buy-form`);
    let alertText = document.getElementById(`alertText`);
    for (i = 0; i < form.length - 2; i++) {
        if (form[i].value === "") {
            form.classList.remove("valid");
            form.classList.add("invalid");
            alertText.innerHTML = "One of your inputs is invalid";
            alertText.style.color = "#ff0000";
            break;
        }
        else {
            form.classList.add("valid");
            form.classList.remove("invalid");
            alertText.innerHTML = ""; 
        }
    };
    if (alertText.innerHTML === ``) {
        form.style.display = `none`;
        for (i = 0; i < form.length - 1; i++) {
            dataInfo.push({name: form[i].name, value: form[i].value}); 
            resultDiv.innerHTML += (form[i].name + `: ` + form[i].value + `<br>`);
        }
        let totalPrice = price * form[5].value;
        dataInfo.push({name: `Total price`, value: totalPrice});
        resultDiv.innerHTML += `Total price: ` + totalPrice + `$<br><br>`;

        btnFinish(productName, totalPrice);
        resultDiv.style.display = `block`;
    }
});


// Opening the 'My orders' block

var isActive = false;

function myOrder() {
  isActive = !isActive;
  if (isActive) {
    resultDiv.style.display = `none`;
    document.getElementById(`buy-form`).style.display = `none`;
    document.getElementById(`ulNav`).style.display = `none`;
    myOrderBlock.style.display = `flex`;
    makeTableHTML();
    addRowToTable(dataForm);
  } else {
    resultDiv.style.display = `none`;
    document.getElementById(`buy-form`).style.display = `none`;
    document.getElementById(`ulNav`).style.display = `block`;
    myOrderBlock.innerHTML = ``;
    myOrderBlock.style.display = `none`;
  }
}