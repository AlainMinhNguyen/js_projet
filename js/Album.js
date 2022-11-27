import { Media } from "./Media";

export class Album extends Media {
    constructor(image, title, description, rating, runtime) {
        super(image, title, description, rating);
    }
}