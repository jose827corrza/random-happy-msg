const happyMessages = [
    "Sonrie",
    "Hoy pagan",
    "Descubre hobbies",
    "Medita",
    "Aprende algo cada dia",
];

const randomMsg = () =>{
    const message = happyMessages[Math.floor(Math.random() * happyMessages.length)];
    console.log(message);
}

module.exports = { randomMsg };