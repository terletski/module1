//requirements for use:
console.log('Enter the country you want to find as the function <findByName> argument.')

const request = require('request-promise');

const options = {
  method: 'GET',
  uri: 'http://services.groupkt.com/country/get/all'
}

request(options)
  .then(function (response) {
    let json_obj = JSON.parse(response);
    let country = json_obj.RestResponse.result;

    let name = 'Belarus';
      for (let prop in country){
        if (country[prop].name === name) {
          console.log(country[prop]);
          return country[prop];
        }
      }
    })                     
  .catch((err) => {
    console.log(err)
})
