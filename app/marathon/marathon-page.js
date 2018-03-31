const MarathonViewModel = require("./marathon-view-model");
var interval;
var gameScreen;
var pick;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MarathonViewModel();
    console.log("MARATHONnnnnnnnnnnnnnnnnnn");

 
    
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


   interval= setInterval(myMethod, 1000);

function myMethod( )
{
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

    circle.top = Math.floor(Math.random() * 500);
    circle.left = Math.floor(Math.random() * 300);

    square.top = Math.floor(Math.random() * 500);
    square.left = Math.floor(Math.random() * 300);

    triangle.top = Math.floor(Math.random() * 500);
    triangle.left = Math.floor(Math.random() * 300);

    circle.visibility = "visible";
    square.visibility = "visible";
    triangle.visibility = "visible";

}
}



exports.onNavigatingTo = onNavigatingTo;
exports.circleClick = circleClick;
exports.squareClick = squareClick;
exports.triangleClick = triangleClick;
exports.fieldLoaded = fieldLoaded;