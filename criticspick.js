"use strict";

/*  

==========CONTENTS==========

1. PROCESS RESPONSE
        a. CONTENT B1
        b. CONTENT B2
        c. CONTENT B3
        d. CONTENT C1
        e. CONTENT C2
        f. CONTENT C3
2. DO SEARCH
3. ON LOAD
4. VIEW TRAILER
        a. B1
        b. B2
        c. B3
        d. C1
        e. C2
        f. C3

*/

// Basic API calls adapted from: 
// http://rest.elkstein.org/2008/02/using-rest-in-javascript.html
// https://runkeeper.com/developer/healthgraph/example-api-calls

//APIs Used:
// NYT Movie Reviews: https://developer.nytimes.com/movie_reviews_v2.json
// Open Movie Database: https://www.omdbapi.com/
// YouTube iFrame: https://developers.google.com/youtube/iframe_api_reference


//========================= PROCESS RESPONSE ===============================

// Parse response function adapted from:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
var processResponse = function () {

    // Parse response and print it in console
    var response = JSON.parse(this.response);
    console.log(response);
 
    // ==================== CONTENT B1 ====================

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    // Get display title from API response and put into HTML element
    var titleB1 = response.results[0].display_title;
    document.getElementById("title_b1").textContent = titleB1;

    // Get picture link, create and img element and set link as img src
    // To display image on page
    var imageSourceB1 = response.results[0].multimedia.src;
    var imageB1 = document.createElement("img");
    var imageParentB1 = document.getElementById("img_b1");
    imageB1.src = imageSourceB1;
    imageParentB1.appendChild(imageB1);

    // ==================== CONTENT B2 ====================

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    // Get display title from API response and put into HTML element
    var titleB2 = response.results[1].display_title;
    document.getElementById("title_b2").textContent = titleB2;

    // Get picture link, create and img element and set link as img src
    // To display image on page
    var imageSourceB2 = response.results[1].multimedia.src;
    var imageB2 = document.createElement("img");
    var imageParentB2 = document.getElementById("img_b2");
    imageB2.src = imageSourceB2;
    imageParentB2.appendChild(imageB2);

    // ==================== CONTENT B3 ====================

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    // Get display title from API response and put into HTML element
    var titleB3 = response.results[2].display_title;
    document.getElementById("title_b3").textContent = titleB3;

    // Get picture link, create and img element and set link as img src
    // To display image on page
    var imageSourceB3 = response.results[2].multimedia.src;
    var imageB3 = document.createElement("img");
    var imageParentB3 = document.getElementById("img_b3");
    imageB3.src = imageSourceB3;
    imageParentB3.appendChild(imageB3);

    // ==================== CONTENT C1 ====================

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    // Get display title from API response and put into HTML element
    var titleC1 = response.results[3].display_title;
    document.getElementById("title_c1").textContent = titleC1;

    // Get picture link, create and img element and set link as img src
    // To display image on page
    var imageSourceC1 = response.results[3].multimedia.src;
    var imageC1 = document.createElement("img");
    var imageParentC1 = document.getElementById("img_c1");
    imageC1.src = imageSourceC1;
    imageParentC1.appendChild(imageC1);

    // ==================== CONTENT C2 ====================

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    // Get display title from API response and put into HTML element
    var titleC2 = response.results[4].display_title;
    document.getElementById("title_c2").textContent = titleC2;

    // Get picture link, create and img element and set link as img src
    // To display image on page
    var imageSourceC2 = response.results[4].multimedia.src;
    var imageC2 = document.createElement("img");
    var imageParentC2 = document.getElementById("img_c2");
    imageC2.src = imageSourceC2;
    imageParentC2.appendChild(imageC2);

    // ==================== CONTENT C3 ====================

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    // Get display title from API response and put into HTML element
    var titleC3 = response.results[5].display_title;
    document.getElementById("title_c3").textContent = titleC3;

    // Get picture link, create and img element and set link as img src
    // To display image on page
    var imageSourceC3 = response.results[5].multimedia.src;
    var imageC3 = document.createElement("img");
    var imageParentC3 = document.getElementById("img_c3");
    imageC3.src = imageSourceC3;
    imageParentC3.appendChild(imageC3);
};

//========================= DO SEARCH ===============================

var doSearch = function () {

    // Create new request
    var xhr = new XMLHttpRequest();

    // Create url with API key to search for top critics picks
    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&critics-pick=Y";
    console.log(url);

    // Use processResponse function to create new elements and append results of API call
    xhr.addEventListener("load", processResponse);
    xhr.open("GET", url);
    xhr.send();
};

//========================= ON LOAD ===============================

// Execute doSearch function when page is loaded
// To fetch information to display on page
window.onload = doSearch;

//========================= VIEW TRAILER ===============================

// ==================== B1 ====================
var b1 = function () {

    // Content appears if a button is clicked and the content is hidden
    // If button is clicked and the content is not hidden, function hides content
    // Adapted from: http://stackoverflow.com/questions/15229732/show-a-div-onclick-and-hide-the-image-that-triggered-it
    var content = document.getElementById("slideoutA");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";

        // Create new request
        var xhr = new XMLHttpRequest();

        // Create url with API key to search for top critics picks
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&critics-pick=Y";
        console.log(url);

        // Process response using a different function
        xhr.addEventListener("load", processB1Response);
        xhr.open("GET", url);
        xhr.send();
    }
};
var processB1Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);

    // Get title of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var title = response.results[0].display_title;
    document.getElementById("title_a").textContent = title;

    // Search for trailers using title variable and load playlist
    // Adapted from: http://salman-w.blogspot.co.uk/2012/07/youtube-iframe-embeds-video-playlist-and-html5.html
    var youtubeUrl = "http://www.youtube.com/embed?listType=search&list=" + title + "trailer";
    var player = document.getElementById("playerA");
    player.src = youtubeUrl;

    // Create new request
    var xhr = new XMLHttpRequest();
    var url = "http://www.omdbapi.com/?" + "t=" + title;
    console.log(url);

    // Process response using a different function
    xhr.addEventListener("load", processSecondB1Response);
    xhr.open("GET", url);
    xhr.send();
};

var processSecondB1Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);
    
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var year = response.Year;
    document.getElementById("year_a").textContent = year;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var actors = response.Actors;
    document.getElementById("actors_a").textContent = actors;

    // Get summary of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var summary = response.Plot;
    document.getElementById("summary_a").textContent = summary;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var director = response.Director;
    document.getElementById("director_a").textContent = director;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rating = response.imdbRating;
    document.getElementById("rating_a").textContent = "IMDb Rating: " + rating;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var genre = response.Genre;
    document.getElementById("genre_a").textContent = genre;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var awards = response.Awards;
    document.getElementById("awards_a").textContent = awards;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rated = response.Rated;
    document.getElementById("rated_a").textContent = rated;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var released = response.Released;
    document.getElementById("released_a").textContent = released;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var runtime = response.Runtime;
    document.getElementById("runtime_a").textContent = runtime;
};

// ==================== B2 ====================
var b2 = function () {

    // Content appears if a button is clicked and the content is hidden
    // If button is clicked and the content is not hidden, function hides content
    // Adapted from: http://stackoverflow.com/questions/15229732/show-a-div-onclick-and-hide-the-image-that-triggered-it
    var content = document.getElementById("slideoutA");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";

        // Create new request
        var xhr = new XMLHttpRequest();

        // Create url with API key to search for top critics picks
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&critics-pick=Y";
        console.log(url);

        // Process response using a different function
        xhr.addEventListener("load", processB2Response);
        xhr.open("GET", url);
        xhr.send();

    }
};
var processB2Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);

    // Get title of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var title = response.results[1].display_title;
    document.getElementById("title_a").textContent = title;

    // Search for trailers using title variable and load playlist
    // Adapted from: http://salman-w.blogspot.co.uk/2012/07/youtube-iframe-embeds-video-playlist-and-html5.html
    var youtubeUrl = "http://www.youtube.com/embed?listType=search&list=" + title + "trailer";
    var player = document.getElementById("playerA");
    player.src = youtubeUrl;

    // Create new API request
    var xhr = new XMLHttpRequest();
    var url = "http://www.omdbapi.com/?" + "t=" + title;
    console.log(url);

    // Process response using a different function
    xhr.addEventListener("load", processSecondB2Response);
    xhr.open("GET", url);
    xhr.send();
};

var processSecondB2Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);
    
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var year = response.Year;
    document.getElementById("year_a").textContent = year;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var actors = response.Actors;
    document.getElementById("actors_a").textContent = actors;

    // Get summary of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var summary = response.Plot;
    document.getElementById("summary_a").textContent = summary;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var director = response.Director;
    document.getElementById("director_a").textContent = director;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rating = response.imdbRating;
    document.getElementById("rating_a").textContent = "IMDb Rating: " + rating;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var genre = response.Genre;
    document.getElementById("genre_a").textContent = genre;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var awards = response.Awards;
    document.getElementById("awards_a").textContent = awards;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rated = response.Rated;
    document.getElementById("rated_a").textContent = rated;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var released = response.Released;
    document.getElementById("released_a").textContent = released;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var runtime = response.Runtime;
    document.getElementById("runtime_a").textContent = runtime;
};

// ==================== B3 ====================
var b3 = function () {

    // Content appears if a button is clicked and the content is hidden
    // If button is clicked and the content is not hidden, function hides content
    // Adapted from: http://stackoverflow.com/questions/15229732/show-a-div-onclick-and-hide-the-image-that-triggered-it
    var content = document.getElementById("slideoutA");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";

        // Create new request
        var xhr = new XMLHttpRequest();

        // Create url with API key to search for top critics picks
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&critics-pick=Y";
        console.log(url);

        // Process response using a different function
        xhr.addEventListener("load", processB3Response);
        xhr.open("GET", url);
        xhr.send();

    }
};
var processB3Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);

    // Get title of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var title = response.results[2].display_title;
    document.getElementById("title_a").textContent = title;

    // Search for trailers using title variable and load playlist
    // Adapted from: http://salman-w.blogspot.co.uk/2012/07/youtube-iframe-embeds-video-playlist-and-html5.html
    var youtubeUrl = "http://www.youtube.com/embed?listType=search&list=" + title + "trailer";
    var player = document.getElementById("playerA");
    player.src = youtubeUrl;

    // Create new API request
    var xhr = new XMLHttpRequest();
    var url = "http://www.omdbapi.com/?" + "t=" + title;
    console.log(url);

    // Process response using a different function
    xhr.addEventListener("load", processSecondB3Response);
    xhr.open("GET", url);
    xhr.send();
};

var processSecondB3Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);
    
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var year = response.Year;
    document.getElementById("year_a").textContent = year;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var actors = response.Actors;
    document.getElementById("actors_a").textContent = actors;

    // Get summary of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var summary = response.Plot;
    document.getElementById("summary_a").textContent = summary;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var director = response.Director;
    document.getElementById("director_a").textContent = director;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rating = response.imdbRating;
    document.getElementById("rating_a").textContent = "IMDb Rating: " + rating;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var genre = response.Genre;
    document.getElementById("genre_a").textContent = genre;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var awards = response.Awards;
    document.getElementById("awards_a").textContent = awards;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rated = response.Rated;
    document.getElementById("rated_a").textContent = rated;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var released = response.Released;
    document.getElementById("released_a").textContent = released;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var runtime = response.Runtime;
    document.getElementById("runtime_a").textContent = runtime;
};

// ==================== C1 ====================
var c1 = function () {

    // Content appears if a button is clicked and the content is hidden
    // If button is clicked and the content is not hidden, function hides content
    // Adapted from: http://stackoverflow.com/questions/15229732/show-a-div-onclick-and-hide-the-image-that-triggered-it
    var content = document.getElementById("slideoutB");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";

        // Create new request
        var xhr = new XMLHttpRequest();

        // Create url with API key to search for top critics picks
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&critics-pick=Y";
        console.log(url);

        // Process response using a different function
        xhr.addEventListener("load", processC1Response);
        xhr.open("GET", url);
        xhr.send();

    }
};
var processC1Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);

    // Get title of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var title = response.results[3].display_title;
    document.getElementById("title_b").textContent = title;

    // Search for trailers using title variable and load playlist
    // Adapted from: http://salman-w.blogspot.co.uk/2012/07/youtube-iframe-embeds-video-playlist-and-html5.html
    var youtubeUrl = "http://www.youtube.com/embed?listType=search&list=" + title + "trailer";
    var player = document.getElementById("playerB");
    player.src = youtubeUrl;

    // Create new API request for another call
    var xhr = new XMLHttpRequest();
    var url = "http://www.omdbapi.com/?" + "t=" + title;
    console.log(url);
    
    // Process response using a different function
    xhr.addEventListener("load", processSecondC1Response);
    xhr.open("GET", url);
    xhr.send();
};

var processSecondC1Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);
    
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var year = response.Year;
    document.getElementById("year_b").textContent = year;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var actors = response.Actors;
    document.getElementById("actors_b").textContent = actors;

    // Get summary of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var summary = response.Plot;
    document.getElementById("summary_b").textContent = summary;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var director = response.Director;
    document.getElementById("director_b").textContent = director;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rating = response.imdbRating;
    document.getElementById("rating_b").textContent = "IMDb Rating: " + rating;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var genre = response.Genre;
    document.getElementById("genre_b").textContent = genre;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var awards = response.Awards;
    document.getElementById("awards_b").textContent = awards;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rated = response.Rated;
    document.getElementById("rated_b").textContent = rated;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var released = response.Released;
    document.getElementById("released_b").textContent = released;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var runtime = response.Runtime;
    document.getElementById("runtime_b").textContent = runtime;
};

// ==================== C2 ====================
var c2 = function () {

    // Content appears if a button is clicked and the content is hidden
    // If button is clicked and the content is not hidden, function hides content
    // Adapted from: http://stackoverflow.com/questions/15229732/show-a-div-onclick-and-hide-the-image-that-triggered-it
    var content = document.getElementById("slideoutB");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";

        // Create new request
        var xhr = new XMLHttpRequest();

        // Create url with API key to search for top critics picks
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&critics-pick=Y";
        console.log(url);

        // Process response using a different function
        xhr.addEventListener("load", processC2Response);
        xhr.open("GET", url);
        xhr.send();

    }
};
var processC2Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);

    // Get title of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var title = response.results[4].display_title;
    document.getElementById("title_b").textContent = title;


    // Search for trailers using title variable and load playlist
    // Adapted from: http://salman-w.blogspot.co.uk/2012/07/youtube-iframe-embeds-video-playlist-and-html5.html
    var youtubeUrl = "http://www.youtube.com/embed?listType=search&list=" + title + "trailer";
    var player = document.getElementById("playerB");
    player.src = youtubeUrl;

    // Create new API request to make another call
    var xhr = new XMLHttpRequest();
    var url = "http://www.omdbapi.com/?" + "t=" + title;
    console.log(url);

    // Process response using a different function
    xhr.addEventListener("load", processSecondC2Response);
    xhr.open("GET", url);
    xhr.send();
};

var processSecondC2Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);
    
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var year = response.Year;
    document.getElementById("year_b").textContent = year;
    
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var actors = response.Actors;
    document.getElementById("actors_b").textContent = actors;

    // Get summary of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var summary = response.Plot;
    document.getElementById("summary_b").textContent = summary;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var director = response.Director;
    document.getElementById("director_b").textContent = director;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rating = response.imdbRating;
    document.getElementById("rating_b").textContent = "IMDb Rating: " + rating;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var genre = response.Genre;
    document.getElementById("genre_b").textContent = genre;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var awards = response.Awards;
    document.getElementById("awards_b").textContent = awards;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rated = response.Rated;
    document.getElementById("rated_b").textContent = rated;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var released = response.Released;
    document.getElementById("released_b").textContent = released;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var runtime = response.Runtime;
    document.getElementById("runtime_b").textContent = runtime;
};

// ==================== C3 ====================
var c3 = function () {

    // Content appears if a button is clicked and the content is hidden
    // If button is clicked and the content is not hidden, function hides content
    // Adapted from: http://stackoverflow.com/questions/15229732/show-a-div-onclick-and-hide-the-image-that-triggered-it
    var content = document.getElementById("slideoutB");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";

        // Create new request
        var xhr = new XMLHttpRequest();

        // Create url with API key to search for top critics picks
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=338f768e00414fd2bf5c8433326eb88c" + "&critics-pick=Y";
        console.log(url);

        // Process response using a different function
        xhr.addEventListener("load", processC3Response);
        xhr.open("GET", url);
        xhr.send();

    }
};
var processC3Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);

    // Get title of movie and insert into HTML element
    var title = response.results[5].display_title;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    document.getElementById("title_b").textContent = title;

    // Search for trailers using title variable and load playlist
    // Adapted from: http://salman-w.blogspot.co.uk/2012/07/youtube-iframe-embeds-video-playlist-and-html5.html
    var youtubeUrl = "http://www.youtube.com/embed?listType=search&list=" + title + "trailer";
    var player = document.getElementById("playerB");
    player.src = youtubeUrl;

    // Create new API request to make another call
    var xhr = new XMLHttpRequest();
    var url = "http://www.omdbapi.com/?" + "t=" + title;
    console.log(url);

    // Process response using a different function
    xhr.addEventListener("load", processSecondC3Response);
    xhr.open("GET", url);
    xhr.send();
};

var processSecondC3Response = function () {

    // Parse response function adapted from:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    var response = JSON.parse(this.response);
    console.log(response);
    
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var year = response.Year;
    document.getElementById("year_b").textContent = year;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var actors = response.Actors;
    document.getElementById("actors_b").textContent = actors;

    // Get summary of movie and insert into HTML element
    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var summary = response.Plot;
    document.getElementById("summary_b").textContent = summary;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var director = response.Director;
    document.getElementById("director_b").textContent = director;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rating = response.imdbRating;
    document.getElementById("rating_b").textContent = "IMDb Rating: " + rating;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var genre = response.Genre;
    document.getElementById("genre_b").textContent = genre;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var awards = response.Awards;
    document.getElementById("awards_b").textContent = awards;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var rated = response.Rated;
    document.getElementById("rated_b").textContent = rated;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var released = response.Released;
    document.getElementById("released_b").textContent = released;

    // textContent adapted from: https://developer.mozilla.org/en/docs/Web/API/Node/textContent
    var runtime = response.Runtime;
    document.getElementById("runtime_b").textContent = runtime;
};