function fillTable(tableRowsData: Array<any>) {
    //Fill thead with data from strings

    let tableRow: string = '';
    tableRowsData[0].forEach(function(element) {
        tableRow += `<th>${element}</th>`;
    });
    let thead: Element = document.getElementById('thead-person');
    thead.innerHTML = `<tr>${tableRow}</tr>`

    //get tbody element
    let tbody: Element = document.getElementById('tbody-person');
    //reset the html within it
    tbody.innerHTML = '';
    //load data into tbody
    tableRowsData.slice(1).forEach(function(tableRowData) {
        let tableRow: string = '';
        tableRowData.forEach(function(element) {
            tableRow += `<td>${element}</td>`
        })
        tbody.innerHTML += `<tr>${tableRow}</tr>`;
    });
}

fillTable(tableRowsData[0]);
