var blockNumber = 0;
var blockNumberString = blockNumber.toString();

function addClass() {
    document.getElementById(blockNumberString).className += "answered";
    blockNumber = blockNumber + 1;
}

function takeClass() {
    "use strict";
    document.getElementById(blockNumberString).className = document.getElementById(blockNumberString).className.replace 
    ( /(?:^|\s)answered(?!\S)/g , '' );
    blockNumber = blockNumber - 1;
}



=======
/* if the class is "on", then color the block green
when the next button is pressed, color the next block green 
*/

function turnOn(){
    document.getElementById('progress').
}


var questionState = $scope.Questions[]