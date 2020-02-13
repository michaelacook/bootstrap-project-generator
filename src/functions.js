const fs = require('fs');

/**
 * Write a directory
 * @param {String} dirName - name of directory 
 */
const makeDir = (dirName) => {
    try {
        fs.mkdirSync(dirName, {});
    } catch (err) {
        console.error('Failed.', err.name, err.message);
    }
}


/**
 * Write a file
 * @param {String} path - file name prepended by it's absolute path
 * @param {String} content - data to be written to file
 */
const writeFile = (path, content) => {
    try {
        fs.writeFileSync(path, content, 'UTF-8');
    } catch (err) {
        console.error('Failed.', err.name, err.message);
    }
}


/** 
 * Get commandline args 
 */
const getArgs = () => {
    if (process.argv.length > 2) {
        return process.argv[2];
    }
}


/**
 * Display help message
 * @param {Object} msgs - data object containing key-value pairs of supported options and messages
 * @param {String} arg - option entered on stdin
 */
const displayMsg = (msgs, arg) => {
    if (msgs[arg]) {
        process.stdout.write(msgs[arg]);
    } else {
        process.stdout.write('Option not supported.');
    }
} 


module.exports = {
    makeDir,
    writeFile,
    getArgs,
    displayMsg
};

