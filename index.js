"use strict";
exports.__esModule = true;
var data_js_1 = require("./data.js");
//class Person with getter and setter
var Person = /** @class */ (function () {
    function Person(array) {
        var _a;
        _a = array.slice(), this.person = _a[0], this.name = _a[1], this.email = _a[2], this.role = _a[3], this.professionalHistory = _a[4], this.passions = _a[5], this.favoriteBooks = _a[6], this.spokenLanguages = _a[7];
    }
    //normaly getter would be used for each individual field ie. getter called getName would return this.name
    Person.prototype.getPersonInfo = function () {
        return [this.person, this.name, this.email, this.role, this.professionalHistory, this.passions, this.favoriteBooks, this.spokenLanguages];
    };
    Person.prototype.setPersonInfo = function (person, name, email, role, professionalHistory, passions, favoriteBooks, spokenLanguages) {
        this.person = person;
        this.name = name;
        this.email = email;
        this.role = role;
        this.professionalHistory = professionalHistory;
        this.passions = passions;
        this.favoriteBooks = favoriteBooks;
        this.spokenLanguages = spokenLanguages;
    };
    return Person;
}());
function fillTable(divsData) {
    //getting the container div
    var container = document.getElementById('container');
    //reseting any elements that are in the container
    container.innerHTML = '';
    //loading container div with data
    divsData.slice(1).forEach(function (divData) {
        var divText = "";
        for (var i = 0; i < divData.length; i++) {
            divText += "<p>" + divsData[0][i] + ": " + divData[i] + "</p></br>";
        }
        container.innerHTML += "<div>" + divText + "</div>";
    });
}
var person = new Person(data_js_1.tableRowsData[0][1]);
fillTable(person.getPersonInfo());
