
// Picture Array

var tableau = [
    "cartman-hitler", "Eric-Cartman-ConvertImage", "garrison-ConvertImage", "images", "images", "Eric-Cartman-ConvertImage",
    "cartman-hitler", "images-ConvertImage", "images-ConvertImage", "Inspector_butters", "Inspector_butters",
    "kenny", "kenny", "stan", "stan", "timmy-ConvertImage", "timmy-ConvertImage",
    "garrison-ConvertImage"


];
var temp;
var div;
var imag;

//double-sided card

function affiche() { // Display function

    for (var i = 0; i < tableau.length; i++) {
        div = document.createElement("div");
        imag = document.createElement("img");
        imag.src = tableau[i] + ".png";
        imag.id = 'image' + i;


        div.id = "div" + i;

        // Set width , height etc...

        imag.style.width = 17.8 + "vh";
        imag.style.height = 20.3 + "vh";
        imag.style.marginTop = 2.5 + "vh";
        div.style.border = "solid black 0.25vh";
        div.style.width = 19 + "vh";
        div.style.height = 27.4 + "vh";
        div.style.marginTop = 2.5 + "vh";
        div.style.marginLeft = 6.9 + "vh";
        imag.style.visibility = "hidden";
        div.style.display = "inline-block";
        document.getElementById("random").appendChild(div); // Push pictures
        div.appendChild(imag);

        imag.className = "mac";


    }

}

// timer

var start = 0;
var time = 0;
var difference = 0;
var fin = 0;

function score() {
    fin = new Date();

    difference = fin - start;

    difference = new Date(difference);

    var msec = difference.getMilliseconds();

    var sec = difference.getSeconds();

    var min = difference.getMinutes();

    if (min < 10) {

        min = "0" + min

    }

    if (sec < 10) {

        sec = "0" + sec

    }

    if (msec < 10) {

        msec = "00" + msec

    } else if (msec < 100) {

        msec = "0" + msec

    }

    document.getElementById("start").innerHTML = min + ":" + sec + ":" + msec;
    document.getElementById("start").style.fontSize = 2.5 + "vh";

    time = setTimeout("score()", 10);


}

function newscore() { // Start Timer function
    start = new Date();
    score();


}

//victory screen

var modal = document.getElementById('simpleModal'); // Victory screen ID
var closeBtn = document.getElementsByClassName('closeBtn')[0];
closeBtn.addEventListener('click', closeModal);

function openModal() {

    modal.style.display = 'block'; // Display victory screen

}

function closeModal() {

    modal.style.display = 'none'; // Hide victory screen

}

//Shuffling cards

function dede() {
    for (var i = tableau.length - 1; i >= 1; i--) {
        var rand = Math.floor(Math.random() * (i + 1));

        temp = tableau[i];
        tableau[i] = tableau[rand];
        tableau[rand] = temp;

    }

}
dede();
affiche();
var but=0;

var boutton=document.getElementById("bt");
boutton.addEventListener("click",function(){
but++;
    newscore();
    }
);





console.log();

//delete image

function efface(param, param2,) {  // Hide pictures
    param.style.visibility = "hidden";
    param2.style.visibility = "hidden";

}

function effaceD(para1, para2) {  // Not use
    para1.style.visibility = "hidden";
    para2.style.visibility = "hidden";
}


// Tries number variable & pictures compare

var img2 = document.getElementsByClassName('mac');
var nombreEssaie = 0;
var nombrePaire = 0;
var t = 0;
var choix = [];
var pourdiv = [];

function reset() { // Reset function
    location.reload();
}

document.getElementById("simpleModal").onclick = function () { // Closing victory screen
    reset();

};


//Flip card function with all conditions

for (let j = 0; j < tableau.length; j++) {

    document.getElementById("div" + j).addEventListener("click", function (e) {
        console.log("j=" + j);
if(but==0){
    alert("veuillez clicker sur start");
}

        console.log(pourdiv);


        if (t < 2 && but>0) {



            //ici

            document.getElementById("div"+j).style.visibility="hidden";
            if (document.getElementById("image" + j).style.visibility == "hidden") {
                pourdiv.push(document.getElementById("div" + j));
                t++;


                    document.getElementById("image" + j).style.visibility = "visible";
                    choix.push(e.target.firstChild);

                console.log(t);
                console.log(choix);
            }


        }

        if (t === 2) {
            nombreEssaie++; // Try number + 1

            if (choix[0].src !== choix[1].src) {


                setTimeout(function () {
                    pourdiv[0].style.visibility = 'visible';
                    pourdiv[1].style.visibility = 'visible';
                    pourdiv = [];
                    console.log(pourdiv);

                    efface(choix[0], choix[1]);

                    t = 0;
                    choix = [];
                }, 500);


            } else {
                nombrePaire++; // Pair find + 1
                console.log("nb paires =" + nombrePaire);
                pourdiv[0].style.visibility = 'hidden';
                pourdiv[1].style.visibility = 'hidden';

                pourdiv.splice(0, 2);
                choix.splice(0, 2);
                t = 0;
                console.log(pourdiv);
            }


            if (nombrePaire == 9) { // Victory
                clearTimeout(time);
                openModal();
                document.getElementById("score").innerHTML = document.getElementById("start").innerHTML;
                document.getElementById("score2").innerHTML = nombreEssaie;

            }


        }


    });

}

