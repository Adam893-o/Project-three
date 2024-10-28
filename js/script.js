let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 59.325, lng: 18.07 },
  });

  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.327, lng: 18.067 },
  });
  marker.addListener("click", toggleBounce);
}

new google.maps.Circle({
  map,
  radius: 500, 
  fillColor: '#FF0000',
  center: marker.getPosition(),
});

new google.maps.Polygon({
  map,
  paths: [
    { lat: 59.327, lng: 18.067 },
    { lat: 59.324, lng: 18.064 },
    { lat: 59.321, lng: 18.068 },
  ],
  strokeColor: '#FF0000',
  fillColor: '#FF0000',
});

var myMap = new google.maps.Map(el, mapOptions);

var marker = new google.mapsMarker({
  map: myMap,
  animation: google.maps.Animation.BOUNCE,
  icon: 'BugsBunny-icon.jpeg'

const contentString =<h1>About Jupiter</h1> <p>Jupiter has helped us understood the origins of our universe and how it was formed if it werent for this massive gas giant.</p>

const infowindow = new google.maps.InfoWindows({
  content: contentString
});

marker.addListener("click", () => {
  infowindow.open(map, marker);
 });


function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

window.initMap = initMap;
