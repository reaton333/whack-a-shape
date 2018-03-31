const observableModule = require("data/observable");

function MarathonViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = MarathonViewModel;
