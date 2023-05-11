function makeTableHTML() {
    let newTable = document.createElement(`table`);
    newTable.id = `infoTable`
    const arr3 = [`Name & Surname`, `Birthday`, `Sex`, `City`, `Address`, `Languages`];
    let row = document.createElement("tr");
    for (let y = 0; y < arr3.length; y++) {
        let td = document.createElement("td");
        td.innerHTML = arr3[y];
        row.appendChild(td);
    }
    newTable.appendChild(row); 
    document.body.appendChild(newTable);
}

function addRowToTable (array) {
    let newRow = document.createElement("tr");
    for (let j = 0; j < array.length; j++) {
        let newTd = document.createElement("td");
        newTd.innerHTML = array[j];
        newRow.appendChild(newTd);
    }
    document.getElementById(`infoTable`).appendChild(newRow);
}

document.querySelector(`form`).addEventListener(`submit`, (event) => {
    event.preventDefault();
    const arr1 = [];
    const arr2 = [];
    const form = document.querySelector(`form`);
        for (let x = 0; x < form.length - 1; x++) {
            if (form[x].type === `checkbox` && form[x].checked === true) {
                arr2.push(` ` + form[x].name);
            }            
            else if (form[x].type === `radio` && form[x].checked === true) {
                arr1.push(form[x].value);
            }
            else if (form[x].value != `on` && form[x].value != `` && form[x].type != `radio`){
                arr1.push(form[x].value);
            }
        };
    
    arr1.push(arr2);

    console.log(arr1);
    console.log(arr2);
    console.dir(form);
    if (!(document.getElementById(`infoTable`))) {
        makeTableHTML();
        addRowToTable(arr1);
    }
    else {
        addRowToTable(arr1);
    }
});