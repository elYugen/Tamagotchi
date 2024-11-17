class GenderSprite {
    constructor() {
        this.boySprite = "sprites/boy2.png";
        this.girlSprite = "sprites/girl4.png";
    }

    getSprite(gender) {
        if (gender === 'male') {
            return this.boySprite;
        } else if (gender === 'female') {
            return this.girlSprite;
        } else {
            return null;
        }
    }
}

export default GenderSprite;