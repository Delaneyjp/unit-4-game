$(document).ready(function () {

    var matchNum = randNum;
    var totalScore = " ";
    var wins = 0;
    var losses = 0;


    function playGame() {

        function pickNum() {
            randNum = Math.floor(Math.random() * 120) + 1;
            $("#matchNum").html(randNum);
        };

        if (totalScore === matchNum) {
            wins++
        } else if (totalScore > matchNum) {
            losses++
        };











    }
});

/* playGame();  */