var clientID = "36aa5c6b3029e11d9b4daeea8da6276e";
var userInput = "";

$(document).ready(function() {
    $("#search-btn").click(function() {
        userInput = $("#search-query").val();

        searchFlickr(clientID, userInput, 10, function(photos) {
            console.log(photos.photo[0].title);
            for (var i=0; i<photos.photo.length; i++){
                photos.photo[i].url_s;
                $("#search-results").append('<img src=' + photos.photo[i].url_s +'>' );
            }
        });
    });
    $("#reset-btn").click(function(){
                $("#search-results").empty();
    });
});