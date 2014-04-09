var zip = null;
var relseseId = null;
var autoDownload = false;

var releases = function (response) {
    var latest = response.data[0];
    zip = latest.zipball_url;
    relseseId = latest.tag_name.match(/[0-9]+\.[0-9]+\.[0-9]+/);

    document.getElementById('download').getElementsByTagName('strong')[0].innerHTML = relseseId;

    if (autoDownload) {
        clearTimeout(autoDownload);
        window.location = zip;
    }
};

$(function () {
    var download = $('#download, #bottom-download');
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
        ga('send', 'event', 'Website', 'Download', this.id);

        if (zip) {
            window.location = zip;
        } else {
            autoDownload = setTimeout(function () {
                window.location = 'https://github.com/csshat/lesshat/releases/latest';
            }, 3000);
        }
    });

    $('#hat [source-subscribe]').each(function (id, form) {
        var subscribe = new SourceSubscribe(form);
        subscribe.onSuccess = function (data) {
            subscribe.form.getElementsByTagName('div')[0].innerHTML = data.message;
            subscribe.form.classList.add('success');
        };
    });

    AdobeEdge.launchComposition('hat');

    // Randm shoutout
    var $loveEl = $('.love');
    $loveEl[Math.floor(Math.random() * $loveEl.length)].classList.add('active');
});
