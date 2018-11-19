const request = require('request-promise');

let name = 'Belarus';

const options = {
  method: 'GET',
  uri: 'http://services.groupkt.com/country/get/all'
}

request(options)
  .then (function (response) {
    let json_obj = JSON.parse(response);
    let country = json_obj.RestResponse.result;

      for (let prop in country){
        if (country[prop].name === name) {
          console.log(country[prop]);
        } 
      }
    })                    
  .catch(function(err) { 
    console.log(err);
  });
  
