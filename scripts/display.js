let i;
let j;

function displaytablePets(){
    //travel the array
    let petTable="";
    for(j=0; j<petsalon.pets.length; j++){
        let displayname = petsalon.pets[j].name;
        let displaybreed = petsalon.pets[j].breed;
        let displayage = petsalon.pets[j].age;
        let ownername = petsalon.pets[j].owner;
        let displayservice = petsalon.pets[j].service;
        let number = j+1;
        let time = petsalon.pets[j].time;

        //create the table
        petTable+= `
        <tr id="${petsalon.pets[j].id}">
            <td></td>
            <td>${displayname}</td>
            <td>${displaybreed}</td>
            <td class="owner-table">${ownername}</td>
            <td>${displayservice}</td>
            <td class="time-table">${time}</td>
            <td><button class="btn btn-danger" onclick="deletePetList(${petsalon.pets[j].id})">Delete</button></td>
        </tr>
        `
        }

    //inject into HTML
    let insertpoint = document.getElementById("pet-list-table");
    let table_header = `
    <th>
        <td>Pet Name</td>
        <td>Pet Breed</td>
        <td class="owner-table">Owner Name</td>
        <td>Service</td>
        <td class="time-table">Scheduled</td>
        <td></td>
      </th>`
    insertpoint.innerHTML=table_header+petTable;
}


function copydata(){
    createobjects();
    let card = "";
    for(let i=0; i<petsalon.pets.length; i++){
        let displayname = petsalon.pets[i].name;
        let displaybreed = petsalon.pets[i].breed;
        let displayage = petsalon.pets[i].age;
        let displayservice = petsalon.pets[i].service;

        card +=`
        <div class="col">
            <div id="${i}"class="card invisible-card" style="width: 18rem;">
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
        let insertpoint = document.getElementById("pet-cards");
        insertpoint.innerHTML=card;
}

