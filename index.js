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

const personHead = 
    `<tr>
        <th>${tableHeadData[0]}</th>
        <th>${tableHeadData[1]}</th>
        <th>${tableHeadData[2]}</th>
        <th>${tableHeadData[3]}</th>
        <th>${tableHeadData[4]}</th>
        <th>${tableHeadData[5]}</th>
        <th>${tableHeadData[6]}</th>
        <th>${tableHeadData[7]}</th>
    </tr>`
const tableRow1 = 
    `<tr>
        <td>${tableRow1Data[0]}</td>
        <td>${tableRow1Data[1]}</td>
        <td>${tableRow1Data[2]}</td>
        <td>${tableRow1Data[3]}</td>
        <td>${tableRow1Data[4]}</td>
        <td>${tableRow1Data[5]}</td>
        <td>${tableRow1Data[6]}</td>
        <td>${tableRow1Data[7]}</td>
    </tr>`

const tableRow2 = 
    `<tr>
        <td>${tableRow2Data[0]}</td>
        <td>${tableRow2Data[1]}</td>
        <td>${tableRow2Data[2]}</td>
        <td>${tableRow2Data[3]}</td>
        <td>${tableRow2Data[4]}</td>
        <td>${tableRow2Data[5]}</td>
        <td>${tableRow2Data[6]}</td>
        <td>${tableRow2Data[7]}</td>
    </tr>`



function fillTableHead() {
    //Fill rows with data from strings
    //getElementsByTagName and getElementsByClassName returns array hence we have to select first element of the array
    
    document.getElementsByTagName('thead')[0].innerHTML += personHead;
    document.getElementsByClassName('tbody-class')[0].innerHTML += tableRow1;
    document.getElementById('tbody-id').innerHTML += tableRow2;
}

fillTableHead();