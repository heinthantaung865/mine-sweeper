var mine1;
var mine2;
var mine1P1;
var mine1P2;
var mine1P3;
var mine1P4;
var mine1P5;
var mine1P6;
var mine1P7;
var mine1P8;
var mine2P1;
var mine2P2;
var mine2P3;
var mine2P4;
var mine2P5;
var mine2P6;
var mine2P7;
var mine2P8;

var neighBor1;
var neighBor2;
var neighBor3;
var neighBor4;
var neighBor5;
var neighBor6;
var neighBor7;
var neighBor8;
var gameFinished = false;
function mineBuild() {
    var row1 = Math.floor(Math.random() * 6 + 1);
    var col1 = Math.floor(Math.random() * 6 + 1);
    mine1 = row1 + "" + col1;
    mine1P1 = (row1 - 1) + "" + (col1 - 1);
    mine1P2 = (row1 - 1) + "" + col1;
    mine1P3 = (row1 - 1) + "" + (col1 + 1);
    mine1P4 = row1 + "" + (col1 - 1);
    mine1P5 = row1 + "" + (col1 + 1);
    mine1P6 = (row1 + 1) + "" + (col1 - 1);
    mine1P7 = (row1 + 1) + "" + col1;
    mine1P8 = (row1 + 1) + "" + (col1 + 1);

    var row2 = Math.floor(Math.random() * 6 + 1);
    var col2 = Math.floor(Math.random() * 6 + 1);
    mine2 = row2 + "" + col2;
    while(mine1 == mine2){
        var row2 = Math.floor(Math.random() * 6 + 1);
        var col2 = Math.floor(Math.random() * 6 + 1);
        mine2 = row2 + "" + col2;
    }
    mine2P1 = (row2 - 1) + "" + (col2 - 1);
    mine2P2 = (row2 - 1) + "" + col2;
    mine2P3 = (row2 - 1) + "" + (col2 + 1);
    mine2P4 = row2 + "" + (col2 - 1);
    mine2P5 = row2 + "" + (col2 + 1);
    mine2P6 = (row2 + 1) + "" + (col2 - 1);
    mine2P7 = (row2 + 1) + "" + col2;
    mine2P8 = (row2 + 1) + "" + (col2 + 1);
    console.log(mine1);
    console.log(mine2);
    findNeighborPositions();
}
function pressBtn(cell) {
    
    if (gameFinished == false) {
        var userClick = Number(cell.id);
        if (userClick == mine1 || userClick == mine2) {
            gameOverDisplay();
            document.getElementById(mine1 + "").style.backgroundColor = "red";
            document.getElementById(mine1 + "").innerHTML = "Boom";
            document.getElementById(mine2 + "").style.backgroundColor = "red";
            document.getElementById(mine2 + "").innerHTML = "Boom";
            document.getElementById("gameoverSound").play();

        }  else if (userClick == neighBor1 ||
            userClick == neighBor2 ||
            userClick == neighBor3 ||
            userClick == neighBor4 ||
            userClick == neighBor5 ||
            userClick == neighBor6 ||
            userClick == neighBor7 ||
            userClick == neighBor8 ) {
            cell.style.backgroundColor = "red";           
            cell.innerHTML = "2";
            document.getElementById("clickSound").play();
            
        } else if (userClick == mine1P1 ||
            userClick == mine1P2 ||
            userClick == mine1P3 ||
            userClick == mine1P4 ||
            userClick == mine1P5 ||
            userClick == mine1P6 ||
            userClick == mine1P7 ||
            userClick == mine1P8 ||
            userClick == mine2P1 ||
            userClick == mine2P2 ||
            userClick == mine2P3 ||
            userClick == mine2P4 ||
            userClick == mine2P5 ||
            userClick == mine2P6 ||
            userClick == mine2P7 ||
            userClick == mine2P8) {
            cell.style.backgroundColor = "red";           
            cell.innerHTML = "1";
            document.getElementById("clickSound").play();

        } else {
            cell.style.backgroundColor = "aqua"
            document.getElementById("clickSound").play();

        }
    }   
    document.getElementById(cell.id).setAttribute("class","cellChecked");
    checkWin();
    
}
function gameOverDisplay() {
    gameFinished = true;
    for (let index = 0; index < 36; index++) {
        document.getElementsByTagName("td")[index].innerHTML = "";
        document.getElementsByTagName("td")[index].style.backgroundColor = "red";
    }
    document.getElementById("32").innerText = "G";
    document.getElementById("33").innerText = "A";
    document.getElementById("34").innerText = "M";
    document.getElementById("35").innerText = "E";
    document.getElementById("42").innerText = "O";
    document.getElementById("43").innerText = "V";
    document.getElementById("44").innerText = "E";
    document.getElementById("45").innerText = "R";
}
function findNeighborPositions(){
    if(mine1P1 == mine2P1 ||
        mine1P1 == mine2P2||
        mine1P1 == mine2P3 ||
        mine1P1 == mine2P4 ||
        mine1P1 == mine2P5 ||
        mine1P1 == mine2P6 ||
        mine1P1 == mine2P7 ||
        mine1P1 == mine2P8){
            neighBor1 = mine1P1;
    }
    if(mine1P2 == mine2P1 ||
        mine1P2 == mine2P2||
        mine1P2 == mine2P3 ||
        mine1P2 == mine2P4 ||
        mine1P2 == mine2P5 ||
        mine1P2 == mine2P6 ||
        mine1P2 == mine2P7 ||
        mine1P2 == mine2P8){
            neighBor2 = mine1P2;
    }
    if(mine1P3 == mine2P1 ||
        mine1P3 == mine2P2||
        mine1P3 == mine2P3 ||
        mine1P3 == mine2P4 ||
        mine1P3 == mine2P5 ||
        mine1P3 == mine2P6 ||
        mine1P3 == mine2P7 ||
        mine1P3 == mine2P8){
            neighBor3 = mine1P3;
    }
    if(mine1P4 == mine2P1 ||
        mine1P4 == mine2P2||
        mine1P4 == mine2P3 ||
        mine1P4 == mine2P4 ||
        mine1P4 == mine2P5 ||
        mine1P4 == mine2P6 ||
        mine1P4 == mine2P7 ||
        mine1P4 == mine2P8){
            neighBor4 = mine1P4;
    }
    if(mine1P5 == mine2P1 ||
        mine1P5 == mine2P2||
        mine1P5 == mine2P3 ||
        mine1P5 == mine2P4 ||
        mine1P5 == mine2P5 ||
        mine1P5 == mine2P6 ||
        mine1P5 == mine2P7 ||
        mine1P5 == mine2P8){
            neighBor5 = mine1P5;
    }
    if(mine1P6 == mine2P1 ||
        mine1P6 == mine2P2||
        mine1P6 == mine2P3 ||
        mine1P6 == mine2P4 ||
        mine1P6 == mine2P5 ||
        mine1P6 == mine2P6 ||
        mine1P6 == mine2P7 ||
        mine1P6 == mine2P8){
            neighBor6 = mine1P6;
    }
    if(mine1P7 == mine2P1 ||
        mine1P7 == mine2P2||
        mine1P7 == mine2P3 ||
        mine1P7 == mine2P4 ||
        mine1P7 == mine2P5 ||
        mine1P7 == mine2P6 ||
        mine1P7 == mine2P7 ||
        mine1P7 == mine2P8){
            neighBor7 = mine1P7;
    }
    if(mine1P8 == mine2P1 ||
        mine1P8 == mine2P2||
        mine1P8 == mine2P3 ||
        mine1P8 == mine2P4 ||
        mine1P8 == mine2P5 ||
        mine1P8 == mine2P6 ||
        mine1P8 == mine2P7 ||
        mine1P8 == mine2P8){
            neighBor8 = mine1P8;
    }
}
function checkWin(){
    var checkedCnt = 0;
    var index = 0;
    for(let i = 0; i < 36; i++){   
        if(document.getElementsByTagName("td")[i].className !== "cell"){
            checkedCnt++;
        }        
    }
    if(checkedCnt == 34){
        displayWin();
    }
}
function displayWin(){
    for(let i = 0; i < 36; i++){
        document.getElementsByTagName("td")[i].innerHTML = "";
        document.getElementsByTagName("td")[i].style.backgroundColor = "aqua";
        document.getElementById("32").innerText = "G";
        document.getElementById("33").innerText = "A";
        document.getElementById("34").innerText = "M";
        document.getElementById("35").innerText = "E";
        document.getElementById("42").innerText = "W";
        document.getElementById("43").innerText = "I";
        document.getElementById("44").innerText = "N";
        document.getElementById("45").innerText = "!";
    }
}