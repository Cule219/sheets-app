const tableHeadData = ["person", "Name", "e-mail", "Role", "Professional History", "Passions", "Favorite Books", "Spoken Languages"]
const tableRow1Data = 
[
    "Pe00003",
    "Mariana",
    "marianamv112@gmail.com",
    "CodeOfficer",
    "Master's in Telecommunications and Informatics Eng., 7months web dev internship, 5 months data internship, Web Dev Bootcamp",
    "Music (I sing and am learning to play the ukelele), cinema, cultural activities",
    "The Picture of Dorian Gray",
    "Portuguese, English"
]

const tableRow2Data = 
[
    "Pe00004",
    "Stefan",
    "culaficstefan@gmail.com",
    "CodeOfficer",
    "BSc of Informational Systems and Technologies., 3 years IT Admin, 2 years IT Support Eng, Web Dev Bootcamp",
    "Outdoorsy activities(Hiking, Biking, etc), Reading, Tech",
    "The Alchemist, Paulo Coelho",
    "Croatian, English"
]

function fillTableHead() {
    //Fill rows with data from strings

    let tableHead = '';
    for(let index = 0; index < tableHeadData.length; index++) {
        tableHead += `<th>${tableHeadData[index]}</th>`
    }
    document.getElementsByTagName('thead')[0].innerHTML += `<tr>${tableHead}</tr>`

    let tableRow1 = '';
    let index = 0;
    while(index < tableRow1Data.length) {
        tableRow1 += `<td>${tableRow1Data[index]}</td>`
        index++;
    }
    document.getElementsByClassName('tbody-class')[0].innerHTML += `<tr>${tableRow1}</tr>`;

    let tableRow2 = '';
    tableRow2Data.forEach(function(element, index) {
        tableRow2 += `<td>${tableRow2Data[index]}</td>`
    })
    document.getElementById('tbody-id').innerHTML += `<tr>${tableRow2}</tr>`;
}

fillTableHead();