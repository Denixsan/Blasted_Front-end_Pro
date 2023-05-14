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
            name: `Pepe`,
            items: [{
                image: `images/2.png`,
                name: `Pepe`,
                price: 50,
            }],
            name: `Meme Man`,
            items: [{
                image: `images/3.png`,
                name: `Mario`,
                price: 150,
            }]
        }],
        name: `Memes 2`,
        items: [{
            name: `Spoderman`,
            items: [{
                image: `images/4.png`,
                name: `Spoderman`,
                price: 125,
            }],
            name: `Sanic`,
            items: [{
                image: `images/5.png`,
                name: `Sanic`,
                price: 100,
            }],
            name: `Mario`,
            items: [{
                image: `images/6.png`,
                name: `Mario`,
                price: 150,
            }]
        }],
        name: `Memes 3`,
        items: [{
            name: `Morshu`,
            items: [{
                image: `images/7.png`,
                name: `Morshu`,
                price: 70,
            }],
            name: `Just a lion`,
            items: [{
                image: `images/8.png`,
                name: `Just a lion`,
                price: 30,
            }],
            name: `Ducks`,
            items: [{
                image: `images/9.png`,
                name: `Ducks`,
                price: 110,
            }]
        }]
    }
];

function renderNav() {
    const ul = document.createElement(`ul`);
    ul.className = `root-nav`;
    document.body.appendChild(ul);
    for (let i = 0; i < listObj.length; i++) {
        const li = document.createElement(`li`);
        li.innerHTML = listObj[i].name;
        ul.appendChild(li);
        console.log(`Category`, listObj[i]);
        const ul2 = document.createElement(`ul`);
        for (let j = 0; j < listObj[i].items.length; j++) {
            const li2 = document.createElement(`li`);
            li2.innerHTML = listObj[i].items[j].name;
            li.appendChild(ul2);
            ul2.appendChild(li2);
            console.log(`Subcategory`, listObj[i].items[j]);
            for (let k = 0; k < listObj[i].items[j].items.length; k++) {
                const div = document.createElement(`div`);
                div.className = `card`;
                div.innerHTML = listObj[i].items[j].items[k].name;
                li2.appendChild(div);
                console.log(`Card`, listObj[i].items[j].items[k]);
            };
        };
    };
};

renderNav();

document.querySelector(`.root-nav`).onclick = function(event) {
    console.log(event.target.nextElementSibling);
    closeAllSubMenu(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle(`sub-menu-active`);
}

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

function buyForm() {
   document.getElementById(`buy-form`).style.display = `block`;
}

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
        document.getElementById(`result`).innerHTML += (form[i].name + `: ` + form[i].value + `<br>`);
        }
        document.getElementById(`result`).style.display = `block`;
    }
});