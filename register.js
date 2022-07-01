let petsalon = {
    address: "2418 Franklin BLVD, San Francisco, CA 90210",
    phoneNumber: "267-335-1256",
    hours: [
        'Open: 9:00am',
        'Close: 5:00pm'
    ],
    pets: [
        {
            petName: "Bowser",
            age: "1",
            gender: "male",
            service: "Nail Trim",
            owner: "Abby",
            ownerPhone: "267-335-1222"
        },
        {
            petName: "Moose",
            age: "2",
            gender: "male",
            service: "Deshedding",
            owner: "Megan",
            ownerPhone: "267-335-2335"
        },
        {
            petName: "Harley",
            age: "8",
            gender: "female",
            service: "Vaccine",
            owner: "Trish",
            ownerPhone: "267-335-2261"
        },
        {
            petName: "Remington",
            age: "5",
            gender: "male",
            service: "Grooming",
            owner: "Trish",
            ownerPhone: "267-335-2261"
        },
        {
            petName: "Daisy",
            age: "6",
            gender: "Female",
            service: "Nail Trim",
            owner: "Ashley",
            ownerPhone: "267-335-7761"
        }
    ]
    
}

//set up the count and display functions
let numberofpets=0;
for(i=0; i<petsalon.pets.length; i++){
    console.log(petsalon.pets[i].petName);
    numberofpets++
}
//alert(numberofpets);



//trying to make a function for an object
function newpets(name, breed, age, owner, ownerPhone, service){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.owner = owner;
    this.ownerPhone = ownerPhone;
    this.service = service;
}

const firstpet = new newpets('Lucky', 'Mutt', '20', 'Susan', '267-335-5783', 'Grooming');