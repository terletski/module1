const fs = require('fs')
const fileExists = require('file-exists')

// requirements for use:
console.log('Valid file extensions: txt, html, xml and encoded UTF-8.')
console.log('Enter the file name you want to read as the function <readFileAndPrintEvenLines> argument.')

let readFileAndPrintEvenLines = file => {
  console.log('File processing... ')
  // check for file existence
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fileExists.sync(file) ? resolve(file) : reject(new Error(file + ' not found'))
    }, 1000)
  })
  return promise
}

let printLines = file => {
  // read file
  fs.readFile(file, (err, data) => {
    if (err) throw err
    // split file into lines
    let arr = data.toString().split('\n')
    // print even lines
    let filtered = arr.filter((element, index, array) => index % 2 === 1)
    console.log(filtered)
  })
}

readFileAndPrintEvenLines('Text.txt')
  .then(file => {
    console.info('File received')
    return file
  })
  .then(printLines)
  .catch(error => console.error(error))
