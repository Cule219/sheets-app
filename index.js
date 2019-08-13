function fillTable(tableRowsData) {
    //Fill thead with data from strings
    var tableRow = '';
    tableRowsData[0].forEach(function (element) {
        tableRow += "<th>" + element + "</th>";
    });
    var thead = document.getElementById('thead-person');
    thead.innerHTML = "<tr>" + tableRow + "</tr>";
    //get tbody element
    var tbody = document.getElementById('tbody-person');
    //reset the html within it
    tbody.innerHTML = '';
    //load data into tbody
    tableRowsData.slice(1).forEach(function (tableRowData) {
        var tableRow = '';
        tableRowData.forEach(function (element) {
            tableRow += "<td>" + element + "</td>";
        });
        tbody.innerHTML += "<tr>" + tableRow + "</tr>";
    });
}
fillTable(tableRowsData[0]);
