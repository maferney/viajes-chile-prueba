$(document).ready(function () {
    $('#carouselExampleIndicators').carousel({
        interval: 3000
    });
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $('button.btn.btn-info').click(function () {
        alert('Su mensaje se ha enviado con éxito');
    });
});
