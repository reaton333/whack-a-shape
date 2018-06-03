const TimedViewModel = require("./timed-view-model");


/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new TimedViewModel();
    console.log("TIMED");
}

function navigateToHome(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = args.object;
    var frames = require("ui/frame");
    frames.topmost().navigate("home/home-page");
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and JavaScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = TimedViewModel;
    console.log("Timed Page to Home Page");
    //window.alert("test");
}

var TOTAL_SCORE = 0;
var TOTAL_GAME_PLAY_TIME_SECONDS = 30;
var interval;
var gameScreen;
var pick;
// var scoreLabel;


function circleClick(args) {
    const page = args.object;
    
    console.log("circle");
    
    if(pick == 1){
        console.log("POINT");
        TOTAL_SCORE++;
        // alert("Score: " + TOTAL_SCORE);
    }
}

function squareClick(args) {
    const page = args.object;
    
    console.log("square");
    if(pick == 2){
        console.log("POINT");
        TOTAL_SCORE++;
        // alert("Score: " + TOTAL_SCORE);
    }
}

function triangleClick(args) {
    const page = args.object;

    console.log("triangle");
    if(pick == 3){
        console.log("POINT");
        TOTAL_SCORE++;
        // alert("Score: " + TOTAL_SCORE);
    }
}

function pauseGame(args) {
    const page = args.object;

    alert("Game has been paused!");
}

function fieldLoaded(args) {
    const page = args.object;
    //page.bindingContext = new TimedViewModel();
    console.log("loadedField");
    gameScreen = args;
    /* var circle = page.getViewById("circle");
    var square = page.getViewById("square"); 
    var triangle = page.getViewById("triangle");

    console.log(args.object.getMeasuredWidth());
    console.log(args.object.getMeasuredHeight());

    circle.top = Math.floor(Math.random() * 500);
    circle.left = Math.floor(Math.random() * 300);

    square.top = Math.floor(Math.random() * 500);
    square.left = Math.floor(Math.random() * 300);

    triangle.top = Math.floor(Math.random() * 500);
    triangle.left = Math.floor(Math.random() * 300);

    circle.visibility = "visible";
    square.visibility = "visible";
    triangle.visibility = "visible"; */


   interval= setInterval(myMethod, 1000);
   
   
//var pickRed = page.getViewById("circle");
//var pickGreen = page.getViewById("square"); 
//var pickYellow = page.getViewById("triangle");

    // Set all visuals here, like innerHtml stuff
    function myMethod() {
        pick = Math.floor(Math.random() * 3) + 1;
        //console.log(pick);
        //page.getViewById("whatToPick").text = pick;
        if(pick == 1){
            page.getViewById("whatToPick").backgroundColor = "red";
        } else if(pick == 2){
            page.getViewById("whatToPick").backgroundColor = "green";
        } else if(pick == 3){
            page.getViewById("whatToPick").backgroundColor = "yellow";
        }
        var circle = page.getViewById("circle");
        var square = page.getViewById("square"); 
        var triangle = page.getViewById("triangle");
        var scoreLabel = page.getViewById("currentScore");

        //console.log(args.object.getMeasuredWidth());
        //console.log(args.object.getMeasuredHeight());

        // random x/y coordinate
        circle.top = Math.floor(Math.random() * 500);
        circle.left = Math.floor(Math.random() * 300);

        square.top = Math.floor(Math.random() * 500);
        square.left = Math.floor(Math.random() * 300);

        triangle.top = Math.floor(Math.random() * 500);
        triangle.left = Math.floor(Math.random() * 300);

        circle.visibility = "visible";
        square.visibility = "visible";
        triangle.visibility = "visible";

        // Set Score!!
        scoreLabel.text = "Score: " + TOTAL_SCORE;

    }
}

exports.pauseGame = pauseGame;
exports.onNavigatingTo = onNavigatingTo;
exports.navigateToHome = navigateToHome;
exports.circleClick = circleClick;
exports.squareClick = squareClick;
exports.triangleClick = triangleClick;
exports.fieldLoaded = fieldLoaded;