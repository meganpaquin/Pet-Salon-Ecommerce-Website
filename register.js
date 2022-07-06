let petsalon = {
    address: "2418 Franklin BLVD, San Francisco, CA 90210",
    phoneNumber: "267-335-1256",
    hours: [
        '9:00am',
        '5:00pm'
    ],
    pets: []
}

let hours = document.getElementById("index-header");
    hours.innerHTML = `<h2>We are open from ${petsalon.hours[0]} - ${petsalon.hours[1]}</h2>`;
    

/* function address_input(){
    let address = document.getElementById("index-header");

    address.innerHTML = `
    <p>${petsalon.address}</p>
    <p>${petsalon.phoneNumber}</p>
    <p>${petsalon.hours[0]} until ${petsalon.hours[1]}
    `
} */

//set up the count and display functions
function numberofpets(){
    let petNumber=0;
for(i=0; i<petsalon.pets.length; i++){
    petNumber++
}
    let insertpetnumber = document.getElementById("countingpets");
    insertpetnumber.innerHTML = petNumber;
}

//make a function for an object
function Newpets(name, breed, age, owner, ownerPhone, service){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.owner = owner;
    this.ownerPhone = ownerPhone;
    this.service = service;
}

function register(){
    let petName = document.getElementById('petName').value;
    let petBreed = document.getElementById("petBreed").value;
    let petAge = document.getElementById("petAge").value;
    let ownerName = document.getElementById("ownerName").value;
    let ownerNumber = document.getElementById("ownerNumber").value;
    let service = document.getElementById("inputGroupSelect04").value;

    let addpet = new Newpets(petName, petBreed, petAge, ownerName, ownerNumber, service);
    petsalon.pets.push(addpet);

    numberofpets();
    clearInputs();
    console.log(petsalon.pets)
}

function clearInputs(){
    document.getElementById('petName').value="";
    document.getElementById('petBreed').value="";
    document.getElementById('petAge').value="";
    document.getElementById('ownerName').value="";
    document.getElementById('ownerNumber').value="";
    document.getElementById('inputGroupSelect04').value="Choose Service...";
}

function init(){
    //create the objects
    let scooby = new Newpets('Scooby', 'Dane', 3, 'Shaggy', '777-267-7777', 'Nailtrim');
    let bingo = new Newpets('Bingo', 'Dalmation', 5, 'Rachel', '777-121-6677', 'Grooming');
    let fido = new Newpets('fido', 'Shepherd', 8, 'Emily', "777-222-1287", "Vaccines");

    petsalon.pets.push(scooby, bingo, fido);
    //calling the function
    numberofpets();
    console.log(petsalon.pets)
    //hook events
}

function searchbar(){
    dogname = document.getElementById("search-name").value;
    console.log(dogname);
}


//makes it so the html loads fully before calling the functions
window.onload=init;
