window.onload = function (num) {
    num = 1;
    let newTable = document.createElement(`table`);
    for (let i = 0; i <= 9; i++) {
        let newRow = newTable.insertRow(i);
        for (let j = 0; j <= 9; j++) {
            let newCell = newRow.insertCell(j);
            newCell.innerHTML = num++;
        }
        document.body.appendChild(newTable);
    }
}