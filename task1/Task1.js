//requirements for use:
console.log ('Valid file extensions: txt, html, xml and encoded UTF-8.' + '\n');

let readFileAndPrintEvenLines = () => {
    console.log('Even lines: ')
    let fs = require('fs');
    let arr;
       fs.readFile('Text.txt', (err, data) => { //read file 
        if (err) {throw err}
        arr = data.toString().split('\n');//split file into lines
                
        for (let i = 0; i<arr.length; i++) {      //print even lines
            if (i%2===1){console.log(arr[i]);
            }
        } 
    });
}
 
readFileAndPrintEvenLines();


