document.addEventListener('DOMContentLoaded', function () {
    if (typeof WOWSlider != 'undefined') {
        const slider = new WOWSlider({
            container: 'wowslider-container1', 
            width: 640, 
            height: 360, 
            effect: 'box', 
            delay: 3000 
        });
        slider.init();
    } else {
        console.error('wowslider library not found');
    }
});


<link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/wowslider.css">
  <script async src="js/script.js"></script>
  <script async src="js/wowslider.js"></script>

  <script async
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript">
  </script>
