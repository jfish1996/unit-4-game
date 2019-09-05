$(document).ready(function () {

    //assigning my gems from the DOM

    var gemOne = $("#gem1");
    console.log(gemOne)
    var gemTwo = $("#gem2");

    var gemThree = $("#gem3");

    var gemFour = $("#gem4");

    var firstGenNum = $("#randomNum");

    //setting a var eqaual to current value integer
    var currentVal = 0;
    //setting a variable to capture current value text on the  DOM
    var CurrentValText = $("#CurrentTotal")
    //linking up the two above variables so they communicate;
    CurrentValText.text(currentVal);

    //assigning my first  number to hit

    var randomNumber = Math.floor(Math.random() * 120) + 1;

    console.log("Num to Hit: " + randomNumber)

    var WinsInt = 0;
    var WinsEL = $("#wins")
    WinsEL.text(WinsInt)

    var LossesInt = 0;
    var LossesEL = $("#losses");
    LossesEL.text(LossesInt);




    //assigning text to dom 
    firstGenNum.text(randomNumber);

    //assigning values to each one of the gems on page load up
    gemOneVal = Math.floor(Math.random() * 20) + 1;
    console.log("gem 1: " + gemOneVal)

    gemTwoVal = Math.floor(Math.random() * 40) + 1;

    console.log("gem 2: " + gemTwoVal)

    gemThreeVal = Math.floor(Math.random() * 30) + 1;

    console.log("gem 3: " + gemThreeVal)

    gemFourVal = Math.floor(Math.random() * 10) + 1;

    console.log("gem 4: " + gemFourVal)
    //------------------------------------------------------

//function to run if game has been won or lost-----------
    function restGame(){

    currentVal = 0;

    CurrentValText.text(currentVal)

    gemOneVal = Math.floor(Math.random() * 20) + 1;
    console.log("gem 1: " + gemOneVal)

    gemTwoVal = Math.floor(Math.random() * 40) + 1;

    console.log("gem 2: " + gemTwoVal)

    gemThreeVal = Math.floor(Math.random() * 30) + 1;

    console.log("gem 3: " + gemThreeVal)

    gemFourVal = Math.floor(Math.random() * 10) + 1;

    console.log("gem 4: " + gemFourVal)

        //number to hit
        randomNumber = 0;
        randomNumber = Math.floor(Math.random() * 120) + 1

        //number to hit on the DOM
    firstGenNum.text(randomNumber);

    console.log("Num to Hit: " + randomNumber)

    console.log("current Val: " + currentVal);
    };
    //-----------------------------------------

    //on click events---------------------------

    gemOne.on("click", function () {
        currentVal += gemOneVal;
        console.log(currentVal)
        CurrentValText.text(currentVal);
        checkWin()
        

    })

    gemTwo.on("click", function () {
        currentVal += gemTwoVal;
        console.log(currentVal)
        CurrentValText.text(currentVal);
        checkWin()
        

    })

    gemThree.on("click", function () {
        currentVal += gemThreeVal;
        console.log(currentVal)
        CurrentValText.text(currentVal);
        checkWin()
        

    })

    gemFour.on("click", function () {
        currentVal += gemFourVal;
        console.log(currentVal)
        CurrentValText.text(currentVal);
        checkWin()
        

    })
//------------------------------------------

//function to check if users has won or lost
    function checkWin(){

    if(currentVal === randomNumber){
        console.log("yay!!!!!")
        alert("You got it!")
        WinsInt++
        WinsEL.text(WinsInt)
        restGame();

    } else if(currentVal > randomNumber){
        console.log("aw MAAAAAAAAAAAAAN")
        alert("Better luck next time!")
        LossesInt++
        LossesEL.text(LossesInt);
        restGame();
    };

        

}

//-------------------------------------

});