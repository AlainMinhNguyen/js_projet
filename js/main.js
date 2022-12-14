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
            <span class="card-date">Released the `+ month + `-` + day + `-` + year + `</span>
        `;
        if (element.getType() == "album") {
            html += `<br><span class="grey-info">Number of track : ` + element.nbTracks + `</span><p class="card-text">` + element.artists +
                `<br></p>
            `;

        }
        if (element.getType() == "game") {
            html += `<p class="card-text">` + element.plot +
                `<br><br><span class="grey-info">Number of players : ` + element.nbPlayers + `</span><br>
            <span class="grey-info">Studio : ` + element.studio + `</span><br>
            
            </p>
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
        `;
        }
        html += `            <p class="card-rating">
        Rating :
        `+ ratinghtml + `
    </p>
    <div class="card-buttons">
        <button type="button" class="btn btn-secondary" disabled><span class="material-symbols-outlined" >
            edit_square
        </span></button>
        <button type="button" remove-id="` + element.id + `"  class="btn btn-primary remove-btn"><span class="material-symbols-outlined">
                delete
            </span> remove</button>
    </div>
</div>
</div>`
    });

    document.getElementById('media-container').innerHTML = html;
}



function localStorageToCollection(collection, localStorage) {
    localStorage.forEach(element => {
        switch (element.type) {
            case "album":
                let album = new Album(element.title, new Date(element.releaseDate), element.rating, element.img, element.artists, element.nbTracks);
                album.setId(element.id);
                collection.add(album);
                break;
            case "game":
                let game = new Game(element.title, new Date(element.releaseDate), element.rating, element.img, element.studio, element.nbPlayers, element.plot);
                game.setId(element.id);
                collection.add(game);
                break;
            case "movie":
                let movie = new Movie(element.title, new Date(element.releaseDate), element.rating, element.img, element.director, element.actors, element.duration, element.plot);
                movie.setId(element.id);
                collection.add(movie);
                break;
            default:
                break;
        }
    });
    return collection;
}

function localStorageManage() {
    if (localStorage.getItem('collection') != null) {
        let localStorageCollection = JSON.parse(localStorage.getItem('collection'));
        myCollection = localStorageToCollection(myCollection, localStorageCollection);
    }
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


// select for sorting
document.getElementById('sort-select').addEventListener('change', function () {
    let sort = document.getElementById('sort-select').value;
    switch (sort) {
        case "1":
            myCollection.sortByTitle();
            break;
        case "2":
            myCollection.sortByDate();
            break;
        case "3":
            myCollection.sortByRating();
            break;
        default:
            break;
    }
    displayCollection(myCollection);
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
      <input type="text" class="form-control" id="titre" required> \
      <label for="ReleaseDate" class="col-form-label">Release date</label> \
      <input type="date" class="form-control" id="ReleaseDate" required> \
      <label for="rating" class="col-form-label">Rating</label> \
      <div class="rating"> \
        <input type="radio" name="rating" value="5" id="5"> \
        <label for="5">???</label>  \
        <input type="radio" name="rating" value="4" id="4"> \
        <label for="4">???</label> \
        <input type="radio" name="rating" value="3" id="3"> \
        <label for="3">???</label> \
        <input type="radio" name="rating" value="2" id="2"> \
        <label for="2">???</label> \
        <input type="radio" name="rating" value="1" id="1"> \
        <label for="1">???</label> \
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
                    <label for="5">???</label>  \
                    <input type="radio" name="rating" value="4" id="4"> \
                    <label for="4">???</label> \
                    <input type="radio" name="rating" value="3" id="3"> \
                    <label for="3">???</label> \
                    <input type="radio" name="rating" value="2" id="2"> \
                    <label for="2">???</label> \
                    <input type="radio" name="rating" value="1" id="1"> \
                    <label for="1">???</label> \
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
                    })
                    .catch(error => {
                        console.log('erreur ', error)
                        document.getElementById('titre').value = 'Movie not found';
                    });
            });

            break;
        default:
            specificForm += "<p>Choisir une cat??gorie</p>";
            document.getElementById('specific').innerHTML = specificForm;
            break;
    }
    document.getElementById('specific').innerHTML = specificForm;

});


document.getElementById('addBtn').addEventListener('click', function () {

     if (document.getElementById('titre').value == '') {
         alert('Please enter a title');
        } else if (document.getElementById('ReleaseDate').value == '') {
            alert('Please enter a release date');
    } else if (document.querySelector('input[name="rating"]:checked')?.value == undefined) {
         alert('Please enter a rating');
        } else if (document.getElementById('basic-url').value == '') {
            alert('Please enter an URL');
        } else {
        let type = document.getElementById('myChoice');
        let categoryChoice = type.options[type.selectedIndex].text;
        let title = document.getElementById('titre').value;
        let releaseDate = new Date(document.getElementById('ReleaseDate')?.value);
        let rating = document.querySelector('input[name="rating"]:checked').value;
        let image = document.getElementById('basic-url').value;

        let newMedia;
            if (categoryChoice == "Album") {
                let artists = document.getElementById('artists').value;
                let nbTracks = document.getElementById('nbTracks').value;
                newMedia = new Album(title, releaseDate, rating, image, artists, nbTracks);
            } else if (categoryChoice == "Game" && document.getElementById('studio').value != '' && document.getElementById('nbPlayers').value != '' && document.getElementById('platform').value != '') {
                let studio = document.getElementById('studio').value;
                let nbPlayers = document.getElementById('nbPlayers').value;
                let plot = document.getElementById('plot').value;
                newMedia = new Game(title, releaseDate, rating, image, studio, nbPlayers, plot);
            } else if (categoryChoice == "Movie") {
                let director = document.getElementById('director').value;
                let actors = document.getElementById('actors').value;
                let duration = document.getElementById('duration').value;
                let plot = document.getElementById('plot').value;
                newMedia = new Movie(title, releaseDate, rating, image, director, actors, duration, plot);
            }
            console.log(newMedia);
            myCollection.add(newMedia);
            myCollection.addMedia(newMedia);
            displayCollection(myCollection);
            removeListeners();
            // vide le formulaire
            document.getElementById('general').innerHTML = '<p></p>';
            document.getElementById('specific').innerHTML = '<div class="alert alert-success" role="alert">Your media was successfully added!!</div>';
            
        }
    
});


function removeListeners() {
    let removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(function (removeBtn) {
        removeBtn.addEventListener('click', function () {
            console.log(this.getAttribute('remove-id'));
            myCollection.removeMedia(this.getAttribute('remove-id'));
            localStorageManage();
            displayCollection(myCollection);
            removeListeners();
        });
    });
}

//------------------Creation d'objets exemple------------------

let myCollection = new Collection();


let myAlbum1title = '86 EIGHTY-SIX original soundtrack';
let myAlbum1date = new Date('2021-03-10');
let myAlbum1rating = 5;
let myAlbum1image = 'https://lh3.googleusercontent.com/tLUmjnIvbPMklG1KkKE5QDuZ3DlEmhZLMGDsz5cliFgu61rYKZ93MZ_yoxEAqHTUP1DW-ICZZ2IVAac7=w544-h544-l90-rj';
let myAlbum1artist = 'Hiroyuki Sawano et KOHTA YAMAMOTO';
let myAlbum1tracks = 42;

let myAlbum1 = new Album(myAlbum1title, myAlbum1date, myAlbum1rating, myAlbum1image, myAlbum1artist, myAlbum1tracks);


let myAlbum2title = 'OST | ??????/Genshin Impact/????????????/??????'
let myAlbum2date = new Date('2021-01-10');
let myAlbum2rating = 5
let myAlbum2image = 'https://i.ytimg.com/vi/72PhV7wQr5Y/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBiZF0kxjQPLqLYBnG-DzsdK3_Y5g'
let myAlbum2artist = 'Mihoyo';
let myAlbum2tracks = 42;

let myAlbum2 = new Album(myAlbum2title, myAlbum2date, myAlbum2rating, myAlbum2image, myAlbum2artist, myAlbum2tracks);

let myGame1title = 'Black desert online'
let myGame1date = new Date('2009-03-10');
let myGame1rating = 4
let myGame1image = 'https://jolstatic.fr/www/captures/1876/6/156236-320.jpg'
let myGame1studio = 'Pearl Abyss';
let myGame1nbplayers = 'unlimited';
let myGame1plot = 'Black Desert Online is a sandbox-oriented fantasy massively multiplayer online role-playing game developed by Korean video game developer Pearl Abyss and originally published for Microsoft Windows in 2015.'


let myGame1 = new Game(myGame1title, myGame1date, myGame1rating, myGame1image, myGame1studio, myGame1nbplayers, myGame1plot);

let myGame2title = 'Genshin Impact'
let myGame2date = new Date('2011-03-11');
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
let myMovie2plot = 'Fate/stay night: Heaven\'s Feel II. lost butterfly is a 2019 Japanese anime fantasy film produced by ufotable and directed by Tomonori Sud??. The second installment in the Fate/stay night: Heaven\'s Feel trilogy, it premiered in Japan on January 12, 2019 and in the United States on March 14, 2019.'

let myMovie2 = new Movie(myMovie2title, myMovie2date, myMovie2rating, myMovie2image, myMovie2director, myMovie2actors, myMovie2duration, myMovie2plot);

//------------------Ajout dand la collection exemples------------------
myCollection.add(myAlbum1);
myCollection.add(myGame1);
myCollection.add(myMovie1);
myCollection.add(myAlbum2);
myCollection.add(myMovie2);
myCollection.add(myGame2);

//------------------Ajout des donn??es en localStorage dans la collection------------------
//localStorage.clear(); //vider le local storage

localStorageManage();
//------------------Affichage------------------
displayCollection(myCollection);
removeListeners();
