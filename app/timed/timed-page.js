const TimedViewModel = require("./timed-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new TimedViewModel();
    console.log("TIMED");
}

exports.onNavigatingTo = onNavigatingTo;
