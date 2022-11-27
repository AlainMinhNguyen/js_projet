import { Media } from "./Media";

export class Movie extends Media {
    constructor(image, title, description, rating, runtime) {
        super(image, title, description, rating);
    }
}