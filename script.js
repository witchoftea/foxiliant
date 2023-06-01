window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var contentSections = document.querySelectorAll('.content-section');

    if (scrollTop === 0) {
        header.style.backgroundColor = 'rgba(20, 20, 20, 0.2)';
        contentSections.forEach(function (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.style.opacity = '1';
            }
        });
    } else {
        header.style.backgroundColor = 'rgba(20, 20, 20, 1)';
    }
});