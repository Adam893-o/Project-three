function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: IIT {lat: 41.831299, lng: -87.627274 };
    zoom: 15,
    mapTypeId: "satellite",
    });

  map.setTilt(45);
});

{
  // Load the required Google Maps libraries
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Set the map's initial position and options
  const myLatlng = {lat: 41.831299, lng: -87.627274 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
    mapId: "4504f8b37365c3d0",
  });

  // Set up the marker
  const contentstring '<h1>Illinois institute of technology</h1><p>IIT is a private university that is famous for its architecture major as well as majoring in technology.</p>'
  const infowindowSixFlags = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "IIT",
  });
   const marker = new AdvancedMarkerElement({
      map,
      position: {lat: 41.831299, lng: -87.627274 };
  });

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

// Call the function to initialize the map
window.initMap = initMap;
