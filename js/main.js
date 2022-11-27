import { Album } from './Album.js';
import { Collection } from './Collection.js';
import { Game } from './Game.js';
import { Movie } from './Movie.js';

function displayCollection(collection) {
    let html = '';
    let ratinghtml = '';
    let i = 0;

    let day;
    let month;
    let year;
    let icon;
    collection.items.forEach(element => {
        i = 0;
        ratinghtml = '';
        for (i; i < element.rating; i++) {
            ratinghtml += '<span class="fa fa-star checked"></span>';
        }
        for (i; i < 5; i++) {
            ratinghtml += '<span class="fa fa-star"></span>';
        }
        day = ("0" + element.date.getDate()).slice(-2);
        month = ("0" + parseInt(parseInt(element.date.getMonth()) + 1)).slice(-2)
        year = ("0" + element.date.getFullYear()).slice(-4);

        switch (element.getType()) {
            case "album":
                icon = "music_note";
                break;
            case "game":
                icon = "sports_esports";
                break;
            case "movie":
                icon = "movie";
                break;
            default:
                icon = "error";
                break;
        }

        html += `
        <div class="card card-`+element.getType()+`">
        <img class="card-img-top"
            src="`+ element.image + `"
            alt="Card image cap">
        <div class="card-body">

            <h5 class="card-title"><span class="material-symbols-outlined">`+ icon + `</span> ` + element.title + `</h5>
            <span class="card-date">Released the `+ month + `/` + day + `/` + year + `</span>
            <p class="card-text">`+ element.description + `</p>

            <p class="card-rating">
                Rating :
                `+ ratinghtml + `
            </p>
            <div class="card-buttons">
                <a href="#" class="btn btn-secondary"><span class="material-symbols-outlined">
                        edit
                    </span> edit</a>
                <a href="#" class="btn btn-primary"><span class="material-symbols-outlined">
                        delete
                    </span> remove</a>
            </div>
        </div>
    </div>
        `;
    });
    document.getElementById('media-container').innerHTML += html;
}

let myCollection = new Collection();

let myAlbum1image = 'https://lh3.googleusercontent.com/tLUmjnIvbPMklG1KkKE5QDuZ3DlEmhZLMGDsz5cliFgu61rYKZ93MZ_yoxEAqHTUP1DW-ICZZ2IVAac7=w544-h544-l90-rj'
let myAlbum1title = '86 EIGHTY-SIX original soundtrack'
let myAlbum1date = new Date('2021-03-10');
let myAlbum1description = 'Album • Hiroyuki Sawano et KOHTA YAMAMOTO • 2021 \n 42 titres • 2 heures et 33 minutes'
let myAlbum1rating = 5

let myAlbum1 = new Album(myAlbum1image, myAlbum1title, myAlbum1date, myAlbum1description, myAlbum1rating);

let myAlbum2image = 'https://lh3.googleusercontent.com/tLUmjnIvbPMklG1KkKE5QDuZ3DlEmhZLMGDsz5cliFgu61rYKZ93MZ_yoxEAqHTUP1DW-ICZZ2IVAac7=w544-h544-l90-rj'
let myAlbum2title = '86 EIGHTY-SIX original soundtrack'
let myAlbum2date = new Date('2021-03-10');
let myAlbum2description = 'Album • Hiroyuki Sawano et KOHTA YAMAMOTO • 2021 \n 42 titres • 2 heures et 33 minutes'
let myAlbum2rating = 5

let myAlbum2 = new Album(myAlbum2image, myAlbum2title, myAlbum2date, myAlbum2description, myAlbum2rating);

let myGame1image = 'https://jolstatic.fr/www/captures/1876/6/156236-320.jpg'
let myGame1title = 'Black desert online'
let myGame1date = new Date('2021-03-10');
let myGame1description = 'Black Desert Online is a sandbox-oriented fantasy massively multiplayer online role-playing game developed by Korean video game developer Pearl Abyss and originally published for Microsoft Windows in 2015.'
let myGame1rating = 4

let myGame1 = new Game(myGame1image, myGame1title, myGame1date, myGame1description, myGame1rating);

let myMovie1image = 'https://www.nautiljon.com/images/anime/00/20/mini/fate_stay_night_heaven_s_feel_i_presage_flower_4702.jpg?11528565156'
let myMovie1title = 'Fate/stay night: Heaven\'s Feel I. presage flower'
let myMovie1date = new Date('2021-03-10');
let myMovie1description = 'Fate/stay night: Heaven\'s Feel is a Japanese anime film trilogy produced by Ufotable, directed by Tomonori Sudō, written by Akira Hiyama, and featuring music by Yuki Kajiura. The trilogy adapts Heaven\'s Feel, the third and final route of the Fate/stay night visual novel.'
let myMovie1rating = 3

let myMovie1 = new Movie(myMovie1image, myMovie1title, myMovie1date, myMovie1description, myMovie1rating);

myCollection.add(myAlbum1);
myCollection.add(myGame1);
myCollection.add(myMovie1);
myCollection.add(myAlbum2);

myCollection.items.forEach(element => {
    console.log(element);
});

displayCollection(myCollection);

document.getElementById('navAll').addEventListener('click', function () {
    console.log('All');
    document.getElementById('navAlbums').classList.remove('selected');
    document.getElementById('navGames').classList.remove('selected');
    document.getElementById('navMovies').classList.remove('selected');
    document.getElementById('navAll').classList.add('selected');
    Array.from(document.getElementsByClassName('card-album')).forEach(container => container.style.display = 'block');
    Array.from(document.getElementsByClassName('card-game')).forEach(container => container.style.display = 'block');
    Array.from(document.getElementsByClassName('card-movie')).forEach(container => container.style.display = 'block');
});

document.getElementById('navAlbums').addEventListener('click', function () {
    console.log('Albums');
    document.getElementById('navAll').classList.remove('selected');
    document.getElementById('navGames').classList.remove('selected');
    document.getElementById('navMovies').classList.remove('selected');
    document.getElementById('navAlbums').classList.add('selected');
    Array.from(document.getElementsByClassName('card-album')).forEach(container => container.style.display = 'block');
    Array.from(document.getElementsByClassName('card-game')).forEach(container => container.style.display = 'none');
    Array.from(document.getElementsByClassName('card-movie')).forEach(container => container.style.display = 'none');
});

document.getElementById('navGames').addEventListener('click', function () {
    console.log('Games');
    document.getElementById('navAll').classList.remove('selected');
    document.getElementById('navAlbums').classList.remove('selected');
    document.getElementById('navMovies').classList.remove('selected');
    document.getElementById('navGames').classList.add('selected');
    Array.from(document.getElementsByClassName('card-album')).forEach(container => container.style.display = 'none');
    Array.from(document.getElementsByClassName('card-game')).forEach(container => container.style.display = 'block');
    Array.from(document.getElementsByClassName('card-movie')).forEach(container => container.style.display = 'none');
});

document.getElementById('navMovies').addEventListener('click', function () {
    console.log('Movies');
    document.getElementById('navAll').classList.remove('selected');
    document.getElementById('navAlbums').classList.remove('selected');
    document.getElementById('navGames').classList.remove('selected');
    document.getElementById('navMovies').classList.add('selected');
    Array.from(document.getElementsByClassName('card-album')).forEach(container => container.style.display = 'none');
    Array.from(document.getElementsByClassName('card-game')).forEach(container => container.style.display = 'none');
    Array.from(document.getElementsByClassName('card-movie')).forEach(container => container.style.display = 'block');
});