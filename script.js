window.addEventListener('scroll', function() {
    var underbody = document.getElementById('underbody');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        underbody.style.display = 'block';
    } else {
        underbody.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)'; /* Прозрачный фон */
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; /* Непрозрачный фон */
    }
});