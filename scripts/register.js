let petsalon = {
    address: "2418 Franklin BLVD, San Francisco, CA 90210",
    phoneNumber: "267-335-1256",
    hours: [
        '9:00am',
        '5:00pm'
    ],
    pets: []
}

//runs when the index body loads
function index_loadup(){
    let hours = document.getElementById("index-header");
    hours.innerHTML = `<h2>We are open from ${petsalon.hours[0]} - ${petsalon.hours[1]}</h2>`;

    let address = document.getElementById("index-footer");
    address.innerHTML = `
    <p><i class="bi bi-house-fill"></i>${petsalon.address}</p>
    <p><i class="bi bi-telephone-fill"></i>${petsalon.phoneNumber}</p>
    <p><i class="bi bi-door-open-fill"></i>${petsalon.hours[0]} until ${petsalon.hours[1]}
    `
}
    
//set up the count and display functions
function numberofpets(){
    let petNumber=0;
for(i=0; i<petsalon.pets.length; i++){
    petNumber++
}
    let insertpetnumber = document.getElementById("countingpets");
    insertpetnumber.innerHTML = petNumber;
}

//counter
let c=0;

//make a function for an object
function Newpets(name, breed, age, owner, ownerPhone, service, time){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.owner = owner;
    this.ownerPhone = ownerPhone;
    this.service = service;
    this.id=c++;
    this.time=time;
}

function register(){
    let petName = document.getElementById('petName').value;
    let petBreed = document.getElementById("petBreed").value;
    let petAge = document.getElementById("petAge").value;
    let ownerName = document.getElementById("ownerName").value;
    let ownerNumber = document.getElementById("ownerNumber").value;
    let service = document.getElementById("inputGroupSelect04").value;
    let time = document.getElementById("inputGroupSelect05").value;

        if(petName=="" || petBreed=="" || petAge=="" || ownerName=="" || ownerNumber=="" || service=="" || time==""){
            alert("Please enter a value");
        }else{
            let addpet = new Newpets(petName, petBreed, petAge, ownerName, ownerNumber, service, time);
            petsalon.pets.push(addpet);
        }

    numberofpets();
    clearInputs();
    displaytablePets();
    console.log(petsalon.pets)
}

function clearInputs(){
    document.getElementById('petName').value="";
    document.getElementById('petBreed').value="";
    document.getElementById('petAge').value="";
    document.getElementById('ownerName').value="";
    document.getElementById('ownerNumber').value="";
    document.getElementById('inputGroupSelect04').value="Choose Service...";
    document.getElementById('inputGroupSelect05').value="Choose Date...";
}

function deletePetList(id){
    console.log("Delete pet #"+ id)
    let remove_item = document.getElementById(id);
    remove_item.remove();

    for(let i=0; i<petsalon.pets.length; i++){
        let pet=petsalon.pets[i];
        //compare the id of the pet
        if(pet.id == id){
            petIndex=i; //get the pet index
        }
    }
    petsalon.pets.splice(petIndex,1); //remove from the array
    numberofpets(); //update the number of pets
}

function createobjects(){
    //create the objects
    let scooby = new Newpets('Scooby', 'Dane', 3, 'Shaggy', '777-267-7777', 'Nailtrim', '12:00am Friday');
    let bingo = new Newpets('Bingo', 'Dalmation', 5, 'Rachel', '777-121-6677', 'Grooming', '3:00pm Thursday');
    let fido = new Newpets('Fido', 'Shepherd', 8, 'Emily', "777-222-1287", "Vaccines", '8:00am Monday');
    let moose = new Newpets('Moose', 'Anatolian', 3, 'Megan', '802-888-1234', 'Bath', '9:00am Wednesday');
    let remmy = new Newpets('Remington', 'Beagle', 9, 'Trish', '802-123-7761', 'Nail Trim', '6:00am Friday');

    petsalon.pets.push(scooby, bingo, fido, moose, remmy);
}

function init(){
    //calling the functions
    createobjects();
    numberofpets();
    displaytablePets();
    console.log(petsalon.pets)
}

function searchbar(){
    dogname = document.getElementById("search-name").value;
    console.log(dogname);
    
    for(let i=0; i<petsalon.pets.length; i++){
        let pet=petsalon.pets[i];
        //search by dog name
        if(dogname.toLowerCase()==pet.name.toLowerCase()){
            document.getElementById(i).classList.add("table-danger");
            console.log(i)
        }else{
            document.getElementById(i).classList.remove("table-danger");
           //Search by owner name
            if(dogname.toLowerCase()==pet.owner.toLowerCase()){
                document.getElementById(i).classList.add("table-danger");
            }else{
                document.getElementById(i).classList.remove("table-danger");
            }  
        } 
    }
    //clear the button value
    document.getElementById("search-name").value = "";
}

function searchbarAbout(){
    dogname = document.getElementById("search-name").value;
    
    for(let i=0; i<petsalon.pets.length; i++){
        let pet=petsalon.pets[i];
        //search by dog name
        if(dogname.toLowerCase()==pet.name.toLowerCase()){
            document.getElementById(i).classList.remove("invisible-card");
            document.getElementById(i).classList.add("smaller-card");
        }else{
            document.getElementById(i).classList.remove("smaller-card");
            document.getElementById(i).classList.add("invisible-card");
           //Search by owner name
            if(dogname.toLowerCase()==pet.owner.toLowerCase()){
                document.getElementById(i).classList.remove("invisible-card");
                document.getElementById(i).classList.add("smaller-card");
            }else{
                document.getElementById(i).classList.remove("smaller-card");
                document.getElementById(i).classList.add("invisible-card");
            }  
        } 
    }
    //clear the button value
    document.getElementById("search-name").value = "";
}
