const fs = require('fs');

/**
 * Write a directory
 * @param {String} dirName - name of directory 
 */
const makeDir = (dirName) => {
    fs.mkdirSync(dirName, {});
}


/**
 * Write a file
 * @param {String} path - file name prepended by it's absolute path
 * @param {String} content - data to be written to file
 */
const writeFile = (path, content) => {
    fs.writeFileSync(path, content, 'UTF-8');
}


module.exports = {
    makeDir,
    writeFile
};




