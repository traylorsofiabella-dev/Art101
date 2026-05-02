let environmentTitle = "Unicorn Hills";

let environmentElements = ["unicorns", "rainbow", "grassy hills", "blue sky"];

let mainEntity = {
    name: "Fia",
    type: "unicorn",
    mood: "content",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

let clickCount = 0;

$("#title-button").click(function() {
    $("#environment-output").html("<h2>" + environmentTitle + "</h2>");
});

$("#elements-button").click(function() {
    $("#environment-output").html(
        "<p>This environment contains: " + environmentElements.join(", ") + ".</p>"
    );
});

$("#entity-button").click(function() {
    $("#environment-output").html(
        "<p>Name: " + mainEntity.name + "</p>" +
        "<p>Type: " + mainEntity.type + "</p>" +
        "<p>Mood: " + mainEntity.mood + "</p>" +
        "<p>Favorite element: " + mainEntity.favoriteElement + "</p>"
    );
});

$("#click-button").click(function() {
    clickCount++;
    $("#environment-output").html(
        "<p>You have added magic " + clickCount + " time(s).</p>"
    );
});