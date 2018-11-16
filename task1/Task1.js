//requirements for use:
console.log ('Valid file extensions: txt, html, xml and encoded UTF-8.');
console.log ('Enter the file name you want to read as the function <readFileAndPrintEvenLines> argument.');

let readFileAndPrintEvenLines = file => {
    console.log('Even lines: ')
    let fs = require('fs');
    let arr;
       fs.readFile(file, (err, data) => { //read file 
        if (err) throw err;
        arr = data.toString().split('\n');   //split file into lines
                
        for (let i = 0; i<arr.length; i++) {      //print even lines
            if (i%2===1){console.log(arr[i]);
            }
        } 
    });
}
 
readFileAndPrintEvenLines('Text.txt');


