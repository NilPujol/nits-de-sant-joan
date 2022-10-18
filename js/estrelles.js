let sky = document.querySelector('.sky');

function createDiv(size) {

    let circle = document.createElement('div');
    circle.classList.add('circle');

    let randRange5 = Math.floor(Math.random() * 5) + 1;
    circle.classList.add(`blink_${randRange5}`);

    let widthAndHeight = random(size, 'px');
    circle.style.height = circle.style.width = widthAndHeight;

    circle.style.left = random(window.innerWidth, 'px');
    circle.style.top = random(window.innerHeight, 'px');

    circle.style.opacity = Math.random();

    sky.appendChild(circle);
}
let [starSlider] = document.querySelectorAll('.slider');
starSlider.value = localStorage.getItem("numero");
let size = localStorage.getItem("diametre");

starSlider.addEventListener('change', () => {
    paintStars(starSlider.value, size);
    localStorage.setItem("numero", starSlider.value)
});



function paintStars(stars, size) {
    while (sky.firstChild) {
        sky.removeChild(sky.firstChild);
    }
    for (let i = 0; i < stars; i++) {
        createDiv(size);
    }
}


function random(range, unit) {
    let randNum = Math.floor(Math.random() * range) + 1;
    return `${randNum}${unit}`;
}

paintStars(starSlider.value, size);