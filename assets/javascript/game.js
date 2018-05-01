


//  Global variables
var targetNumber;
var currentScore = 0;
var wins = 0;
var losses = 0;


var charArray = ['assets/images/Mortybebb.png', 'assets/images/rick.png', 'assets/images/jerry.png', 'assets/images/poopy.png'];

function gameReset(max, min) {
    targetNumber = Math.floor(Math.random() * (max - min + 1)+min);
    $("#targetNumber").html(targetNumber);
    console.log(targetNumber);
    currentScore = 0;
    $("#currentScore").html(currentScore);  
}

gameReset(120, 19);

var valueGenerator = Math.floor(Math.random() * 12)+1;

for (var i = 0; i < charArray.length; i++) {
    var charImg = $("<img>");
    charImg.addClass("images");
    charImg.attr("src", charArray[i]);
    charImg.attr('data-charValue', Math.floor(Math.random()*12)+2);
    $('#charRow').append(charImg);
}

$(".images").on('click', function(){

    var charValue = ($(this).attr("data-charValue"));
    charValue = parseInt(charValue);
    currentScore += charValue;
    $("#currentScore").html(currentScore);

    if (currentScore === targetNumber) {
        $("#feedbackImage").html("<img src='assets/images/winner.gif'/>");
        wins++;
        $("#wins").html(wins);
        $("#feedbackText").html("Good job, Morty. I guess you're not completely useless.")
        gameReset(120, 19);
    } else if (currentScore >= targetNumber) {
        $("#feedbackImage").html("<img src='assets/images/loser.gif'/>");
        losses++;
        $("#losses").html(losses);
        $("#feedbackText").html("You lost. I guess intelligence doesn't run in the family.")
        gameReset(120, 19);
    }



})