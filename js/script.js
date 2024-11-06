let map, infoWindow;

function init(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.835117, -87.627130);
  var mapOptions = {
	center: myLocation,
	zoom: 25,
};


  map.setTilt(45); // Set tilt for the map view

  // Define marker position
  const iitLocation = { lat: 41.831299, lng: -87.627274 };

  // Set up a marker on IIT's location
  const marker = new google.maps.Marker({
    position: iitLocation,
    map: map,
    title: "Illinois Institute of Technology",
  });

  // Define content for the info window
  const contentString = 
    <div style='color black'> </div>
    `<h1>Illinois Institute of Technology</h1>
    <p>IIT is a private university known for its architecture and technology programs.</p>`;

  // Set up info window with content
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  // Open info window when marker is clicked
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  // Center map on marker after a change
  map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 24.886, lng: -70.268 },
    mapTypeId: "terrain",
  });
  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

 const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
}

  // Open info window on marker click
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  // Additional map functionality
  map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.position);
    }, 3000);
  });
}


// Handle Geolocation errors
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: Current Location Cannot Be Found."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

// Assign the initMap function to window to make it globally accessible
window.initMap = initMap;
