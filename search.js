"use strict";
 
/* 

==========CONTENTS==========

1. PROCESS RESPONSE
2. PROCESS SECOND RESPONSE
3. VIEW TRAILER

*/

// Basic API calls adapted from: 
// http://rest.elkstein.org/2008/02/using-rest-in-javascript.html
// https://runkeeper.com/developer/healthgraph/example-api-calls

//APIs Used:
// NYT Movie Reviews: https://developer.nytimes.com/movie_reviews_v2.json
// Open Movie Database: https://www.omdbapi.com/
// YouTube iFrame: https://developers.google.com/youtube/iframe_api_reference


//========================= PROCESS RESPONSE ===============================

// Create function to create elements and append parts of response to them
// Parse response function adapted from:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
var processResponse = function () {

    // Parse response and print it in console to view all response objects
    var response = JSON.parse(this.response);
    console.log(response); 

    // Create variable with title to display on page
    var title = response.results[0].display_title;

    // textContent is used instead of appendChild
    // So that content is replaced each time rather than appended
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    document.getElementById("title_c").textContent = title;

    // Search for trailers using title variable and load playlist
    // Adapted from: http://salman-w.blogspot.co.uk/2012/07/youtube-iframe-embeds-video-playlist-and-html5.html
    var youtubeUrl = "http://www.youtube.com/embed?listType=search&list=" + title + "trailer";
    var player = document.getElementById("playerC");
    player.src = youtubeUrl;

    // Create another request to get data from different source
    var xhr = new XMLHttpRequest();
    var url = "http://www.omdbapi.com/?" + "t=" + title;
    console.log(url);

    // Use another function to process the response
    xhr.addEventListener("load", processSecondResponse);
    xhr.open("GET", url);
    xhr.send();
};


//====================== PROCESS SECOND RESPONSE ======================

// Parse response function adapted from:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
var processSecondResponse = function () {
    var response = JSON.parse(this.response);
    console.log(response);

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var year = response.Year;
    document.getElementById("year_c").textContent = year;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var actors = response.Actors;
    document.getElementById("actors_c").textContent = actors;

    // Get summary of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var summary = response.Plot;
    document.getElementById("summary_c").textContent = summary;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var director = response.Director;
    document.getElementById("director_c").textContent = director;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rating = response.imdbRating;
    document.getElementById("rating_c").textContent = "IMDb Rating: " + rating;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var genre = response.Genre;
    document.getElementById("genre_c").textContent = genre;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var awards = response.Awards;
    document.getElementById("awards_c").textContent = awards;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rated = response.Rated;
    document.getElementById("rated_c").textContent = rated;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var released = response.Released;
    document.getElementById("released_c").textContent = released;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var runtime = response.Runtime;
    document.getElementById("runtime_c").textContent = runtime;
};


//========================= VIEW TRAILER ===============================

var viewTrailer = function () {

    // Adapted from: http://stackoverflow.com/questions/15229732/show-a-div-onclick-and-hide-the-image-that-triggered-it
    var content = document.getElementById("slideoutC");
    if (content.style.display === "block") {
        content.style.display = "block";

        // Use input from text box to search for movie title
        var title = document.getElementById("movie_title").value;

        // Print title in console
        console.log(title);

        // Create new request
        var xhr = new XMLHttpRequest();

        // Create url with API key and title variable to search for movie title
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&query=" + title;
        console.log(url);

        // Use processReviewResponse function to create new elements and append results of API call
        xhr.addEventListener("load", processResponse);
        xhr.open("GET", url);
        xhr.send();
    } else {
        content.style.display = "block";

        // Use input from text box to search for movie title
        var title = document.getElementById("movie_title").value;

        // Print title in console
        console.log(title);

        // Create new request
        var xhr = new XMLHttpRequest();

        // Create url with API key and title variable to search for movie title
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&query=" + title;
        console.log(url);

        // Use processReviewResponse function to create new elements and append results of API call
        xhr.addEventListener("load", processResponse);
        xhr.open("GET", url);
        xhr.send();

    }
};