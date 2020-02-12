const fs = require('fs');

/**
 * Write a directory
 * @param {String} dirName - name of directory 
 */
const makeDir = (dirName) => {
    try {
        fs.mkdirSync(dirName, {});
    } catch (err) {
        console.log('Failed.', err.name, err.message);
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
        console.log('Failed.', err.name, err.message);
    }
}


module.exports = {
    makeDir,
    writeFile
};




