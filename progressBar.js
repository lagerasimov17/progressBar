var blockNumber = 0;
var blockNumberString = blockNumber.toString();

function updateBlockUp() {
    blockNumber = blockNumber + 1;
    blockNumberString = blockNumber.toString();
}

function updateBlockDown() {
    blockNumber = blockNumber - 1;
    blockNumberString = blockNumber.toString();
}

function addNextClass() {
    console.log(blockNumber);
    document.getElementById(blockNumberString).className += " " + "answered";
}

function removeCurrentClass() {
    document.getElementById(blockNumberString).className = document.getElementById(blockNumberString).className.replace 
    ( /(?:^|\s)answered(?!\S)/g , '' );
<<<<<<< HEAD
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
=======
}

function incrementUp() {
    if (blockNumber != 9) {
        removeCurrentClass();
        updateBlockUp();
        addNextClass();
    }
}

function incrementDown() {
    if (blockNumber != 0) {
        removeCurrentClass();
        updateBlockDown();
        addNextClass();
    }
}


>>>>>>> origin/master
