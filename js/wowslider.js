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
        console.error('WOWSlider library not found');
    }
});
