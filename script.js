let textArray = [];

function arrayToList(mrArray, divPart) {
    let ul = document.createElement('ul');
    document.getElementById(divPart).appendChild(ul);
    for(i = 0; i < mrArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = mrArray[i];
    }
}


function inputWords() {
    document.getElementById("main").style.backgroundImage = 
    "linear-gradient(to right, white, red)";
    for(i = 0; i < 3; i++) {
        let text;
        let input = prompt("Please enter one word at a time:");
        textArray.push(input);
    } 
    arrayToList(textArray, "part1");
    document.getElementById("MrButton").style.visibility = "hidden";
    document.getElementById("part2").style.visibility = "visible";
}

function swapWords() {
    document.getElementById("main").style.backgroundImage = 
    "linear-gradient(to right, white, blue)";
    let textArray2 = textArray.map(function(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + 
        oneWord.substring(1, oneWord.length -1) + 
        oneWord.charAt(0); 
    });
    arrayToList(textArray2, "part2");
    document.getElementById("part1").style.visibility = "hidden";
    document.getElementById("MrOtherButton").style.visibility = "hidden";
}

