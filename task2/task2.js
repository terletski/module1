//requirements for use:
console.log ('Valid file extensions: - json, encoded: UTF8.' + '\n');

let checkConditions = () => {

let fs = require('fs');
    
    let content = fs.readFileSync('1400528_4.json', 'utf8');
              
    let data = JSON.parse(content);

    typeof data.flag === 'boolean' || data.flag === true ? console.log('OK') : 
    fs.writeFileSync('Log.txt', "flag : " + data.flag + '\n');
    
    typeof data.myPromises === 'object' ? console.log('OK') :
    fs.appendFileSync('Log.txt', "myPromises : " + data.myPromises + '\n');
  
    typeof data.element === 'object' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "patameter : " + data.element + '\n');

    data.screenshot === 'null' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "screenshot : " + data.screenshot + '\n');

    typeof data.elementText === 'string' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "elementText : " + data.elementText + '\n');

    typeof data.allElementsText === 'string' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "allElementsText : " + data.allElementsText + '\n');

    typeof data.counter === 'number' || data.counter === -1 ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "counter : " + data.counter + '\n');

    typeof data.config === 'string' || data.config === 'timer' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "config : " + data.config + '\n');

    data.const === 'FIRST' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "const : " + data.const + '\n');

    typeof data.parameters === 'object' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "parameter : " + data.parameters  + '\n');
     
    typeof data.description === 'string' || data.description === 'qwertyuiopasdfghjkl' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "description : " + data.description + '\n');  
}

checkConditions();
  



