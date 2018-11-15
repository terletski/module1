//requirements for use:
console.log('Enter the country you want to find as the function <findByName> argument.')

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let url = 'http://services.groupkt.com/country/get/all'

// a new request
function Get(url) {
    let Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

let json_obj = JSON.parse(Get(url));
let country = json_obj.RestResponse.result;
// console.log(country);

// find country
function findByName(country, name) {         
    for (var i = 0; i < country.length; i++) {
      if (country[i].name === name) {
        console.log(country[i]) 
        return country[i];
      }
    }
console.log("Country " + name + " couldn't find");     
} 

findByName(country, 'Belarus');
