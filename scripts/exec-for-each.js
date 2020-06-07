function execForEach(command, yarnArgs = '') {
    return `yarn workspaces foreach -v -p --topological-dev ${yarnArgs} run ${command}`;
}

module.exports = {
    execForEach
}