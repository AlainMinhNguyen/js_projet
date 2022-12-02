import { Album } from './Album.js';
import { Collection } from './Collection.js';
import { Game } from './Game.js';
import { Movie } from './Movie.js';

document.addEventListener('DOMContentLoaded', function () {
    let type = document.getElementById('myChoice');
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

let type = document.getElementById('myChoice');
    type.addEventListener('change', function () {

    let categoryChoice = type.options[type.selectedIndex].text;
    console.log(categoryChoice);

    let generalForm = '<div class="border-top my-3"></div> \
    <p class="text-center">GENERAL</p> \
    <div class="border-top my-3"></div> \
    <div class="mb-3"> \
      <label for="titre" class="col-form-label">Title</label> \
      <input type="text" class="form-control" id="titre"> \
      <label for="ReleaseDate" class="col-form-label">Release date</label> \
      <input type="date" class="form-control" id="ReleaseDate"> \
      <label for="rating" class="col-form-label">Rating</label> \
      <div class="rating"> \
        <input type="radio" name="rating" value="5" id="5"> \
        <label for="5">☆</label>  \
        <input type="radio" name="rating" value="4" id="4"> \
        <label for="4">☆</label> \
        <input type="radio" name="rating" value="3" id="3"> \
        <label for="3">☆</label> \
        <input type="radio" name="rating" value="2" id="2"> \
        <label for="2">☆</label> \
        <input type="radio" name="rating" value="1" id="1"> \
        <label for="1">☆</label> \
    </div>  \
      <label for="basic-url">Image</label> \
      <div class="input-group mb-3"> \
        <div class="input-group-prepend"> \
          <span class="input-group-text" id="basic-addon3">http://</span> \
        </div>  \
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="mysite.com"> \
      </div>'; 

      let specificForm = '<div class="border-top my-3"></div><p class="text-center">SPECIFIC</p><div class="border-top my-3"></div>';

    switch (categoryChoice) {
        case "Album":
            specificForm += '<label for="artists" class="col-form-label">Artists</label> \
            <input type="text" class="form-control" id="artists"> \
            <label for="nbTracks" class="col-form-label">Number of tracks</label> \
            <input type="number" class="form-control" id="nbTracks"></input>';
            break;
        case "Game":
            specificForm += '<div class="mb-3"> \
            <label for="studio" class="col-form-label">Studio</label> \
            <input type="text" class="form-control" id="studio"> \
            <label for="nbPlayers" class="col-form-label">Number of players</label> \
            <input type="number" class="form-control" id="nbPlayers"> \
            <label for="plot" class="col-form-label">Plot</label> \
            <textarea class="form-control" id="plot" rows="2"></textarea></div>';
            break;
        case "Movie":
            specificForm += '<label for="director" class="col-form-label">Director</label> \
            <input type="text" class="form-control" id="director"> \
            <label for="actors" class="col-form-label">Actors</label> \
            <input type="text" class="form-control" id="actors"> \
            <label for="duration" class="col-form-label">Duration</label> \
            <input type="plott" class="form-control" id="plot"> \
            <label for="plot" class="col-form-label">Plot</label> \
            <textarea class="form-control" id="plot" rows="2"></textarea>';
            break;
        default:
            specificForm += "<p>Choisir une catégorie</p>";
            break;
    }
    document.getElementById('general').innerHTML = generalForm;
    document.getElementById('specific').innerHTML = specificForm;
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