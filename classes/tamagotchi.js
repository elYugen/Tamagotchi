import { saveToLocalStorage, loadFromLocalStorage } from '../utils/storage';
import GenderSprite from './genderSprite';

class Tamagotchi {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.age = 0;
        this.hunger = 50;
        this.health = 100;
        this.happiness = 50;
        this.genderSprite = new GenderSprite();

        this.lastUpdated = Date.now(); // Timestamp de la dernière mise à jour

        this.load();
        this.updateStateOnReturn();
        this.sprite = this.genderSprite.getSprite(this.gender);
    }

    save() {
        saveToLocalStorage('tamagotchi', {
            name: this.name,
            gender: this.gender,
            age: this.age,
            hunger: this.hunger,
            health: this.health,
            happiness: this.happiness,
            // sprite: this.sprite,
            lastUpdated: this.lastUpdated,
        });
    }

    load() {
        const data = loadFromLocalStorage('tamagotchi');
        if (data) {
            Object.assign(this, data);
            this.genderSprite = new GenderSprite();
            this.sprite = this.genderSprite.getSprite(this.gender);
        }
    }

    updateStateOnReturn() {
        const now = Date.now();
        const elapsedMinutes = Math.floor((now - this.lastUpdated) / 60000); // Temps écoulé en minutes

        if (elapsedMinutes > 0) {
            this.age += Math.floor(elapsedMinutes / 60); // Ajoute 1 an toutes les 60 minutes
            this.hunger = Math.min(100, this.hunger + elapsedMinutes * 2); // Augmente la faim
            this.happiness = Math.max(0, this.happiness - elapsedMinutes); // Réduit le bonheur
            this.health = Math.max(0, this.health - Math.floor(elapsedMinutes / 2)); // Réduit la santé
        }

        this.lastUpdated = now;
        this.save();
    }

    // Méthodes pour gérer les états
    feed() {
        this.hunger = Math.max(0, this.hunger - 10);
        this.save();
    }

    play() {
        this.happiness = Math.min(100, this.happiness + 10);
        this.hunger = Math.min(100, this.hunger + 5);
        this.save();
    }

    heal() {
        this.health = Math.min(100, this.health + 20);
        this.save();
    }

    ageUp() {
        this.age += 1;
        this.hunger = Math.min(100, this.hunger + 10);
        this.happiness = Math.max(0, this.happiness - 5);
        this.health = Math.max(0, this.health - 10);
        this.lastUpdated = Date.now();
        this.save();
    }
}

export default Tamagotchi;
