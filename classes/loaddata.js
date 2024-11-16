class LoadData {
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
}

export default LoadData