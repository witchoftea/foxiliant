window.addEventListener('scroll', function() {
    var underbody = document.getElementById('underbody');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        underbody.style.display = 'block';
    } else {
        underbody.style.display = 'none';
    }
});