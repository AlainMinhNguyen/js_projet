export class Media {
    constructor(image, title, date, description, rating) {
        this.image = image;
        this.title = title;
        this.date = date;
        this.description = description;
        this.rating = rating;
    }

    getType() {
        return this.type;
    }
}