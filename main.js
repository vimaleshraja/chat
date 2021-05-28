
// fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=600088&date=26-05-2021',)
//     .then(res => {
//         return res.json()
//     }).then(data=>{
//         return console.log(data)
//     })


function getInputValue() {
  // Selecting the input element and get its value
  // var inputVal = document.getElementById("pincode").value;

  // Displaying the value
  // alert(inputVal);

  var bin = window.location.pathname;
  bin = bin.split("/")

  //var town ='garstang';
  var town = "600045";
  var date = "29-05-2021";

  console.log(town);
  console.log(date);





  var url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=";

  var theUrl = url + town + '&date=' + date

  // if (town === ""){

  // }
  // else{
  // fetch(url+ town+'&date='+ date)
  //   .then(response => response.text())
  //   // .then(result => console.log(result))
  //   .then(result => document.getElementById("demo").innerHTML =(result))
  //   .catch(error => console.log('error', error)); 

  // }

  function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        callback(xmlHttp.responseText);
        console.log(xmlHttp.responseText)
      }

    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
  }
  httpGetAsync();
}
getInputValue();