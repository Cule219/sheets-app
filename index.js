const tableHeadData = ["person", "Name", "e-mail", "Role", "Professional History", "Passions", "Favorite Books", "Spoken Languages"];
const tableRowsData = 
[
    [
        "Pe00001",
        "Patrick",
        "patrick.sbrzesny@saw-office.net, patrick.weiss@officeone.team",
        "CodeCaptain",
        "Dipl. Ing. Automatisierungstechnik, 3 Jahre Daimler IT, 10 Jahre IT Freelancer, 7 Jahre Vorstand der Schwarz auf Weiss AG",
        "Skifahren, Snowboarden, Sportwagen, Forró",
        "Per Anhalter durch die Galaxis, Wendekreis der Nacht, world wide web",
        "German, English, French, infelizmente eu não falo nada",
    ],
    [
        "Pe00002",
        "Marco",
        "marco.santonastasi@gmail.com",
        "CodeXO",
        "Dipl. Ing. Machinenbau., 3 Yrs. Continenal AG R&D, 4 Yrs. Academic Researcher, 10 Yrs. Professional Engineer",
        "Building stuff, just about anything",
        "Zur Psychopathologie des Alltagslebens, Freakonomics",
        "Italian, English, (German)",
    ],
    [
        "Pe00003",
        "Mariana",
        "marianamv112@gmail.com",
        "CodeOfficer",
        "Master's in Telecommunications and Informatics Eng., 7months web dev internship, 5 months data internship, Web Dev Bootcamp",
        "Music (I sing and am learning to play the ukelele), cinema, cultural activities",
        "The Picture of Dorian Gray",
        "Portuguese, English"
    ],
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
];

function fillTableHead() {
    //Fill thead with data from strings
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

fillTableHead();