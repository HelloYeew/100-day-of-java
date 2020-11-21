// objects

var person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    alive: true,
    description: "Good Man"
}

var person2 = {
    firstName: "Prayuth",
    lastName: "Jan-O-Cha",
    age: 66,
    alive: false,
    description: "Prayuth Hua Kuay"
}

function changePerson(person) {
    document.getElementById("showfirstname").innerHTML = "First Name : " + person.firstName
    document.getElementById("showlastname").innerHTML = "Last Name : " + person.lastName
    document.getElementById("showage").innerHTML = "Age : " + person.age
    if (person.alive == true) {
        var status = "Alive"
    }
    else {
        var status = "Death"
    }
    document.getElementById("showstatus").innerHTML = "Status : " + status
    document.getElementById("showdescription").innerHTML = "Description : " + person.description
}

function showtime() {
    while (true) {
        document.getElementsByID("time").innerHTML = Date()
    }
}
