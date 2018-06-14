const TimedViewModel = require("./timed-view-model");
const buttonModule = require("ui/button");
const dialogs = require("ui/dialogs");
const frames = require("ui/frame");
var page2;

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
var TOTAL_TIME_REMAINING = 30; //For now set to 30 secs!
var GAME_OVER = false; // to be used later for stopping the game!
// var scoreLabel;


function pauseGame(args) {
    const page = args.object;

    alert("Game has been paused!");
}


function fieldLoaded2(args) {
    page2 = args.object;
    page2.bindingContext = new TimedViewModel();
    console.log("loadedField2");
}

function fieldLoaded(args) {
    const page = args.object;
    //page.bindingContext = new TimedViewModel();
    console.log("loadedField");
    gameScreen = args;

    var circleBtn = page.getViewById("circleBtn");
    var squareBtn = page.getViewById("squareBtn"); 
    var triangleBtn = page.getViewById("triangleBtn");
    var scoreLabel = page.getViewById("currentScore");

    var circleTap = function circleClick(args) {
        const page = args.object;
        
        console.log("circle");
        
        if(pick == 1){
            console.log("POINT");
            TOTAL_SCORE++;

            //reset random components
            displayAllRandomShapes();
            //alert("Score: " + TOTAL_SCORE);
        }
    }
    
    var squareTap = function squareClick(args) {
        const page = args.object;
        
        console.log("square");
        if(pick == 2){
            console.log("POINT");
            TOTAL_SCORE++;
            
            //reset random components
            displayAllRandomShapes();
            //alert("Score: " + TOTAL_SCORE);
        }
    }
    
    var triangleTap = function triangleClick(args) {
        const page = args.object;
    
        console.log("triangle");
        if(pick == 3){
            console.log("POINT");
            TOTAL_SCORE++;
    
            //reset random components
            displayAllRandomShapes();
            //alert("Score: " + TOTAL_SCORE);
        }
    }

    // Button listeners...basically listen on the page for the button
    // tap. When the button is tapped it will call the methods below
    // this is where the callbacks are used!!
    circleBtn.addEventListener(buttonModule.Button.tapEvent, circleTap, this);
    squareBtn.addEventListener(buttonModule.Button.tapEvent, squareTap, this);
    triangleBtn.addEventListener(buttonModule.Button.tapEvent, triangleTap, this);

    // Load all the shapes randomly at start!
    displayAllRandomShapes();
    //interval = setInterval(myMethod, 1000); // old garbage!

    // Set all visuals here, like innerHtml stuff
    function displayAllRandomShapes() {
        
        var width = page2.getActualSize().width;
        var height = page2.getActualSize().height;
        if(width == 0){
            width = 300;
        }
        if(height == 0){
            height = 500;
        }
        console.log(height);
        console.log(width);
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
        // random x/y coordinate
        console.log("");
        circleBtn.top = Math.floor(Math.random() * (height - 85));
        var cirleTOPend = circleBtn.top + 80;
        circleBtn.left = Math.floor(Math.random() * (width - 85));
        var cirleLEFTend = circleBtn.left + 80;
        
        
        console.log("");
        var greenCheck = true;
        squareBtn.top = Math.floor(Math.random() * (height - 85));
        var squareTOPend = squareBtn.top + 80;
        squareBtn.left = Math.floor(Math.random() * (width - 85));
        var squareLEFTend = squareBtn.left + 80;
        if(((circleBtn.left <= squareBtn.left) && (squareBtn.left <=cirleLEFTend)) || ((circleBtn.left <= squareLEFTend) && (squareLEFTend <=cirleLEFTend))){
            while(greenCheck){
                squareBtn.top = Math.floor(Math.random() * (height - 85));
                squareTOPend = squareBtn.top + 80;
                if(((circleBtn.top <= squareBtn.top) && (squareBtn.top <=cirleTOPend)) || ((circleBtn.top <= squareTOPend) && (squareTOPend <=cirleTOPend))){
                    greenCheck = true;
                    console.log("RG OVERLAP");
                }else {
                    greenCheck = false;
                }
            }
        }
        else {
            squareBtn.top = Math.floor(Math.random() * (height - 85));
            squareTOPend = squareBtn.top + 80;
        }
    
        console.log("");
        var yellowCheck = true;
        triangleBtn.top = Math.floor(Math.random() * (height - 85));
        var triangleTOPend = triangleBtn.top + 80;
        triangleBtn.left = Math.floor(Math.random() * (width - 85));
        var triangleLEFTend = triangleBtn.left + 80;
        if(((circleBtn.left <= triangleBtn.left) && (triangleBtn.left <=cirleLEFTend)) || ((circleBtn.left <= triangleLEFTend) && (triangleLEFTend <=cirleLEFTend))){
            while(yellowCheck){
                triangleBtn.top = Math.floor(Math.random() * (height - 85));
                triangleTOPend = triangleBtn.top + 80;
                if(((circleBtn.top <= triangleBtn.top) && (triangleBtn.top <=cirleTOPend)) || ((circleBtn.top <= triangleTOPend) && (triangleTOPend <=cirleTOPend))){
                    yellowCheck = true;
                    console.log("RY OVERLAP");
                }
                else if(((squareBtn.top <= triangleBtn.top) && (triangleBtn.top <=squareTOPend)) || ((squareBtn.top <= triangleTOPend) && (triangleTOPend <=squareTOPend))){
                    yellowCheck = true;
                    console.log("GY OVERLAP");
                }   
                else {
                    yellowCheck = false;
                }
            }
        }
        else if(((squareBtn.left <= triangleBtn.left) && (triangleBtn.left <=squareLEFTend)) || ((squareBtn.left <= triangleLEFTend) && (triangleLEFTend <=squareLEFTend))){
            while(yellowCheck){
                triangleBtn.top = Math.floor(Math.random() * (height - 85));
                triangleTOPend = triangleBtn.top + 80;
                if(((circleBtn.top <= triangleBtn.top) && (triangleBtn.top <=cirleTOPend)) || ((circleBtn.top <= triangleTOPend) && (triangleTOPend <=cirleTOPend))){
                    yellowCheck = true;
                    console.log("RY OVERLAP");
                }
                else if(((squareBtn.top <= triangleBtn.top) && (triangleBtn.top <=squareTOPend)) || ((squareBtn.top <= triangleTOPend) && (triangleTOPend <=squareTOPend))){
                    yellowCheck = true;
                    console.log("GY OVERLAP");
                }   
                else {
                    yellowCheck = false;
                }
            }
        }
        else{
            triangleBtn.top = Math.floor(Math.random() * (height - 85));
            triangleTOPend = triangleBtn.top + 80;
        }
    
        console.log("");

        circleBtn.visibility = "visible";
        squareBtn.visibility = "visible";
        triangleBtn.visibility = "visible";

        // Set Score!!
        scoreLabel.text = "Score: " + TOTAL_SCORE;

    }

    // Set Timer!!!
    a = setInterval(function(){ 
        var timerLabel = page.getViewById("timeRemaining");
        //console.log("Hi");
        if (TOTAL_TIME_REMAINING > 0) {
            TOTAL_TIME_REMAINING--;
        }

        if(TOTAL_TIME_REMAINING == 0){ 
            clearInterval(a);
            GAME_OVER = true;
            //alert('Game over son!!!');

            // Delay the dialog opening for a second for usuability
            setTimeout(() => {
                dialogs.action({
                    message: "Your final score was:  " + TOTAL_SCORE,
                    cancelable: false, // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
                    actions: ["Play Again", "Return Home"]
                }).then(function (result) {
                    //console.log("Dialog result: " + result);
                    TOTAL_SCORE = 0;
                    TOTAL_TIME_REMAINING = 30;
                    if(result == "Play Again"){
                        frames.topmost().navigate("timed/timed-page");
                    } else if(result == "Return Home"){
                        frames.topmost().navigate("home/home-page");
                    }
                });
            }, 1000);
        } 
            console.log(TOTAL_TIME_REMAINING);
            timerLabel.text = "Timer: " + TOTAL_TIME_REMAINING;
    }, 1000);

}

exports.pauseGame = pauseGame;
exports.onNavigatingTo = onNavigatingTo;
exports.navigateToHome = navigateToHome;
//exports.circleClick = circleClick;
//exports.squareClick = squareClick;
//exports.triangleClick = triangleClick;
exports.fieldLoaded = fieldLoaded;
exports.fieldLoaded2 = fieldLoaded2;