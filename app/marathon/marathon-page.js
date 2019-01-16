const MarathonViewModel = require("./marathon-view-model");
var application = require("application");
const frames = require("ui/frame");
require("nativescript-dom");
var cancel = false;
var interval;
var gameScreen;
var pick;
var userChoice = true;
var score = 0;
var page2;
var pageBack;
var firstPlay = true;
var circle;
var square;
var triangle;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    pageBack = page;
    page.bindingContext = new MarathonViewModel();
    console.log("MARATHONnnnnnnnnnnnnnnnnnn nav to");
    //view.getActualSize().width
    userChoice = true;
    if(interval){
        clearInterval(interval);
        console.log("interval cleareddd");
        userChoice = true;
        score = 0;
        firstPlay = true;
    }
}

// App went to background...
application.on(application.suspendEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity background: " + args.android);

        cancel = true;
        clearInterval(interval);
        interval = null;
        score = 0;
        firstPlay = true;

    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication background: " + args.ios);
    }
});

// App was reopened...
application.on(application.resumeEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity resume: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication resume: " + args.ios);
    }
});

function circleClick(args) {

    const page = args.object;
    page.bindingContext = new MarathonViewModel();
    console.log("circle");
    //console.log(args.object.top);
   // args.object.top = 200;
    //args.object.left = 200;
    
    if(pick == 1){
        if(((userChoice == false) || firstPlay) & interval != null){
            firstPlay = false;
            score = score + 1;
            console.log("POINT");
            page2.getViewById("currentScore").text = "Score: " + score;
            userChoice = true;
            circle.backgroundColor = "black";
        }
        
    }
    else if(interval == null){
        score = 0;
        firstPlay = true;
    }
    else{
        circle.backgroundColor = "pink";
        clearInterval(interval);
        alert("SCORE: " + score);
        interval = null;
        score = 0;
        firstPlay = true;
    }
}

function squareClick(args) {


    const page = args.object;
    page.bindingContext = new MarathonViewModel();
    console.log("square");
    if(pick == 2){
        if(((userChoice == false) || firstPlay) & interval != null){
            firstPlay = false;
            score = score + 1;
            console.log("POINT");
            page2.getViewById("currentScore").text = "Score: " + score;
            userChoice = true;
            square.backgroundColor = "black";
        }
        
    } 
    else if(interval == null){
        score = 0;
        firstPlay = true;
    }
    else {
        square.backgroundColor = "pink";
        clearInterval(interval);
        alert("SCORE: " + score);
        interval = null;
        score = 0;
        firstPlay = true;
    }
    
}

function triangleClick(args) {
 

    const page = args.object;
    page.bindingContext = new MarathonViewModel();
    console.log("triangle");
    if(pick == 3){
        if(((userChoice == false) || firstPlay) & interval != null){
            firstPlay = false;
            score = score + 1;
            console.log("POINT");
            page2.getViewById("currentScore").text = "Score: " + score;
            userChoice = true;
            triangle.backgroundColor = "black";
        }
        
    } 
    else if(interval == null){
        score = 0;
        firstPlay = true;
    }
    else {
        clearInterval(interval);
        alert("SCORE: " + score);
        interval = null;
        score = 0;
        firstPlay = true;
        triangle.backgroundColor = "pink";
    }
    
}

function fieldLoaded2(args) {
    page2 = args.object;
    page2.bindingContext = new MarathonViewModel();
    console.log("loadedField2");
}

function fieldLoaded(args) {
    const page = args.object;
    page.bindingContext = new MarathonViewModel();
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

    /////////////////////////////////////////////////////////////////////////
    if(!cancel){
        interval = setInterval(myMethod, 1000);
   //interval = setInterval(myMethod, 1250);
    }
    else{
        cancel = false;
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
    pageBack.bindingContext = MarathonViewModel;
    console.log("streak Page to Home Page");
    }
   

function myMethod()
{
    if(userChoice){
    console.log(page.getActualSize().width);
    console.log(page.getActualSize().height);
    var width = page.getActualSize().width;
    var height = page.getActualSize().height;
    pick = Math.floor(Math.random() * 3) + 1;
    //console.log(pick);
   // page.getViewById("active").text = pick;
    if(pick == 1){
        page2.getViewById("whatToPick").backgroundColor = "red";
    } else if(pick == 2){
        page2.getViewById("whatToPick").backgroundColor = "green";
    } else if(pick == 3){
        page2.getViewById("whatToPick").backgroundColor = "yellow";
    }
    circle = page.getViewById("circle");
    square = page.getViewById("square"); 
    triangle = page.getViewById("triangle");

    //console.log(args.object.getMeasuredWidth());
    //console.log(args.object.getMeasuredHeight());

    console.log("");
    circle.top = Math.floor(Math.random() * (height - 95));
    var cirleTOPend = circle.top + 80;
    circle.left = Math.floor(Math.random() * (width - 95));
    var cirleLEFTend = circle.left + 80;
    
    
    console.log("");
    var greenCheck = true;
    square.top = Math.floor(Math.random() * (height - 95));
    var squareTOPend = square.top + 80;
    square.left = Math.floor(Math.random() * (width - 95));
    var squareLEFTend = square.left + 80;
    if(((circle.left <= square.left) && (square.left <=cirleLEFTend)) || ((circle.left <= squareLEFTend) && (squareLEFTend <=cirleLEFTend))){
        while(greenCheck){
            square.top = Math.floor(Math.random() * (height - 95));
            squareTOPend = square.top + 80;
            if(((circle.top <= square.top) && (square.top <=cirleTOPend)) || ((circle.top <= squareTOPend) && (squareTOPend <=cirleTOPend))){
                greenCheck = true;
                console.log("RG OVERLAP");
            }else {
                greenCheck = false;
            }
        }
    }
    else{
        square.top = Math.floor(Math.random() * (height - 95));
        squareTOPend = square.top + 80;
    }
    

    console.log("");
    var yellowCheck = true;
    triangle.top = Math.floor(Math.random() * (height - 95));
    var triangleTOPend = triangle.top + 80;
    triangle.left = Math.floor(Math.random() * (width - 95));
    var triangleLEFTend = triangle.left + 80;
    if(((circle.left <= triangle.left) && (triangle.left <=cirleLEFTend)) || ((circle.left <= triangleLEFTend) && (triangleLEFTend <=cirleLEFTend))){
        while(yellowCheck){
            triangle.top = Math.floor(Math.random() * (height - 95));
            triangleTOPend = triangle.top + 80;
            if(((circle.top <= triangle.top) && (triangle.top <=cirleTOPend)) || ((circle.top <= triangleTOPend) && (triangleTOPend <=cirleTOPend))){
                yellowCheck = true;
                console.log("RY OVERLAP");
            }
            else if(((square.top <= triangle.top) && (triangle.top <=squareTOPend)) || ((square.top <= triangleTOPend) && (triangleTOPend <=squareTOPend))){
                yellowCheck = true;
                console.log("GY OVERLAP");
            }   
            else {
                yellowCheck = false;
            }
        }
    }
    else if(((square.left <= triangle.left) && (triangle.left <=squareLEFTend)) || ((square.left <= triangleLEFTend) && (triangleLEFTend <=squareLEFTend))){
        while(yellowCheck){
            triangle.top = Math.floor(Math.random() * (height - 95));
            triangleTOPend = triangle.top + 80;
            if(((circle.top <= triangle.top) && (triangle.top <=cirleTOPend)) || ((circle.top <= triangleTOPend) && (triangleTOPend <=cirleTOPend))){
                yellowCheck = true;
                console.log("RY OVERLAP");
            }
            else if(((square.top <= triangle.top) && (triangle.top <=squareTOPend)) || ((square.top <= triangleTOPend) && (triangleTOPend <=squareTOPend))){
                yellowCheck = true;
                console.log("GY OVERLAP");
            }   
            else {
                yellowCheck = false;
            }
        }
    }
    else {
        triangle.top = Math.floor(Math.random() * (height - 95));
        triangleTOPend = triangle.top + 80;
    }

    console.log("");

    circle.backgroundColor = "red";
    square.backgroundColor = "green";
    triangle.backgroundColor = "yellow"; 

    circle.visibility = "visible";
    square.visibility = "visible";
    triangle.visibility = "visible";
    userChoice = false;

    

    }
    else{
        if(!getElementById("Streak")){
            clearInterval(interval);
            interval = null;
            score = 0;
            firstPlay = true;
        }
        else{
            if(!cancel){
                alert("SCORE: " + score);
            }
            else{
                cancel = false;
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
    pageBack.bindingContext = MarathonViewModel;
    console.log("streak Page to Home Page");
            }
            clearInterval(interval);
            interval = null;
            score = 0;
            firstPlay = true;
        }
    }
   

}
}



exports.onNavigatingTo = onNavigatingTo;
exports.circleClick = circleClick;
exports.squareClick = squareClick;
exports.triangleClick = triangleClick;
exports.fieldLoaded = fieldLoaded;
exports.fieldLoaded2 = fieldLoaded2;