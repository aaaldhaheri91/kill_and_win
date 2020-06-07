const { series } = require('nps-utils');

const build = {
    default: series.nps(`tsc`)
};

const tsc = {
    default: `tsc`
};

const run = {
    default: `NODE_ENV=development ts-node src/index.ts`
};

const startDev = {
    default: `nodemon`
}

module.exports = () => ({
    scripts: {
        build,
        tsc,
        run,
        startDev
    }
})
