
WINDOW_HEIGHT = window.innerHeight;
container = document.getElementById("parallax-container");

layers = [
    layer_1 = {
        image: document.getElementById("px-1"),
        speed: 1.4
    },
    layer_2 = {
        image: document.getElementById("px-2"),
        speed: 1.2
    },
    layer_3 = {
        image: document.getElementById("px-3"),
        speed: 1.08
    },
    layer_4 = {
        image: document.getElementById("px-4"),
        speed: 1
    }
];

function parallaxOnScroll() {
    let n = normalizeScrollPosition();
    for (i=0; i<layers.length; i++) {
        layers[i].image.style.opacity = (1 - n * layers[i].speed).toString();
    }
}

function normalizeScrollPosition() {
    let d = container.scrollTop / WINDOW_HEIGHT;
    return d < 1 ? d : 1;
}
