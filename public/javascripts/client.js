(function() {
    var noGeolocation = function() {
        alert("For some reason we are unable to find your location. Sorry.");
    };

    if (!navigator.geolocation || !document.querySelector) {
        noGeolocation();
    }
    else {
        navigator.geolocation.getCurrentPosition(
            function(p) {
                document.querySelector("[name='latitude']").value = p.coords.latitude;
                document.querySelector("[name='longitude']").value = p.coords.longitude;
                document.querySelector("[type='submit']").removeAttribute("disabled");

            },
            function(err) {
                noGeolocation();
            }
        );
    }
})();


var map = L.map('map').setView([39.1309945, -77.0737036], 14);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2aW5taWNvbCIsImEiOiJjaXh6bTZmNjMwMDdsMndyeWZocWszeGEzIn0.24V6es0V8o0uxJypeamoBg',
  {
    attribution: 'Kevin is the man',
    maxZoom: 17,
    minZoom: 9
  }).addTo(map);

//this is googlemapsAPI
  var x = document.getElementById("demo");
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  function showPosition(position) {
      var latlon = position.coords.latitude + "," + position.coords.longitude;

      var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
      +latlon+"&zoom=14&size=400x300&sensor=false&marker=true";
      document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }
