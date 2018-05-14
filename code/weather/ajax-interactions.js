// liam beckman
// 13 may 2018
// cs290
// sources:
//    https://stackoverflow.com/questions/19186428/refresh-leaflet-map-map-container-is-already-initialized


// initial map (portland)
buildMap(45.4970, -122.6365);
var mymap = L.map('mapid').setView([45.4970, -122.6365], 11);

// allows updating location by clicking on map
function onMapClick(e) {
    updatePlace(e.latlng.lat, e.latlng.lng);
}

// global JSON variable because I'm not clever enough to return variables...
var responseGlobal;

// openWeatherMap api token
var apiKey = '6e819dbc5bef4cc4627f4c655841b090';

// wait until the DOM before starting buttons
document.addEventListener('DOMContentLoaded', bindButtons);

// initial location
updatePlace("Portland");

// resets location to portland
document.getElementById('reset').addEventListener('click', function(event){
    updatePlace("Portland");
    event.preventDefault();
});


// updates location when user submits city or zipcode
function bindButtons(){
    document.getElementById('placeSubmit').addEventListener('click', function(event){
    updatePlace();
    event.preventDefault();
})};



// does the updating
function updatePlace(lat, lon) {
    var req = new XMLHttpRequest();
    var payload = {place:null};

    if (lat && lon) {
        req.open("GET", 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + "&lon=" + lon + '&appid=' + apiKey, false);
    }

    else if (lat && !lon) {
        payload.place = lat;
        req.open("GET", 'https://api.openweathermap.org/data/2.5/weather?q=' + payload.place + '&appid=' + apiKey, false);
    }

    else {
        payload.place = document.getElementById('place').value;
        req.open("GET", 'https://api.openweathermap.org/data/2.5/weather?q=' + payload.place + '&appid=' + apiKey, false);
    }

    // wait for request before displaying data
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            document.getElementById('notFound').textContent = "";
            var response = JSON.parse(req.responseText);
            responseGlobal = response;
            let description = response.weather[0].description;
            let humidity = response.main.humidity;
            let lat = response.coord.lat;
            let lon = response.coord.lon;
            let temp = response.main.temp;
            let tempCelsius = temp - 273.15;
            let tempFahrenheit = (9.0 / 5.0) * tempCelsius + 32;


            let weatherNode = document.getElementById('weather');
            let humidityNode = document.getElementById('humidity');
            let tempNode = document.getElementById('temp');
            let latNode = document.getElementById('lat');
            let lonNode = document.getElementById('long');

            document.getElementById('placeUser').textContent = response.name + ", " + response.sys.country;
            document.getElementById('place').placeholder = response.name + ", " + response.sys.country;

            weatherNode.textContent = description;
            tempNode.textContent = Number(tempCelsius).toFixed(1) + " °C (" + Number(tempFahrenheit).toFixed(1) + " °F)";
            humidityNode.textContent = humidity;
            latNode.textContent = lat;
            lonNode.textContent = lon;


            // update map
            buildMap(response.coord.lat, response.coord.lon);

            // update JSON data
            postJson();

        } else {
            // show error if city not  found
            console.log("recieved error in network request: " + req.statusText);
            document.getElementById('notFound').textContent = "city not found";
        }});

    req.send(null);
}


// builds the map and layer
function buildMap(lat,lon)  {
    document.getElementById('mapid').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    var newMap = new L.Map('map');
    newMap.setView(new L.LatLng(lat,lon), 12 );

    mapboxLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoibGJlY2ttYW4zMTQiLCJhIjoiY2poNDlhZ3hwMHh5cDJ3bnhjcXQ5Nzh2cCJ9.eI1TFtPk7kG7k1YHbf4y0A'
            });

    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    osmAttribution = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors,' +
                        ' <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    osmLayer = new L.TileLayer(osmUrl, {maxZoom: 12, attribution: osmAttribution});

    // change to osmLayer to use open street maps layer
    newMap.addLayer(mapboxLayer);
    newMap.on('contextmenu', onMapClick);
}


// allows user to upload JSON data
document.getElementById('file').addEventListener('click', function(event){
  let input = document.getElementById("file");
  let fileInfo = document.getElementById("fileInfo");
  let fileInfoError = document.getElementById("fileInfoError");
  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      let file = input.files[0];
      fileInfo.textContent = file.name;
      if (file.type) fileInfo.textContent += " :: " + file.type;
            if (file.type != "application/json") fileInfoError.textContent = file.type + " not accepted. JSON is though.";
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        responseGlobal = JSON.parse(reader.result);
          updatePlace(responseGlobal.name);
      });
      reader.readAsText(file);
    }
  });
});


// updates JSON data at bottom of page
function postJson() {
    var req = new XMLHttpRequest();
    req.open("POST", "https://httpbin.org/post", false);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(responseGlobal));
    let res = req.responseText;

    document.getElementById('json').textContent = JSON.parse(res).data;

    let fileInfo = document.getElementById("fileInfo");
    fileInfo.textContent = "";
    let fileInfoError = document.getElementById("fileInfoError");
    fileInfoError.textContent = "";
}
