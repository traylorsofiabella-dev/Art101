
let environmentTitle = "Unicorns Are Real";

let environmentElements = ["unicorns", "rainbow", "good fortune"];

let mainEntity = {
    name: "Unicorn",
    type: "magical, well intentioned",
    mood: "stable and content in every environment",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

let clickCount = 0;

let sceneType = 1;



$("#title-button").click(function () {

    $("#environment-output").html(
        "<h2>" + environmentTitle + "</h2>"
    );

});



$("#elements-button").click(function () {

    $("#environment-output").html(
        "<p>This environment contains: "
        + environmentElements.join(", ") + ".</p>"
    );

});



$("#entity-button").click(function () {

    $("#environment-output").html(
        "<p>Name: " + mainEntity.name + "</p>" +
        "<p>Type: " + mainEntity.type + "</p>" +
        "<p>Mood: " + mainEntity.mood + "</p>" +
        "<p>Favorite element: " + mainEntity.favoriteElement + "</p>"
    );

});



$("#click-button").click(function () {

    clickCount++;

    $("#environment-output").html(
        "<p>You have added magic " + clickCount + " time(s).</p>"
    );

});

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

let following = false;
$("#unicorn-friend").click(function () {
    $(this).toggleClass("transformed");
    $("#status").text("The unicorn changed shape.");
});

$("#unicorn-friend").hover(
    function () {
        $("#speech-bubble").stop(true, true).slideDown(300);
        $("#status").text("The unicorn revealed a thought.");
    },
    function () {
        $("#speech-bubble").stop(true, true).slideUp(300);
        $("#status").text("The thought disappeared.");
    }
);

$(document).keydown(function (event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();
        following = !following;
        $("#unicorn-friend").toggleClass("following");
        if (following === true) {
            $("#status").text("The unicorn is following your cursor.");
        } else {
            $("#status").text("The unicorn stopped following you.");
        }
    }
});

$(document).mousemove(function (event) {

    if (following === true) {

        $("#unicorn-friend").css({
            left: event.pageX + 20,
            top: event.pageY + 20
        });

    }

});