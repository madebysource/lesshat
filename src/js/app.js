$(function () {
    var download = $('#download');
    var logo = $('#logo');
    var second = $('#second');

    var downloaded = false;

    download.on('mouseover', function () {
        logo.addClass('arrow');
    });
    download.on('mouseout', function () {
        if (!downloaded) {
            logo.removeClass('arrow');
        }
    });
    download.on('click', function () {
        download.addClass('downloaded');
        logo.addClass('downloaded');
        downloaded = true;
        setTimeout(function () {
            second.addClass('active');
            $('html, body').animate({
                scrollTop: second.offset().top - (window.innerHeight - 360) / 2,
            }, 300);
            setTimeout(function () {
                AdobeEdge.getComposition('hat').getStage().play();
            }, 300);
            setTimeout(function () {
                second.find('input').focus();
            }, 3800);
        }, 300);
    });

    $('#hat [source-subscribe]').each(function (id, form) {
        var subscribe = new SourceSubscribe(form);
        subscribe.onSuccess = function (data) {
            subscribe.form.getElementsByTagName('div')[0].innerHTML = data.message;
            subscribe.form.classList.add('success');
        };
    });

    AdobeEdge.launchComposition('hat');
});
