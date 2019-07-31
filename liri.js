require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment")
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var category = process.argv[2];
var search = process.argv.slice(3).join(" ");
var bandUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
var movieUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";


switch (category) {

    case ("band"):
        bandSearch();
        break;

    case ("spotify"):
        spotifySearch();
        break;

    case ("movie"):
        movieSearch();
        break;

    case ("do-what-i-say"):
        randomtext();
        break;

    default: 
        console.log("Please type the category you want to search (spotify, band, movie)")

    
}

function randomtext() {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        var dataArr = data.split(',');

        console.log(dataArr[1]);

        spotify.search({ type: 'track', query: dataArr[1], limit: 1, }, function (err, data) {

            console.log(data.tracks.items[0].artists[0].name);
            console.log(data.tracks.items[0].preview_url);
            console.log(search);
            console.log(data.tracks.items[0].album.name);
    
        })

    })
}



function movieSearch() {
    axios.get(movieUrl).then(
        function (response) {
           
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMBD Rating: " + response.data.imdbRating);
            console.log(response.data.Ratings[1].Source + ": " + response.data.Ratings[1].Value)
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        } 
    ); 
}

function bandSearch() {
    axios.get(bandUrl).then(
        function (response) {
            
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.country + ", " + response.data[0].venue.city);
            console.log(moment(response.data[0].datetime).format("L"));
        }
    );
}

function spotifySearch() {
    spotify.search({ type: 'track', query: search }, function (err, data) {
        if (err){
            return console.log("Error Occured: " + "Please make sure your search is spelled correctly!")
        }
        console.log(data.tracks.items[0].artists[0].name);
        console.log(search);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].preview_url);
    });
}

