//GLOBALS - NO WINDOW

// __dirname : path to current dir
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// modules - Encapsulated code (Only shre minimun)
// process* - info about env where the program is being executed


//const t = require('./1-intro');

//Built-in Modules : OS PATH FS HTTP


const _ = require('lodash')

const items = [1, [7 , [2, [45, 755]] ]]

const nItems = _.flattenDeep(items);

console.log(nItems);
