window.addEventListener('scroll', revealOnScroll);
function revealOnScroll() {
    var elements = document.querySelectorAll('.content');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', function() {
    const whale = document.querySelector('.whale');

    whale.addEventListener('animationend', function(event) {
        if (event.animationName === 'whaledeg') {
            whale.style.transform = 'rotate(90deg)';
            startSinkAnimation();
        }
    });

    function startSinkAnimation() {
        whale.style.animation = 'sink 30s linear forwards';
    }

    function checkWhalePosition() {
        const whaleRect = whale.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceToBottom = windowHeight - whaleRect.bottom;
        if (distanceToBottom <= 0) {
            whale.style.animationPlayState = 'paused';
        } else {
            whale.style.animationPlayState = 'running';
        }
        requestAnimationFrame(checkWhalePosition);
    }
    requestAnimationFrame(checkWhalePosition);
});