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
  
    typeof data.flag === 'boolean' ? console.log('OK') : writeLogFile('flag', data.flag);
    typeof data.myPromises === 'object' ? console.log('OK') : writeLogFile('myPromises', data.myPromises);
    typeof data.element === 'object' ? console.log('OK') : writeLogFile('element', data.element);
    data.screenshot === 'null' ? console.log('OK') : writeLogFile('screenshot', data.screenshot);
    typeof data.elementText === 'string' ? console.log('OK') : writeLogFile('elementText', data.elementText);
    data.allElementsText === 'tant' ? console.log('OK') : writeLogFile('allElementsText', data.allElementsText);
    typeof data.counter === 'number' && data.counter < 0 ? console.log('OK') : writeLogFile('counter', data.counter);
    typeof data.config === 'string' && data.config === 'timer' ? console.log('OK') : writeLogFile('config', data.config);
    /FiRst/i.test(data.const) ? console.log('OK') : writeLogFile('const', data.const);
    typeof data.parameters === 'object' ? console.log('OK') : writeLogFile('parameters', data.parameters); 
    typeof data.description === 'string' && data.description.length === 19 ? console.log('OK') : writeLogFile('description', data.description); 
     
    if (wrongProperties > 0) {
        fs.writeFile('Log.txt', JSON.stringify(log_file), 'utf8', () => {
            console.log('Log.txt file was created.');
        })
    } 
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




