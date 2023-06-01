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


const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('img-active');
        } else {
            image.classList.remove('img-active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.getElementById('previousButton').addEventListener('click', previousImage);
document.getElementById('nextButton').addEventListener('click', nextImage);

showImage(currentIndex);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        previousImage();
    }
});