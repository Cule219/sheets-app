function fillTable(divsData: Array<any>) {
    //getting the container div
    let container: Element = document.getElementById('container');
    //reseting any elements that are in the container
    container.innerHTML = '';

    //loading container div with data
    divsData.slice(1).forEach(function(divData) {
        let divText: string = ``;
        for(let i = 0; i < divData.length; i++) {
            divText += `<p>${divsData[0][i]}: ${divData[i]}</p></br>`;
        }
        container.innerHTML += `<div>${divText}</div>`;
    });
}

fillTable(tableRowsData[0]);
