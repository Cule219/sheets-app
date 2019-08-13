function fillTable(tableHeadData, tableRowsData) {
    //Fill thead with data from strings

    let tableRow = '';
    tableHeadData.forEach(function(element) {
        tableRow += `<th>${element}</th>`;
    });
    let thead = document.getElementById('thead-person');
    thead.innerHTML = `<tr>${tableRow}</tr>`

    //get tbody element
    let tbody = document.getElementById('tbody-person');
    //reset the html within it
    tbody.innerHTML = '';
    //load data into tbody
    tableRowsData.forEach(function(tableRowData) {
        let tableRow = '';
        tableRowData.forEach(function(element) {
            tableRow += `<td>${element}</td>`
        })
        tbody.innerHTML += `<tr>${tableRow}</tr>`;
    });
}

fillTable(tableHeadData[0], tableRowsData[0]);


// Use this code for Google Docs, Slides, Forms, or Sheets.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('MediaMarktSaturn')
      .addItem('CodeWarriors', 'openDialog')
      .addToUi();
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}


function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('index');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, '@mediamarktsaturn.com');
}

function getData(){
  return SpreadsheetApp.getActive().getSheetByName("Person").getDataRange().getValues();
}