import {tableRowsData} from './data.js';
//class Person with getter and setter
class Person {
    /*private indicates that these field can only be altered and accessed from 
    inside the class Person hence why we have getPersonInfo -> getter and setPersonInfo -> setter
    methods deffined*/
    private person: string;
    private name: string;
    private email: string;
    private role: string;
    private professionalHistory: string;
    private passions: string;
    private favoriteBooks: string;
    private spokenLanguages: string;
    constructor(array: string[]){
        [this.person, this.name, this.email, this.role, this.professionalHistory, this.passions, this.favoriteBooks, this.spokenLanguages] = [...array]
    }
    //normaly getter would be used for each individual field ie. getter called getName would return this.name
    getPersonInfo(){
        return [this.person, this.name, this.email, this.role, this.professionalHistory, this.passions, this.favoriteBooks, this.spokenLanguages];
    }
    setPersonInfo(person: string, name: string, email: string, role: string, professionalHistory: string, passions: string, favoriteBooks: string, spokenLanguages: string) {
        this.person = person;
        this.name = name;
        this.email = email;
        this.role = role;
        this.professionalHistory = professionalHistory;
        this.passions = passions;
        this.favoriteBooks = favoriteBooks;
        this.spokenLanguages = spokenLanguages;
    }
}

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

const person = new Person(tableRowsData[0][1])
fillTable(person.getPersonInfo());
