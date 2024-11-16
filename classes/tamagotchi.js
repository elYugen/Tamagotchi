class Tamagotchi {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.age = 0;
        this.hunger = 100;
        this.happiness = 100;
        this.health = 100;
        this.sprite = null // A faire plus tard

        this.loadFromLocalStorage();
    }

    saveToLocalStorage() { // Sauvegarde les données du Tamagotchi dans le localStorage
        const data = {
          name: this.name,
          gender: this.gender,
          age: this.age,
          hunger: this.hunger,
          health: this.health,
          happiness: this.happiness,
          sprite: this.sprite,
        };
        localStorage.setItem('tamagotchi', JSON.stringify(data));
    }

    loadFromLocalStorage() { // Récupère les données du Tamagotchi depuis le localStorage
        const data = JSON.parse(localStorage.getItem('tamagotchi')); // Récupère au format JSON l'objet "tamagotchi" enregistré dans le localStorage
        if (data) { // Si data existe alors on l'assigne à this
          Object.assign(this, data);
        }  else {
            console.log("Aucune information à récupérer");           
        }
    }

    feed() {
        this.hunger = Math.max(0, this.hunger - 10);
        this.saveToLocalStorage();
    }
    
    play() {
        this.happiness = Math.min(100, this.happiness + 10);
        this.hunger = Math.min(100, this.hunger + 5);
        this.saveToLocalStorage();
    }

    heal() {
        this.health = Math.min(100, this.health + 20);
        this.saveToLocalStorage();
    }
    
    ageUp() {
        this.age += 1;
        this.hunger = Math.min(100, this.hunger + 10);
        this.happiness = Math.max(0, this.happiness - 5);
        this.health = Math.max(0, this.health - 10);
        this.saveToLocalStorage();
    }   
}

export default Tamagotchi;