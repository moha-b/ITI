(function () {
    const mymap = document.getElementById('view');


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
        } else {
            mymap.innerText = "Sorry, your browser does not support Geolocation. Please update and try again!";
        }
    }

    function getPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const location = new google.maps.LatLng(lat, lon);
        const mapOptions = { zoom: 17, center: location };
        new google.maps.Map(mymap, mapOptions);
    }


    function errorHandler() {
        alert('Error getting location');
    }

    window.addEventListener('load', function () {
    });
})();