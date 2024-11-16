import Tamagotchi from './classes/tamagotchi';

const app = document.getElementById('app');

// Initialisation du Tamagotchi
let tamagotchi = new Tamagotchi('Tama', 'male'); // Peut être remplacé par une interface de choix

function renderUI() {
  app.innerHTML = `
    <h1>${tamagotchi.name} (${tamagotchi.gender})</h1>
    <p>Âge : ${tamagotchi.age}</p>
    <p>Faim : ${tamagotchi.hunger}</p>
    <p>Santé : ${tamagotchi.health}</p>
    <p>Bonheur : ${tamagotchi.happiness}</p>
    <button id="feed">Nourrir</button>
    <button id="play">Jouer</button>
    <button id="heal">Soigner</button>
  `;

  document.getElementById('feed').addEventListener('click', () => {
    tamagotchi.feed();
    renderUI();
  });

  document.getElementById('play').addEventListener('click', () => {
    tamagotchi.play();
    renderUI();
  });

  document.getElementById('heal').addEventListener('click', () => {
    tamagotchi.heal();
    renderUI();
  });
}

renderUI();

// Simulation de vieillissement
setInterval(() => {
  tamagotchi.ageUp();
  renderUI();
}, 60000); // Vieillit toutes les 60 secondes
