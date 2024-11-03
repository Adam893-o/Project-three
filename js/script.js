$(document).ready(function(){
  $('.boxslider').bxSlider({
    mode: 'fade',
    slideWidth: 600,
    captions: true,
  });
});
async function initMap() {
  // Load the required Google Maps libraries
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Set the map's initial position and options
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
    mapId: "4504f8b37365c3d0",
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
