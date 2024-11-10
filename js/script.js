let map, infoWindow;

function initMap() {
  // Initialize the map with terrain settings and a polygon
  map = new google.maps.Map(document.getElementById("canvas"), {
    zoom: 5,
    center: { lat: 24.886, lng: -70.268 },
    mapTypeId: "terrain",
  });

  const bermudaSquare = new google.maps.Polygon({
    paths: squareCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaSquare.setMap(map);

  infoWindow = new google.maps.InfoWindow();

  init();
}

function init() {
  // Request geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const myLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

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
          icon: 'media/bugs-bunny-chuck-jones.png'
        });

        const contentString = `
          <div style="color: black;">
            <h1>Illinois Institute of Technology</h1>
            <p>Ehh, what's up doc? This is IIT. A private university known for its amazing architecture major and other technology programs. I wish all IIT students a very pleasent experiance.</p>
          </div>`;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });

        map.addListener("center_changed", () => {
          window.setTimeout(() => {
            map.panTo(marker.getPosition());
          }, 3000);
        });
      },
      (error) => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: Current Location Cannot Be Found."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;
