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

function buyAlert() {
    alert(`All stuff's out of stock. Oh shit, I'm sorry.`);
    item.classList.remove(`sub-menu-active`);
}