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

        day = ("0" + element.releaseDate.getDate()).slice(-2);
        month = ("0" + parseInt(parseInt(element.releaseDate.getMonth()) + 1)).slice(-2)
        year = ("0" + element.releaseDate.getFullYear()).slice(-4);

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
            src="`+ element.img + `"
            alt="Card image cap">
        <div class="card-body">

            <h5 class="card-title"><span class="material-symbols-outlined">`+ icon + `</span> ` + element.title + `</h5>
            <span class="card-date">Released the `+ month + `-` + day + `-` + year +`</span>
        `
        if (element.getType() == "album") {
            html += `<br><span class="grey-info">Number of track : ` + element.nbTracks + `</span><p class="card-text">` + element.artists +
                `<br></p>`
                html += `
                <p class="card-rating">
                    Rating :
                    `+ ratinghtml + `
                </p>
                <div class="card-buttons">
                    <a href="#" class="btn btn-secondary"><span class="material-symbols-outlined">
                        edit_square
                    </span> edit</a>
                    <button type="button" id="`+ element.title.replace(/ /g, '') + `" onclick="deleteFromTitle(`+ element.title +`);" class="btn btn-primary"><span class="material-symbols-outlined">
                            delete
                        </span> remove</button>
                </div>
            </div>
        </div>
            `;

        }
        if (element.getType() == "game") {
            html += `<p class="card-text">` + element.plot +
                `<br><br><span class="grey-info">Number of players : ` + element.nbPlayers + `</span><br>
            <span class="grey-info">Studio : ` + "Rm-" + element.studio + `</span><br>
            
            </p>`
            html += `
            <p class="card-rating">
                Rating :
                `+ ratinghtml + `
            </p>
            <div class="card-buttons">
                <a href="#" class="btn btn-secondary"><span class="material-symbols-outlined">
                    edit_square
                </span> edit</a>
                <button type="button" id="` + "Rm-"+ element.title.replace(/ /g, '') + `"  class="btn btn-primary"><span class="material-symbols-outlined">
                        delete
                    </span> remove</button>
            </div>
        </div>
    </div>
        `;
        }
        if (element.getType() == "movie") {
            html += `<p class="card-text">` + element.plot +
                `<br><br>
            <span class="grey-info">Director : ` + element.director + `</span><br>
            <span class="grey-info">Actors : ` + element.actors + `</span><br>
            <span class="grey-info">Duration : ` + element.duration + ` min ` + `</span>
            </p>`
            html += `
            <p class="card-rating">
                Rating :
                `+ ratinghtml + `
            </p>
            <div class="card-buttons">
                <a href="#" class="btn btn-secondary"><span class="material-symbols-outlined">
                    edit_square
                </span> edit</a>
                <button type="button" id="` + "Rm-" + element.title.replace(/ /g, '') + `"  class="btn btn-primary"><span class="material-symbols-outlined">
                        delete
                    </span> remove</button>
            </div>
        </div>
    </div>
        `;
        }
    });

    document.getElementById('media-container').innerHTML = html;
}



function localStorageToCollection(collection, localStorage) {
    localStorage.forEach(element => {
        switch (element.type) {
            case "album":
                collection.add(new Album(element.title, new Date(element.releaseDate), element.rating, element.img, element.artists, element.nbTracks));
                break;
            case "game":
                collection.add(new Game(element.title, new Date(element.releaseDate), element.rating, element.img, element.studio, element.nbPlayers, element.plot));
                break;
            case "movie":
                collection.add(new Movie(element.title, new Date(element.releaseDate), element.rating, element.img, element.director, element.actors, element.duration, element.plot));
                break;
            default:
                break;
        }
    });
    return collection;
}

//------------------Evenements------------------
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
//------------------MAIN------------------

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

    document.getElementById('general').innerHTML = generalForm;


    switch (categoryChoice) {
        case "Album":
            document.getElementById('general').innerHTML = generalForm;
            specificForm += '<label for="artists" class="col-form-label">Artists</label> \
            <input type="text" class="form-control" id="artists"> \
            <label for="nbTracks" class="col-form-label">Number of tracks</label> \
            <input type="number" class="form-control" id="nbTracks"></input>';
            break;
        case "Game":
            document.getElementById('general').innerHTML = generalForm;
            specificForm += '<div class="mb-3"> \
            <label for="studio" class="col-form-label">Studio</label> \
            <input type="text" class="form-control" id="studio"> \
            <label for="nbPlayers" class="col-form-label">Number of players</label> \
            <input type="number" class="form-control" id="nbPlayers"> \
            <label for="plot" class="col-form-label">Plot</label> \
            <textarea class="form-control" id="plot" rows="2"></textarea></div>';
            break;
        case "Movie":
            generalForm = '<div class="border-top my-3"></div> \
                <p class="text-center">GENERAL</p> \
                <div class="border-top my-3"></div> \
                <div class="mb-3"> \
                <label for="titre" class="col-form-label">Title</label> \
                <input type="text" class="form-control" id="titre"> \
                <button type="button" class="btn btn-secondary" id="addMovie">Add movie with API (optional)</button><br/>\
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

            specificForm += '<label for="director" class="col-form-label">Director</label> \
                <input type="text" class="form-control" id="director"> \
                <label for="actors" class="col-form-label">Actors</label> \
                <input type="text" class="form-control" id="actors"> \
                <label for="duration" class="col-form-label">Duration</label> \
                <input type="number" class="form-control" id="duration"> \
                <label for="plot" class="col-form-label">Plot</label> \
                <textarea class="form-control" id="plot" rows="2"></textarea>';

            document.getElementById('general').innerHTML = generalForm;
            document.getElementById('specific').innerHTML = specificForm;

            document.getElementById('addMovie').addEventListener('click', function () {
                let apikey = '9c30d4cc';
                let movieTitle = document.getElementById('titre').value;
                let url = 'http://www.omdbapi.com/?apikey=' + apikey + '&t=' + movieTitle + '&plot=short&r=json';
                console.log(url);
                fetch(url)
                    .then(response => response.json())
                    .then(movie => {
                        console.log(movie);
                        let titleToAPI = movie.Title;
                        let dateString = movie.Released;
                        let dateToAPI = new Date(dateString).toISOString().slice(0, 10);
                        let imageToAPI = movie.Poster;
                        let directorToAPI = movie.Director;
                        let actorsToAPI = movie.Actors;
                        let durationString = movie.Runtime;
                        let durationToAPI = durationString.replace(' min', '');
                        let plotToAPI = movie.Plot;

                        document.getElementById('titre').value = titleToAPI;
                        document.getElementById('ReleaseDate').value = dateToAPI;
                        document.getElementById('basic-url').value = imageToAPI;
                        document.getElementById('director').value = directorToAPI;
                        document.getElementById('actors').value = actorsToAPI;
                        document.getElementById('duration').value = durationToAPI
                        document.getElementById('plot').value = plotToAPI;
                        console.log(titleToAPI, dateToAPI, imageToAPI, directorToAPI, actorsToAPI, durationToAPI, plotToAPI);

                        // let newMovieWithAPI = new Movie(titleToAPI, dateToAPI, imageToAPI, directorToAPI, actorsToAPI, durationToAPI, plotToAPI);
                        // console.log(newMovieWithAPI);

                    })
                    .catch(error => {
                        console.log('erreur ', error)
                        document.getElementById('titre').value = 'Movie not found';
                    });
            });

            break;
        default:
            specificForm += "<p>Choisir une catégorie</p>";
            document.getElementById('specific').innerHTML = specificForm;
            break;
    }
    document.getElementById('specific').innerHTML = specificForm;

});



document.getElementById('addBtn').addEventListener('click', function () {
    let type = document.getElementById('myChoice');
    let categoryChoice = type.options[type.selectedIndex].text;
    let title = document.getElementById('titre').value;
    let releaseDate = new Date(document.getElementById('ReleaseDate').value);
    let rating = document.querySelector('input[name="rating"]:checked').value;
    let image = document.getElementById('basic-url').value;
    if (categoryChoice == "Album") {
        let artists = document.getElementById('artists').value;
        let nbTracks = document.getElementById('nbTracks').value;
        let newAlbum = new Album(title, releaseDate, rating, image, artists, nbTracks);
        console.log(newAlbum);
        myCollection.add(newAlbum);
        myCollection.addMedia(newAlbum);
        displayCollection(myCollection);

        console.log(myCollection);
    } else if (categoryChoice == "Game") {
        let studio = document.getElementById('studio').value;
        let nbPlayers = document.getElementById('nbPlayers').value;
        let plot = document.getElementById('plot').value;
        let newGame = new Game(title, releaseDate, rating, image, studio, nbPlayers, plot);
        console.log(newGame);
        myCollection.add(newGame);
        myCollection.addMedia(newGame);
        displayCollection(myCollection);

        console.log(myCollection);
    } else if (categoryChoice == "Movie") {
        let director = document.getElementById('director').value;
        let actors = document.getElementById('actors').value;
        let duration = document.getElementById('duration').value;
        let plot = document.getElementById('plot').value;
        let newMovie = new Movie(title, releaseDate, rating, image, director, actors, duration, plot);
        console.log(newMovie);
        myCollection.add(newMovie);
        myCollection.addMedia(newMovie);
        displayCollection(myCollection);

        console.log(myCollection);
    }


});



document.addEventListener('DOMContentLoaded', function () {
    let removeBtn = document.getElementById('Rm-Avatar');
    removeBtn.addEventListener('click', function () {
        console.log('OK');
        myCollection.removeMedia(title);
        displayCollection(myCollection);
    })
});


//------------------Creation d'objets exemple------------------

let myCollection = new Collection();


let myAlbum1title = '86 EIGHTY-SIX original soundtrack';
let myAlbum1date = new Date('2021-03-10');
let myAlbum1rating = 5;
let myAlbum1image = 'https://lh3.googleusercontent.com/tLUmjnIvbPMklG1KkKE5QDuZ3DlEmhZLMGDsz5cliFgu61rYKZ93MZ_yoxEAqHTUP1DW-ICZZ2IVAac7=w544-h544-l90-rj';
let myAlbum1artist = 'Hiroyuki Sawano et KOHTA YAMAMOTO';
let myAlbum1tracks = 42;

let myAlbum1 = new Album(myAlbum1title, myAlbum1date, myAlbum1rating, myAlbum1image, myAlbum1artist, myAlbum1tracks);


let myAlbum2title = 'OST | 原神/Genshin Impact/げんしん/원신'
let myAlbum2date = new Date('2021-03-10');
let myAlbum2rating = 5
let myAlbum2image = 'https://i.ytimg.com/vi/72PhV7wQr5Y/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBiZF0kxjQPLqLYBnG-DzsdK3_Y5g'
let myAlbum2artist = 'Mihoyo';
let myAlbum2tracks = 42;

let myAlbum2 = new Album(myAlbum2title, myAlbum2date, myAlbum2rating, myAlbum2image, myAlbum2artist, myAlbum2tracks);

let myGame1title = 'Black desert online'
let myGame1date = new Date('2021-03-10');
let myGame1rating = 4
let myGame1image = 'https://jolstatic.fr/www/captures/1876/6/156236-320.jpg'
let myGame1studio = 'Pearl Abyss';
let myGame1nbplayers = 'unlimited';
let myGame1plot = 'Black Desert Online is a sandbox-oriented fantasy massively multiplayer online role-playing game developed by Korean video game developer Pearl Abyss and originally published for Microsoft Windows in 2015.'


let myGame1 = new Game(myGame1title, myGame1date, myGame1rating, myGame1image, myGame1studio, myGame1nbplayers, myGame1plot);

let myGame2title = 'Genshin Impact'
let myGame2date = new Date('2021-03-10');
let myGame2rating = 4
let myGame2image = 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820'
let myGame2studio = 'miHoYo';
let myGame2nbplayers = 4;
let myGame2plot = 'Genshin Impact is an action role-playing game developed and published by miHoYo. It was released for Microsoft Windows, PlayStation 4, iOS, and Android in 2020, on PlayStation 5 in 2021, and is set for release on Nintendo Switch.'

let myGame2 = new Game(myGame2title, myGame2date, myGame2rating, myGame2image, myGame2studio, myGame2nbplayers, myGame2plot);

let myMovie1title = 'Fate/stay night: Heaven\'s Feel I. presage flower'
let myMovie1date = new Date('2021-03-10');
let myMovie1rating = 4
let myMovie1image = 'https://www.nautiljon.com/images/anime/00/20/mini/fate_stay_night_heaven_s_feel_i_presage_flower_4702.jpg?11528565156'
let myMovie1director = 'Tomonori Sudou';
let myMovie1actors = 'Person, Person, Person';
let myMovie1duration = 120;
let myMovie1plot = 'High school student Shirou finds himself at the centre of an ancient war between wizards to claim a magical artefact.'

let myMovie1 = new Movie(myMovie1title, myMovie1date, myMovie1rating, myMovie1image, myMovie1director, myMovie1actors, myMovie1duration, myMovie1plot);

let myMovie2title = 'Fate/stay night: Heaven\'s Feel II. lost butterfly'
let myMovie2date = new Date('2021-03-10');
let myMovie2rating = 3
let myMovie2image = 'https://www.nautiljon.com/images/anime/00/91/mini/fate_stay_night_heaven_s_feel_ii_lost_butterfly_5719.jpg?11567168184'
let myMovie2director = 'Tomonori Sudou';
let myMovie2actors = 'Person, Person, Person';
let myMovie2duration = 160;
let myMovie2plot = 'Fate/stay night: Heaven\'s Feel II. lost butterfly is a 2019 Japanese anime fantasy film produced by ufotable and directed by Tomonori Sudō. The second installment in the Fate/stay night: Heaven\'s Feel trilogy, it premiered in Japan on January 12, 2019 and in the United States on March 14, 2019.'

let myMovie2 = new Movie(myMovie2title, myMovie2date, myMovie2rating, myMovie2image, myMovie2director, myMovie2actors, myMovie2duration, myMovie2plot);

//------------------Ajout dand la collection exemples------------------
myCollection.add(myAlbum1);
myCollection.add(myGame1);
myCollection.add(myMovie1);
myCollection.add(myAlbum2);
myCollection.add(myMovie2);
myCollection.add(myGame2);

//------------------Ajout des données en localStorage dans la collection------------------
//localStorage.clear(); //vider le local storage
if (localStorage.getItem('collection') != null) {
    let localStorageCollection = JSON.parse(localStorage.getItem('collection'));
    myCollection = localStorageToCollection(myCollection, localStorageCollection);
}
//------------------Affichage------------------
displayCollection(myCollection);

