

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