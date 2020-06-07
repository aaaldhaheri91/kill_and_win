function exec(command, workspace, yarnArgs = '') {
    return `yarn workspace ${workspace} ${yarnArgs} run ${command}`;
}

function execInstall(workspace, package, args = '') {
    return `yarn workspace ${workspace} add ${package} ${args}`;
}

module.exports = {
    exec, 
    execInstall
}