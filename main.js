import Tamagotchi from './classes/Tamagotchi';

const app = document.getElementById('app');
let tamagotchi = new Tamagotchi('Tama', 'male');

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

// Met à jour automatiquement les états toutes les minutes
setInterval(() => {
  tamagotchi.ageUp();
  renderUI();
}, 60000);

// Gère la visibilité de la page
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    tamagotchi.updateStateOnReturn();
    renderUI();
  } else {
    tamagotchi.lastUpdated = Date.now();
    tamagotchi.save();
  }
});

// Sauvegarde l'état lors de la fermeture de la page
window.addEventListener('beforeunload', () => {
  tamagotchi.lastUpdated = Date.now();
  tamagotchi.save();
});

renderUI();
