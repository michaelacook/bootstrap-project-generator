#!/usr/bin/env node

/* generate basics files and directories for a bootstrap project, write boilerplate 
to those files. Good to quickly start up a little bootstrap font-end project or demo 
an idea */
const { makeDir } = require('../src/functions');
const { writeFile } = require('../src/functions');
const { getArgs } = require('../src/functions');
const { displayMsg } = require('../src/functions');
const { dirs } = require('../data/data');
const { content } = require('../data/data');
const { messages } = require('../data/messages');

// run help message or err message if commandline option given
const arg = getArgs();
if (arg) {
    displayMsg(messages, arg);
    process.exit();
}

// write dirs
dirs.forEach(dir => makeDir(dir));

// write file contents 
for (let file in content) {
    writeFile(file, content[file]);
}