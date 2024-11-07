let map, infoWindow;

function initMap() {
  // Initialize the map with terrain settings and a polygon
  map = new google.maps.Map(document.getElementById("canvas"), {
    zoom: 5,
    center: { lat: 24.886, lng: -70.268 },
    mapTypeId: "terrain",
  });

  
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
  
  
  infoWindow = new google.maps.InfoWindow();
  
  
  init();
}

function init() {
  const myLocation = new google.maps.LatLng(41.835117, -87.627130);

  // Set up map options
  map.setOptions({
    center: myLocation,
    zoom: 15,
    tilt: 45,
  });

  // Define IIT location marker
  const iitLocation = { lat: 41.831299, lng: -87.627274 };
  const marker = new google.maps.Marker({
    position: iitLocation,
    map: map,
    title: "Illinois Institute of Technology",
  });

  // Define the content of the info window
  const contentString = `
    <div style="color: black;">
      <h1>Illinois Institute of Technology</h1>
      <p>IIT is a private university known for its architecture and technology programs.</p>
    </div>`;


  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  // Center the map on the marker after a map center change
  map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
}

// Handle Geolocation errors
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: Current Location Cannot Be Found."
  );
  infoWindow.open(map);
}

// Assign the initMap function to window to make it globally accessible
window.initMap = initMap;
