
$(function () {






    // $("#gemBlack").click(adder());


    // *****************************************

    //Establish Variables
    // var matchNum = randNum;
    var wins = 0;
    var losses = 0;
    var gemArray = []
    var totalScore = "";
    var blackAmount = "";
    var blueAmount = "";
    var whiteAmount = "";
    var yellowAmount = "";

    // -----ON PAGE LOAD [function reset()]------

    function reset() {
        gemArray = []
        totalScore = 0;

        blackAmount = 0;
        blueAmount = 0;
        whiteAmount = 0;
        yellowAmount = 0;


        $("#wins").html(wins);
        $("#losses").html(losses);



        // 1) pick Random Number to Match
        randNum = Math.floor(Math.random() * 120) + 1;
        $("#matchNum").html(randNum);

        // 2) pick Random Amounts for: gemArray
        function pickBlack() {
            blackAmount = Math.floor((Math.random() * 12) + 1);
            gemArray.push(blackAmount);
            console.log(blackAmount);
            console.log(gemArray);
        };
        pickBlack();

        function pickBlue() {
            blueAmount = Math.floor((Math.random() * 12) + 1);
            gemArray.push(blueAmount);
            console.log(blueAmount);
            console.log(gemArray);
        };
        pickBlue();
        function pickWhite() {
            whiteAmount = Math.floor((Math.random() * 12) + 1);
            gemArray.push(whiteAmount);
            console.log(whiteAmount);
            console.log(gemArray);
        };
        pickWhite();
        function pickYellow() {
            yellowAmount = Math.floor((Math.random() * 12) + 1);
            gemArray.push(yellowAmount);
            console.log(yellowAmount);
            console.log(gemArray);
        };
        pickYellow();
    };

    reset();
    // -----RESET COMPLETE------


    function playGame() {


        // 3)   BUTTON CLICKS (ADD TO TOTAL SCORE)

        //      #gemBlack       
        $("#gemBlack").click(function () {
            gemArray[0]
            var blackScore = gemArray[0];
            console.log(blackScore);
            totalScore = (totalScore + blackScore);
            $("#totalScore").html(totalScore);
        });
        //      #gemBlue
        $("#gemBlue").click(function () {
            gemArray[1]
            var blueScore = gemArray[1];
            console.log(blueScore);
            totalScore = (totalScore + blueScore);
            $("#totalScore").html(totalScore);
        });
        //      #gemWhite
        $("#gemWhite").click(function () {
            gemArray[2]
            var whiteScore = gemArray[2];
            console.log(whiteScore);
            totalScore = (totalScore + whiteScore);
            $("#totalScore").html(totalScore);
        });
        //      #gemYellow
        $("#gemYellow").click(function () {
            gemArray[3]
            var yellowScore = gemArray[3];
            console.log(yellowScore);
            totalScore = (totalScore + yellowScore);
            $("#totalScore").html(totalScore);
        });

        // 4)   Count Wins/Losses & reset game
        function checkWin() {
            if (totalScore === randNum) {
                wins++;
                reset();
            } else if (totalScore > randNum) {
                losses++;
                reset();
            };
        };
        checkWin();
    };
    playGame();

});

//-------END OF PLAY GAME-----