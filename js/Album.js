import { Media } from "./Media.js";

export class Album extends Media {
    constructor(image, title, date, description, rating) {
        super(image, title, date, description, rating);
        this.type = 'album';
    }
}