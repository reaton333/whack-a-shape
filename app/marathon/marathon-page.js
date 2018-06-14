const MarathonViewModel = require("./marathon-view-model");
var interval;
var gameScreen;
var pick;
var userChoice = true;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MarathonViewModel();
    console.log("MARATHONnnnnnnnnnnnnnnnnnn nav to");
    //view.getActualSize().width
    userChoice = true;
    if(interval){
        clearInterval(interval);
        console.log("interval cleareddd");
        userChoice = true;
    }
}

function circleClick(args) {
    const page = args.object;
    page.bindingContext = new MarathonViewModel();
    console.log("circle");
    //console.log(args.object.top);
   // args.object.top = 200;
    //args.object.left = 200;
    
    if(pick == 1){
        console.log("POINT");
        userChoice = true;
    }
    else{
        clearInterval(interval);
        alert("LOST");
    }
}

function squareClick(args) {
    const page = args.object;
    page.bindingContext = new MarathonViewModel();
    console.log("square");
    if(pick == 2){
        console.log("POINT");
        userChoice = true;
    } else {
        clearInterval(interval);
        alert("LOST");
    }
    
}

function triangleClick(args) {
    const page = args.object;
    page.bindingContext = new MarathonViewModel();
    console.log("triangle");
    if(pick == 3){
        console.log("POINT");
        userChoice = true;
    } else {
        clearInterval(interval);
        alert("LOST");
    }
    
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
   interval = setInterval(myMethod, 1000);
   //interval = setInterval(myMethod, 2500);

function myMethod()
{
    if(userChoice){
         //console.log(page.getActualSize().width);
    //console.log(page.getActualSize().height);
    var width = page.getActualSize().width;
    var height = page.getActualSize().height;
    pick = Math.floor(Math.random() * 3) + 1;
    //console.log(pick);
    page.getViewById("active").text = pick;
    if(pick == 1){
        page.getViewById("active").text = "red";
    } else if(pick == 2){
        page.getViewById("active").text = "green";
    } else if(pick == 3){
        page.getViewById("active").text = "yellow";
    }
    var circle = page.getViewById("circle");
    var square = page.getViewById("square"); 
    var triangle = page.getViewById("triangle");

    //console.log(args.object.getMeasuredWidth());
    //console.log(args.object.getMeasuredHeight());

    console.log("");
    circle.top = Math.floor(Math.random() * (height - 150));
    var cirleTOPend = circle.top + 100;
    circle.left = Math.floor(Math.random() * (width - 150));
    var cirleLEFTend = circle.left + 100;
    
    
    console.log("");
    var greenCheck = true;
    square.top = Math.floor(Math.random() * (height - 150));
    var squareTOPend = square.top + 100;
    square.left = Math.floor(Math.random() * (width - 150));
    var squareLEFTend = square.left + 100;
    while(greenCheck){
        square.top = Math.floor(Math.random() * (height - 150));
        squareTOPend = square.top + 100;
        if(((circle.top <= square.top) && (square.top <=cirleTOPend)) || ((circle.top <= squareTOPend) && (squareTOPend <=cirleTOPend))){
            greenCheck = true;
            console.log("RG OVERLAP");
        }else {
            greenCheck = false;
        }
    }

    console.log("");
    var yellowCheck = true;
    triangle.top = Math.floor(Math.random() * (height - 150));
    var triangleTOPend = triangle.top + 100;
    triangle.left = Math.floor(Math.random() * (width - 150));
    var triangleLEFTend = triangle.left + 100;
    while(yellowCheck){
        triangle.top = Math.floor(Math.random() * (height - 150));
        triangleTOPend = triangle.top + 100;
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

    console.log("");
    circle.visibility = "visible";
    square.visibility = "visible";
    triangle.visibility = "visible";
    //userChoice = false;
    }
    else{
        clearInterval(interval);
        alert("LOST");
    }
   

}
}



exports.onNavigatingTo = onNavigatingTo;
exports.circleClick = circleClick;
exports.squareClick = squareClick;
exports.triangleClick = triangleClick;
exports.fieldLoaded = fieldLoaded;