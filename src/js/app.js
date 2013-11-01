window.onload = function () {
    var download = document.getElementById('download');
    var logo = document.getElementById('logo');

    var downloaded = false;

    download.addEventListener('mouseover', function () {
        logo.classList.add('arrow');
    });
    download.addEventListener('mouseout', function () {
        if (!downloaded) {
            logo.classList.remove('arrow');
        }
    });
    download.addEventListener('click', function () {
        download.classList.add('downloaded');
        logo.classList.add('downloaded');
        downloaded = true;
    });
};
