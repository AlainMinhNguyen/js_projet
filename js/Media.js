export class Media {
    constructor(title, releaseDate, rating, img) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.img = img;
        this.id = Math.floor(Math.random() * 1000000);
    }

    getType() {
        return this.type;
    }

    setId(id) {
        this.id = id;
    }
}