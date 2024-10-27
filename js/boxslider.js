document.addEventListener('DOMContentLoaded', function () {
    
    if (window.WOWSlider) {
        var slider = new wowslider({
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
