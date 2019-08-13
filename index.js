function fillTable(tableHeadData, tableRowsData) {
    //Fill thead with data from nested array
    let tableRow = '';
    tableHeadData.forEach(function(element) {
        tableRow += `<th>${element}</th>`;
    });
    document.getElementById('thead-person').innerHTML += `<tr>${tableRow}</tr>`

    //Fill tbody with data from nested array
    tableRowsData.forEach(function(tableRowData) {
        let tableRow = '';
        tableRowData.forEach(function(element) {
            tableRow += `<td>${element}</td>`
        })
        document.getElementById('tbody-person').innerHTML += `<tr>${tableRow}</tr>`;
    });
}
fillTable(tableHeadData[0], tableRowsData[0]);