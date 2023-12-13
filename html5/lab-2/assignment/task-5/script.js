window.addEventListener('load', function () {
    map = this.document.querySelector('#map');
    details = document.querySelector("#details-map");
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getposition, errorhandlere);

    } else {
        //not exist
        map.innerText = "sorry , your browser not Supor Geolocation , please update and try again !!!!";
    }
}

function getDetails() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getData, errorhandlere);

    } else {
        //not exist
        map.innerText = "sorry , your browser not Supor Geolocation , please update and try again !!!!";
    }
}

function getposition(e) {
    details.style.display = "none";
    map.style.display = "block";
    let lat = e.coords.latitude;
    let lon = e.coords.longitude;
    let location = new google.maps.LatLng(lat, lon);
    let specs = {zoom: 17, center: location};
    new google.maps.Map(map, specs);
}

function getData(e) {
    map.style.display = "none";
    details.style.display = "flex";

    let lat = e.coords.latitude;
    let lon = e.coords.longitude;
    let accuracy = e.coords.accuracy;
    let timestamp = new Date(e.timestamp).toLocaleString();

    details.querySelector('input:nth-of-type(1)').value = lat;
    details.querySelector('input:nth-of-type(2)').value = lon;
    details.querySelector('input:nth-of-type(3)').value = accuracy;
    details.querySelector('input:nth-of-type(4)').value = timestamp;
}

function errorhandlere() {
    alert('Error');
}