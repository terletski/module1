//requirements for use:
console.log ('Valid file extensions: - json, encoded: UTF8.' + '\n');

let checkConditions = () => {

let fs = require('fs');
    
    let content = fs.readFileSync('1400528_4.json', 'utf8');
              
    let data = JSON.parse(content);

    typeof data.flag === 'boolean' || data.flag === true ? console.log('OK') : 
    fs.writeFileSync('Log.txt', 'patameter "flag" does not satisfy the condition: true' + '\n');
    
    typeof data.myPromises === 'object' ? console.log('OK') :
    fs.appendFileSync('Log.txt', 'patameter "myPromises" does not satisfy the condition: {"1":2}' + '\n');
  
    typeof data.element === 'object' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "element" does not satisfy the condition: {"array":[]}' + '\n');

    data.screenshot === 'null' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "screenshot" does not satisfy the condition: null' + '\n');

    typeof data.elementText === 'string' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "elementText" does not satisfy the condition: string' + '\n');

    typeof data.allElementsText === 'string' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "allElementsText" does not satisfy the condition: tant' + '\n');

    typeof data.counter === 'number' || data.counter === -1 ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "counter" does not satisfy the condition: -1' + '\n');

    typeof data.config === 'string' || data.config === 'timer' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "config" does not satisfy the condition: timer' + '\n');

    data.const === 'FIRST' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "const" does not satisfy the condition: FIRST' + '\n');

    typeof data.parameters === 'object' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "parameter" does not satisfy the condition: {}' + '\n');
     
    typeof data.description === 'string' || data.description === 'qwertyuiopasdfghjkl' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', 'patameter "description" does not satisfy the condition: qwertyuiopasdfghjkl' + '\n');  
}

checkConditions();
  



