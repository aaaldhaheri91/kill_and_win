const { execForEach, exec } = require('./scripts');

const build = {
    default: execForEach('start build')
};

const killAndWin = {
    default: exec('start build', 'kill-and-win'),
    run: exec('start run', 'kill-and-win'),
    tsc: exec('start tsc', 'kill-and-win'),
    startDevExpress: exec('start startDev', 'kill-and-win'),
    startReact: exec('start reactscripts.start', 'kill-and-win'),
    buildReact: exec('start reactscripts.build', 'kill-and-win'),
    testReact: exec('start reactscripts.test')
};

module.exports = () => ({
    scripts: {
        build,
        killAndWin
    }
})