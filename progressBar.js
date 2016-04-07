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


