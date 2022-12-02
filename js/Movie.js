import { Media } from "./Media.js";

export class Movie extends Media {
    constructor(image, title, date, description, rating) {
        super(image, title, date, description, rating);
        this.type = 'movie';
    }
}