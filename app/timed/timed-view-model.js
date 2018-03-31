const observableModule = require("data/observable");

function TimedViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = TimedViewModel;
