import { Album } from './Album.js';
import { Collection } from './Collection.js';
import { Game } from './Game.js';
import { Movie } from './Movie.js';



let myCollection = new Collection();

let myAlbum1image = 'https://lh3.googleusercontent.com/tLUmjnIvbPMklG1KkKE5QDuZ3DlEmhZLMGDsz5cliFgu61rYKZ93MZ_yoxEAqHTUP1DW-ICZZ2IVAac7=w544-h544-l90-rj'
let myAlbum1title = '86 EIGHTY-SIX original soundtrack'
let myAlbum1description = 'Album • Hiroyuki Sawano et KOHTA YAMAMOTO • 2021 \n 42 titres • 2 heures et 33 minutes'
let myAlbum1rating = 5

let myAlbum1 = new Album(myAlbum1image, myAlbum1title, myAlbum1description, myAlbum1rating);

let myGame1image = 'https://jolstatic.fr/www/captures/1876/6/156236-320.jpg'
let myGame1title = 'Black desert online'
let myGame1description = 'Black Desert Online is a sandbox-oriented fantasy massively multiplayer online role-playing game developed by Korean video game developer Pearl Abyss and originally published for Microsoft Windows in 2015.'
let myGame1rating = 4

let myGame1 = new Game(myGame1image, myGame1title, myGame1description, myGame1rating);

let myMovie1image = 'https://www.nautiljon.com/images/anime/00/20/mini/fate_stay_night_heaven_s_feel_i_presage_flower_4702.jpg?11528565156'
let myMovie1title = 'Fate/stay night: Heaven\'s Feel I. presage flower'
let myMovie1description = 'Fate/stay night: Heaven\'s Feel is a Japanese anime film trilogy produced by Ufotable, directed by Tomonori Sudō, written by Akira Hiyama, and featuring music by Yuki Kajiura. The trilogy adapts Heaven\'s Feel, the third and final route of the Fate/stay night visual novel.'
let myMovie1rating = 3

let myMovie1 = new Movie(myMovie1image, myMovie1title, myMovie1description, myMovie1rating);

myCollection.add(myAlbum1);
myCollection.add(myGame1);
myCollection.add(myMovie1);

myCollection.items.forEach(element => {
    console.log(element);
});
