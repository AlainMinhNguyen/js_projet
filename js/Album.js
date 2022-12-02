import { Media } from "./Media.js";

export class Album extends Media {
    constructor(title, releaseDate, rating, img, artists, nbTracks) {
        super(title, releaseDate, rating, img);
        this.artists = artists;
        this.nbTracks = nbTracks;
        this.type = 'album';
    }
}