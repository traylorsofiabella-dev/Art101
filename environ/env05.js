//title button
let environmentTitle = "Unicorns Are Real";

//elememts button
let environmentElements = ["unicorns", "rainbow", "good fortune"];

//Stats button
let mainEntity = {
    name: "Unicorn",
    type: "magical, well intentioned",
    mood: "stable and content in every environment",
    isMoving: true,
    favoriteElement: environmentElements[1]
};
//click button
let clickCount = 0;




$("#title-button").click(function () {

    $("#environment-output").html(
        "<h2>" + environmentTitle + "</h2>"
    );

});


//function for elements button
$("#elements-button").click(function () {

    $("#environment-output").html(
        "<p>This environment contains: "
        + environmentElements.join(", ") + ".</p>"
    );

});


//function for stats button
$("#entity-button").click(function () {

    $("#environment-output").html(
        "<p>Name: " + mainEntity.name + "</p>" +
        "<p>Type: " + mainEntity.type + "</p>" +
        "<p>Mood: " + mainEntity.mood + "</p>" +
        "<p>Favorite element: " + mainEntity.favoriteElement + "</p>"
    );

});

//function for click button
$("#click-button").click(function () {

    clickCount++;

    $("#environment-output").html(
        "<p>You have added magic " + clickCount + " time(s).</p>"
    );

});

//function for scene button
function askScene() {
    let userScene = prompt("dark, high, open, or lush?");

    if (userScene == "dark") {
        $("body").css("background-image", "url('dark.jpeg')");
    }
    if (userScene == "high") {
        $("body").css("background-image", "url('clouds.jpg')");
    }
    if (userScene == "open") {
        $("body").css("background-image", "url('grass background.webp')");
    }
    if (userScene == "lush") {
        $("body").css("background-image", "url('forest.jpg')");
    }
}

$("#env-button").click(function () {
    askScene();
});

//functions for unicorn friend
// toggle transformation on click
let following = false;
$("#unicorn-friend").click(function () {
    $(this).toggleClass("transformed");
    $("#status").text("The unicorn shifted its shape to see your better.");
});

// show thought on hover
$("#unicorn-friend").hover(
    function () {
        $("#speech-bubble").stop(true, true).slideDown(300);
        $("#status").text("The unicorn is observing your energy.");
    },
    function () {
        $("#speech-bubble").stop(true, true).slideUp(300);
        $("#status").text("The unicorn is now only concerned with its own.");
    }
);

// toggle following on spacebar press
$(document).keydown(function (event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();
        following = !following;
        $("#unicorn-friend").toggleClass("following");
        if (following === true) {
            $("#status").text("The unicorn is following you.");
        } else {
            $("#status").text("The unicorn stopped following you.");
        }
    }
});

// move unicorn with cursor if following is true
$(document).mousemove(function (event) {

    if (following === true) {

        $("#unicorn-friend").css({
            left: event.pageX + 20,
            top: event.pageY + 20
        });

    }

});