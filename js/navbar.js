$(document).ready(function() {
    $('.navbar-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('navbar-btn__active');
        $('.navbar-list').toggleClass('navbar-list__active')
    });
});