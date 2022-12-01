import { Media } from "./Media.js";

export class Game extends Media {
    constructor(image, title, date, description, rating) {
        super(image, title, date, description, rating);
        this.type = 'game';
    }
}