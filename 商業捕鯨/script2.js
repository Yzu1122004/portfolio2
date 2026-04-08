document.addEventListener('scroll', function () {
    const boat = document.querySelector('.boat');
    const whale = document.querySelector('.whale');
    const p1 = document.querySelector('.seatext p:nth-child(1)');
    const boatPosition = boat.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (boatPosition > screenPosition / 1000000000) {
        p1.classList.remove('textin');
        p1.classList.add('textout');
    } else {
        p1.classList.add('textin');
        p1.classList.remove('textout');
        boat.classList.add('boat2');
        boat.classList.remove('boat');
        whale.style.display = 'none';
        boat.addEventListener('click', function () {
            boat.style.backgroundImage = "url('./image/漏網.png')";
            whale.style.display = 'block';
            whale.classList.remove('whale');
            whale.classList.add('whale2');

            whale.addEventListener('click', function () {
                const images = ["./image/鯨魚Q.png", "./image/鯨魚u.png", "./image/鯨魚i.png"];
                const randomIndex = Math.floor(Math.random() * images.length);
                const randomImage = images[randomIndex];
                whale.style.backgroundImage = `url('${randomImage}')`;
                setTimeout(function () {
                    whale.style.backgroundImage = "url('./image/鯨魚.png')";
                }, 2000);
            });
        });
    }
});

document.addEventListener('scroll', function () {
    const p1 = document.querySelector('.seatext p:nth-child(1)');
    const p2 = document.querySelector('.seatext p:nth-child(2)');
    const p1Position = p1.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    const distanceFromViewportBottom = p1Position - screenPosition + p1.offsetHeight;
    if (p1Position > screenPosition / 6) {
        p2.classList.remove('textin');
        p2.classList.add('textout');
    } else {
        p2.classList.add('textin');
        p2.classList.remove('textout');
    }
});

document.addEventListener('scroll', function () {
    const p2 = document.querySelector('.seatext p:nth-child(2)');
    const w = document.querySelector('.line');
    const p2Position = p2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    const distanceFromViewportBottom = p2Position - screenPosition + p2.offsetHeight;
    if (p2Position > screenPosition / 4) {
        w.classList.remove('linein');
        w.classList.add('lineout');
    } else {
        w.classList.add('linein');
        w.classList.remove('lineout');
    }
});