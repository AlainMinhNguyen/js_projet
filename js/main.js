import { Album } from './Album.js';
import { Collection } from './Collection.js';
import { Game } from './Game.js';
import { Movie } from './Movie.js';

document.addEventListener('DOMContentLoaded', function () {
    let type = document.getElementById('choixType');
    console.log(type.value);
});

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
        <div class="card card-`+ element.getType() + `">
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
                    edit_square
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

let type = document.getElementById('choixType');
    type.addEventListener('change', function () {

    let categoryChoice = type.options[type.selectedIndex].text;
    console.log(categoryChoice);

    let contentType = '';
    switch (categoryChoice) {
        case "Album":
            contentType = "<div class='form-group'><label for='artist'>Artist</label><input type='text' class='form-control' id='artist' placeholder='Artist'></div>";
            break;
        case "Game":
            contentType = "<div class='form-group'><label for='platform'>Platform</label><input type='text' class='form-control' id='platform' placeholder='Platform'></div>";
            break;
        case "Movie":
            contentType = "<div class='form-group'><label for='director'>Director</label><input type='text' class='form-control' id='director' placeholder='Director'></div>";
            break;
        default:
            contentType = "";
            break;
    }

    document.getElementById('form').innerHTML = contentType;
    });

let myCollection = new Collection();

let myAlbum1image = 'https://lh3.googleusercontent.com/tLUmjnIvbPMklG1KkKE5QDuZ3DlEmhZLMGDsz5cliFgu61rYKZ93MZ_yoxEAqHTUP1DW-ICZZ2IVAac7=w544-h544-l90-rj'
let myAlbum1title = '86 EIGHTY-SIX original soundtrack'
let myAlbum1date = new Date('2021-03-10');
let myAlbum1description = 'Album • Hiroyuki Sawano et KOHTA YAMAMOTO • 2021 \n 42 titres • 2 heures et 33 minutes'
let myAlbum1rating = 5

let myAlbum1 = new Album(myAlbum1image, myAlbum1title, myAlbum1date, myAlbum1description, myAlbum1rating);

let myAlbum2image = 'https://i.ytimg.com/vi/72PhV7wQr5Y/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBiZF0kxjQPLqLYBnG-DzsdK3_Y5g'
let myAlbum2title = 'OST | 原神/Genshin Impact/げんしん/원신'
let myAlbum2date = new Date('2021-03-10');
let myAlbum2description = '429 vidéos'
let myAlbum2rating = 5

let myAlbum2 = new Album(myAlbum2image, myAlbum2title, myAlbum2date, myAlbum2description, myAlbum2rating);

let myGame1image = 'https://jolstatic.fr/www/captures/1876/6/156236-320.jpg'
let myGame1title = 'Black desert online'
let myGame1date = new Date('2021-03-10');
let myGame1description = 'Black Desert Online is a sandbox-oriented fantasy massively multiplayer online role-playing game developed by Korean video game developer Pearl Abyss and originally published for Microsoft Windows in 2015.'
let myGame1rating = 4

let myGame1 = new Game(myGame1image, myGame1title, myGame1date, myGame1description, myGame1rating);

let myGame2image = 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820'
let myGame2title = 'Genshin Impact'
let myGame2date = new Date('2021-03-10');
let myGame2description = 'Black Desert Online is a sandbox-oriented fantasy massively multiplayer online role-playing game developed by Korean video game developer Pearl Abyss and originally published for Microsoft Windows in 2015.'
let myGame2rating = 4

let myGame2 = new Game(myGame2image, myGame2title, myGame2date, myGame2description, myGame2rating);

let myMovie1image = 'https://www.nautiljon.com/images/anime/00/20/mini/fate_stay_night_heaven_s_feel_i_presage_flower_4702.jpg?11528565156'
let myMovie1title = 'Fate/stay night: Heaven\'s Feel I. presage flower'
let myMovie1date = new Date('2021-03-10');
let myMovie1description = 'Genshin Impact is an action role-playing game developed and published by miHoYo. It was released for Microsoft Windows, PlayStation 4, iOS, and Android in 2020, on PlayStation 5 in 2021, and is set for release on Nintendo Switch.'
let myMovie1rating = 4

let myMovie1 = new Movie(myMovie1image, myMovie1title, myMovie1date, myMovie1description, myMovie1rating);

let myMovie2image = 'https://www.nautiljon.com/images/anime/00/91/mini/fate_stay_night_heaven_s_feel_ii_lost_butterfly_5719.jpg?11567168184'
let myMovie2title = 'Fate/stay night: Heaven\'s Feel II. lost butterfly'
let myMovie2date = new Date('2021-03-10');
let myMovie2description = 'Fate/stay night: Heaven\'s Feel II. lost butterfly is a 2019 Japanese anime fantasy film produced by ufotable and directed by Tomonori Sudō. The second installment in the Fate/stay night: Heaven\'s Feel trilogy, it premiered in Japan on January 12, 2019 and in the United States on March 14, 2019.'
let myMovie2rating = 3

let myMovie2 = new Movie(myMovie2image, myMovie2title, myMovie2date, myMovie2description, myMovie2rating);

myCollection.add(myAlbum1);
myCollection.add(myGame1);
myCollection.add(myMovie1);
myCollection.add(myAlbum2);
myCollection.add(myMovie2);
myCollection.add(myGame2);

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