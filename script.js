const images = [
  "https://i.ytimg.com/vi/xl0NMRAnqbA/hq720_live.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCI7O0OUAO452JzUJn2GmZzquO9sw",
  "https://img.freepik.com/premium-photo/couch-front-window-filled-with-books-cozy-reading-nook-world-book-day_1111059-4214.jpg",
"https://t4.ftcdn.net/jpg/07/51/07/61/360_F_751076111_YacAonPK5pWfxohvhgSHYJqG6C5qg5vv.jpg"
]; 

let index = 0;
const menuImage = document.getElementById("menu-image");

setInterval(() => {
  index = (index + 1) % images.length;
  menuImage.src = images[index];
}, 5000); //code above makes it so the picture on the front page changes every 5 seconds

const form1 = document.getElementById('contact-form');
const successMessage1 = document.getElementById('success-message');

form1.addEventListener('submit', (event) => {
    event.preventDefault();


    // shows message if it was successful
    successMessage1.style.display = 'block';
});
