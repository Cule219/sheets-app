function fillTable(divsData) {
    var container = document.getElementById('container');
    container.innerHTML = '';
    divsData.slice(1).forEach(function (divData) {
        var divText = "";
        for (var i = 0; i < divData.length; i++) {
            divText += "<p>" + divsData[0][i] + ": " + divData[i] + "</p></br>";
        }
        container.innerHTML += "<div>" + divText + "</div>";
    });
}
fillTable(tableRowsData[0]);
