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
                name: `Mario`,
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

//  `Result` block assignment

const resultDiv = document.getElementById(`result`);

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

// The new array of objects declaration for localStorage 

let dataForm = [];

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
    dataForm.push({name: `Name of product`, value: listObj[cidx].items[sidx].items[pidx].name},{name: `Price`, value: (listObj[cidx].items[sidx].items[pidx].price + `$`)});
}

// Form validation, opening the `Result` block and saving to localStorage

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
            dataForm.push({name: form[i].name, value: form[i].value});  
            resultDiv.innerHTML += (form[i].name + `: ` + form[i].value + `<br>`);
        }
        let totalPrice = price * form[5].value;
        resultDiv.innerHTML += `Total price: ` + totalPrice + `$<br><br>`;
        dataForm.push({name: `Total price`, value: totalPrice});
        resultDiv.style.display = `block`;
        console.log(dataForm);
        localStorage.setItem(`dataForm`, JSON.stringify(dataForm));
        dataforma = JSON.parse(localStorage.getItem(`dataForm`));
        for (y = 0; y < dataforma.length; y++) {
            myOrderBlock.innerHTML += (dataforma[y].name + `: ` + dataforma[y].value + `<br>`);
        };
        dataForm = [];
    }
});

// Opening the 'My orders' block

function myOrder() {
    resultDiv.style.display = `none`;
    document.getElementById(`buy-form`).style.display = `none`;
    document.getElementById(`ulNav`).style.display = `none`;
    document.getElementById(`myOrderBlock`).style.display = `block`
    myOrderBlock.style.display = `block`;
}

// Closing the 'My orders' block

function myOrderClose() {
    resultDiv.style.display = `none`;
    document.getElementById(`buy-form`).style.display = `none`;
    document.getElementById(`ulNav`).style.display = `block`;
    document.getElementById(`myOrderBlock`).style.display = `none`
    myOrderBlock.style.display = `none`;
}