const { series } = require("nps-utils");

const build = {
    default: series.nps(`tsc`)
};

const tsc = {
    default: `tsc --noEmit false`
};

const run = {
    default: `tsc --noEmit false && NODE_ENV=development ts-node src/server.ts`
};

const startDev = {
    default: `nodemon`
};

const reactscripts = {
    start: `react-scripts start`,
    build: `react-scripts build`,
    test: `react-scripts test`,
    eject: 'react-scripts eject'
};

module.exports = () => ({
    scripts: {
        build,
        tsc,
        run,
        startDev,
        reactscripts
    }
});
