//requirements for use:
console.log ('Valid file extensions: - json, encoded: UTF8.');
console.log ('Enter the file name you want to read as the function <checkConditions> argument.');

const fs = require('fs');
const fileExists = require('file-exists');

let log_file = {};
let wrongProperties = 0;

checkConditions = json_file => {
    console.log('File processing... ')
    //check for file existence
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            fileExists.sync(json_file) ? resolve(json_file) : reject(json_file + ' not found');
        }, 1000);
    });
    return promise;
}

readJsonFileAndWriteLog = json_file => {
    let content = fs.readFileSync(json_file, 'utf8');         
    let data = JSON.parse(content);
  
    if (typeof data.flag !== 'boolean') writeLogFile('flag', data.flag);
    if (typeof data.myPromises !== 'object') writeLogFile('myPromises', data.myPromises);
    if (typeof data.element !== 'object') writeLogFile('element', data.element);
    if (data.screenshot !== 'null') writeLogFile('screenshot', data.screenshot);
    if (typeof data.elementText !== 'string') writeLogFile('elementText', data.elementText);
    if (data.allElementsText !== 'tant') writeLogFile('allElementsText', data.allElementsText);
    if (typeof data.counter !== 'number' && data.counter < 0) writeLogFile('counter', data.counter);
    if (typeof data.config !== 'string' && data.config === 'timer') writeLogFile('config', data.config);
    if (!/FiRst/i.test(data.const)) writeLogFile('const', data.const);
    if (typeof data.parameters !== 'object') writeLogFile('parameters', data.parameters); 
    if (typeof data.description !== 'string' && data.description.length === 19) writeLogFile('description', data.description); 
     
    if (wrongProperties > 0) {
        fs.writeFile('Log.txt', JSON.stringify(log_file), 'utf8', () => {
            console.log('Log.txt file was created.');
            })
    } 
    else {console.log('OK')}
}

function writeLogFile(property, value) {
    log_file[property] = value;
    wrongProperties++ ;
}

checkConditions('1400528_4.json')
    .then(json_file => {
        console.info('File received');
        return json_file;
    })
    .then(readJsonFileAndWriteLog)
    .catch(error => console.error(error));




