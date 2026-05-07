let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];
let colorCount;


$("#needy-button").click(function () {

    count = count + 1;

    colorCount = count - 1;

    $("#needy-button").html("Click: " + count + " Color: " + colors[colorCount]);

    $("#needy-button").css("background-color", colors[colorCount]);

    $("html").css("background-color", colors[colorCount + 1]);

  if (count==4) { count=0; }

    // things to try out:
    // make the page background color two colors ahead of the button color
    // make the page background color one color beyond of the button color

});