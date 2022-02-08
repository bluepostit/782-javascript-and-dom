console.log("Hello from src/index.js!");


const coloursList = document.querySelector('#colours');
console.log(coloursList);

coloursList.insertAdjacentHTML('beforeend', '<li>White</li>');


// Find players list
const players = document.querySelector('#players');
const redPlayer = players.querySelector('.red');
console.log(`The red player's name is ${redPlayer.innerText}`);


// Get every FIFA winner
const winners = document.querySelectorAll('#fifa-wins li');
// make it bold and blue
winners.forEach((winner) => {
  winner.classList.add('winner');
});


// Add a new winner to the list
// grab the list
const winnersList = document.querySelector('#fifa-wins');
// insert some HTML! for a new list item
winnersList.insertAdjacentHTML('beforeend', '<li class="winner">France (2 wins)</li>');


// Grab the VALUE of the email input!
const emailInput = document.querySelector('#email');
const email = emailInput.value;
console.log(`The email address is: ${email}`);

// Let's change it!
emailInput.value = 'my-super-cool-email@host.com';

// Get text of an element:
const lwLink = document.getElementById('home');
console.log(lwLink);

console.log(lwLink.innerText);
console.log(lwLink.innerHTML);
console.log(lwLink.attributes.href.value);


// Get info from the data of an element!
const boris = document.querySelector('#user');
console.log(boris.dataset);
const uid = boris.dataset.uid;
console.log(`UID: ${uid}`);

const githubNickname = boris.dataset.githubNickname;
console.log(`GH nickname: ${githubNickname}`);


// EVENTS

// 1. grab the element you want to listen on
const romain = document.querySelector('#romain');

// 2. add the event listener
// romain.addEventListener('click', (event) => {
//   romain.classList.toggle('round');
// });

const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    console.log(event);
    // debugger;
    const clickedImage = event.currentTarget;
    clickedImage.classList.toggle('round');
  });
});
