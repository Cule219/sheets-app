const personHead = 
    `<tr>
        <th>person</th>
        <th>Name</th>
        <th>e-mail</th>
        <th>Role</th>
        <th>Professional History</th>
        <th>Passions</th>
        <th>Favorite Books</th>
        <th>Spoken Languages</th>
    </tr>`
const tableRow1 = 
    `<tr>
        <td>Pe00003</td>
        <td>Mariana</td>
        <td>marianamv112@gmail.com</td>
        <td>CodeOfficer</td>
        <td>Master's in Telecommunications and Informatics Eng., 7months web dev internship, 5 months data internship, Web Dev Bootcamp</td>
        <td>Music (I sing and am learning to play the ukelele), cinema, cultural activities</td>
        <td>The Picture of Dorian Gray</td>
        <td>Portuguese, English</td>
    </tr>`

const tableRow2 = 
    `<tr>
        <td>Pe00004</td>
        <td>Stefan</td>
        <td>culaficstefan@gmail.com</td>
        <td>CodeOfficer</td>
        <td>BSc of Informational Systems and Technologies., 3 years IT Admin, 2 years IT Support Eng, Web Dev Bootcamp</td>
        <td>Outdoorsy activities(Hiking, Biking, etc), Reading, Tech</td>
        <td>The Alchemist, Paulo Coelho</td>
        <td>Croatian, English</td>
    </tr>`

function fillTableHead() {
    //Fill rows with data from strings
    //getElementsByTagName and getElementsByClassName returns array hence we have to select first element of the array
    document.getElementsByTagName('thead')[0].innerHTML += personHead;
    document.getElementsByClassName('tbody-class')[0].innerHTML += tableRow1;
    document.getElementById('tbody-id').innerHTML += tableRow2;
}

fillTableHead();