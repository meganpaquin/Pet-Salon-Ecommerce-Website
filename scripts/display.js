let i;
let j;

function displayCardPets(){
    //travel the array
    let card="";
    for(i=0; i<petsalon.pets.length; i++){
        let displayname = petsalon.pets[i].name;
        let displaybreed = petsalon.pets[i].breed;
        let displayage = petsalon.pets[i].age;
        let displayservice = petsalon.pets[i].service;
    

    //create the card
    card +=`
        <div class="col">
            <div class="card" style="width: 18rem;">
            <img src="pictures/dog_registration.jpg" class="card-img-top" alt="dog holding bone in mouth">
            <ul class="list-group list-group-flush">
                
                <ul class="list-group list-group-horizontal">
                    <li class="bold-name list-group-item">Pet Name</li>
                    <li class="list-group-item">${displayname}</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="bold-name list-group-item">Pet Breed</li>
                    <li class="list-group-item">${displaybreed}</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="bold-name list-group-item">Pet Age</li>
                    <li class="list-group-item">${displayage}</li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="bold-name list-group-item">Pet Service</li>
                    <li class="list-group-item">${displayservice}</li>
                </ul>
            </ul>
            </div>
        </div>`
    }

    //inject the card into the HTML
    let insertpoint = document.getElementById("registration-list");
    insertpoint.innerHTML=card;
}



function displaytablePets(){
    //travel the array
    let petTable="";
    console.log("test");
    for(j=0; j<petsalon.pets.length; j++){
        let displayname = petsalon.pets[j].name;
        let displaybreed = petsalon.pets[j].breed;
        let displayage = petsalon.pets[j].age;
        let ownername = petsalon.pets[j].owner;
        let displayservice = petsalon.pets[j].service;
        let number = j+1;

        //create the table
        petTable+= `
        <tr>
            <td></td>
            <td>${number}</td>
            <td>${displayname}</td>
            <td>${displaybreed}</td>
            <td>${displayage}</td>
            <td>${ownername}</td>
            <td>${displayservice}</td>
        </tr>
        `
        }

    //inject into HTML
    let insertpoint = document.getElementById("pet-list-table");
    let table_header = `
    <th>
        <td>#</td>
        <td>Pet Name</td>
        <td>Pet Breed</td>
        <td>Pet Age</td>
        <td>Owner Name</td>
        <td>Service</td>
      </th>`
    insertpoint.innerHTML=table_header+petTable;
}