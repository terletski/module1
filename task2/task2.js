//requirements for use:
console.log ('Valid file extensions: - json, encoded: UTF8.');
console.log ('Enter the file name you want to read as the function <checkConditions> argument.');

let checkConditions = json_file => {

    let fs = require('fs');
    let fileExists = require('file-exists');  
    let content = fs.readFileSync(json_file, 'utf8');         
    let data = JSON.parse(content);

    typeof data.flag === 'boolean' && data.flag === true ? console.log('OK') : 
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

    typeof data.counter === 'number' && data.counter < 0 ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "counter : " + data.counter + '\n');

    typeof data.config === 'string' && data.config === 'timer' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "config : " + data.config + '\n');

    typeof data.const === 'string' && data.const === 'FIRST' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "const : " + data.const + '\n');
    
    typeof data.parameters === 'object' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "parameter : " + data.parameters  + '\n');
     
    typeof data.description === 'string' || data.description === 'qwertyuiopasdfghjkl' ? console.log('OK') : 
    fs.appendFileSync('Log.txt', "description : " + data.description + '\n');  

    // check for Log.txt existence   
    fileExists.sync('Log.txt') === true ? console.log("Log.txt was created") : 
    console.log("Log.txt wasn't created");      
}
   
checkConditions('1400528_4.json');
  



