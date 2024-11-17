import Tamagotchi from './classes/tamagotchi';

const app = document.getElementById('app');

// Variable lié aux infos du Tamagotchi
let name = document.getElementById('name');
let gender = document.getElementById('gender');
let age = document.getElementById('age');
let sprite = document.getElementById('sprite');

// Variable lié aux status
let health = document.getElementById('health');
let hunger = document.getElementById('hunger');
let happiness = document.getElementById('happiness');

// Variable lié aux boutons d'intéractions
let feedButton = document.getElementById('feed');
let playButton = document.getElementById('play');
let healButton = document.getElementById('heal');
let changeNameGenderButton = document.getElementById('changeNameGender');

let tamagotchi = new Tamagotchi('Tama', 'male');

function renderUI() {
  name.textContent = tamagotchi.name;
  gender.textContent = `(${tamagotchi.gender})`;
  age.textContent = `${tamagotchi.age} jours`;
  sprite.src = tamagotchi.sprite;
  health.textContent = `${tamagotchi.health}%`;
  hunger.textContent = `${tamagotchi.hunger}%`;
  happiness.textContent = `${tamagotchi.happiness}%`;

  feedButton.addEventListener('click', () => {
    tamagotchi.feed();
    renderUI();
  });

  playButton.addEventListener('click', () => {
    tamagotchi.play();
    renderUI();
  });

  healButton.addEventListener('click', () => {
    tamagotchi.heal();
    renderUI();
  });
}

  // Bouton de changement de sexe et nom
  changeNameGenderButton.addEventListener('click', () => {
    const newName = prompt("Entrez le nouveau nom :");
    const newGender = prompt("Entrez le nouveau genre (male/female) :");
    
    if (newName && (newGender === 'male' || newGender === 'female')) {
      tamagotchi.name = newName;
      tamagotchi.gender = newGender;
      tamagotchi.sprite = tamagotchi.genderSprite.getSprite(newGender);
      tamagotchi.save();
      renderUI();
    } else {
      alert("Nom ou genre invalide. Veuillez réessayer.");
    }
  });
  
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
