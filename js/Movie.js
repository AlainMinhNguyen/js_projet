import { Media } from "./Media.js";

export class Movie extends Media {
    constructor(title, releaseDate, rating, img, director, actors, duration, plot) {
        super(title, releaseDate, rating, img);
        this.director = director;
        this.actors = actors;
        this.duration = duration;
        this.plot = plot;
        this.type = 'movie';
    }
}