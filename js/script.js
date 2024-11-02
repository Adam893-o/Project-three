async function initMap() {
  // Load the required Google Maps libraries
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Set the map's initial position and options
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
    mapId: "YOUR_MAP_ID", // Replace with your actual map ID if you have one, or remove this line if unnecessary
  });

  // Marker and InfoWindow content
  const contentString =
    '<div id="content">' +
    '<h1>Uluru (Ayers Rock)</h1>' +
    "<p><b>Uluru</b>, also referred to as Ayers Rock, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia.</p>" +
    '<p><a href="https://en.wikipedia.org/wiki/Uluru">Learn more on Wikipedia</a></p>' +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });

  // Set up the marker
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Uluru (Ayers Rock)",
  });

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
