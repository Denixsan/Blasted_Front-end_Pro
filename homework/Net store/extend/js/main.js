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