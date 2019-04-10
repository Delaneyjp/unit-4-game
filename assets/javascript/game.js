/*
JUSTIN DELANEY
HOMEWORK ASSIGNMENT
UCLA CODING BOOTCAMP
04/09/2019
*/

$(document).ready(function () {

    //Establish Variables
    // var matchNum = randNum;
    var wins = 0;
    var losses = 0;
    var gemArray = []
    var totalScore = 0;
    var blackAmount = "";
    var blueAmount = "";
    var whiteAmount = "";
    var yellowAmount = "";
    var hasFinished = false;

    // -----ON PAGE LOAD [function reset()]------

    function reset() {
        gemArray = []
        totalScore = 0;
        hasFinished = false;

        blackAmount = 0;
        blueAmount = 0;
        whiteAmount = 0;
        yellowAmount = 0;

        $("#totalScore").html(totalScore);

        $("#wins").html(wins);
        $("#losses").html(losses);



        // 1) pick Random Number to Match
        randNum = Math.floor(Math.random() * 120) + 1;
        $("#matchNum").html(randNum);

        // 2) pick Random Amounts for: gemArray
        function pickBlack() {
            blackAmount = Math.floor((Math.random() * 12) + 1);
            gemArray.push(blackAmount);
            // console.log(blackAmount);
            // console.log(gemArray);
        };
        pickBlack();

        function pickBlue() {
            blueAmount = Math.floor((Math.random() * 12) + 1);
            gemArray.push(blueAmount);
            // console.log(blueAmount);
            // console.log(gemArray);
        };
        pickBlue();
        function pickWhite() {
            whiteAmount = Math.floor((Math.random() * 12) + 1);
            gemArray.push(whiteAmount);
            // console.log(whiteAmount);
            // console.log(gemArray);
        };
        pickWhite();
        function pickYellow() {
            yellowAmount = Math.floor((Math.random() * 12) + 1);
            gemArray.push(yellowAmount);
            // console.log(yellowAmount);
            // console.log(gemArray);
        };
        pickYellow();
    };

    reset();
    // -----RESET COMPLETE------


    function playGame() {
        wins = "";
        losses = "";

        // 3)   BUTTON CLICKS (ADD TO TOTAL SCORE)

        //      #gemBlack       
        $("#gemBlack").click(function () {
            gemArray[0]
            var blackScore = gemArray[0];
            // console.log(blackScore);
            totalScore = (totalScore + blackScore);
            $("#totalScore").html(totalScore);
            // console.log("total score is " + totalScore);
            checkWin();
        });
        //      #gemBlue
        $("#gemBlue").click(function () {
            gemArray[1]
            var blueScore = gemArray[1];
            // console.log(blueScore);
            totalScore = (totalScore + blueScore);
            $("#totalScore").html(totalScore);
            // console.log("total score is " + totalScore);
            checkWin();
        });
        //      #gemWhite
        $("#gemWhite").click(function () {
            gemArray[2]
            var whiteScore = gemArray[2];
            // console.log(whiteScore);
            totalScore = (totalScore + whiteScore);
            $("#totalScore").html(totalScore);
            // console.log("total score is " + totalScore);
            checkWin();
        });
        //      #gemYellow
        $("#gemYellow").click(function () {
            gemArray[3]
            var yellowScore = gemArray[3];
            // console.log(yellowScore);
            totalScore = (totalScore + yellowScore);
            $("#totalScore").html(totalScore);
            // console.log("total score is " + totalScore);
            checkWin();
        });

        // 4)   Count Wins/Losses & reset game
        function checkWin() {
            console.log("random number is " + randNum);
            if (totalScore === randNum) {
                $("#totalScore").html(totalScore);
                wins++;
                // console.log(wins);
                // hasFinished = true;
                $("#wins").html(wins);
                // console.log('YOU WIN!');
                alert('YOU WIN!');
                reset();
            }

            if (totalScore > randNum) {
                $("#totalScore").html(totalScore);
                losses++;
                // console.log(losses);
                // hasFinished = true;
                $("#losses").html(losses);
                // console.log('YOU LOSE!');
                alert('YOU LOSE!');
                reset();
            }
        };
    };
    playGame();

});

//------END OF PLAY GAME----