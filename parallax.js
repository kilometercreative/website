
WINDOW_HEIGHT = window.innerHeight;
container = document.getElementById("parallax-container");

layers = [
    {
        layer: document.getElementById("px-1"),
        startingOffset: 87,
        scrollSpeed: 0.2,
        opacitySpeed: 1.4
    },
    {
        layer: document.getElementById("px-2"),
        startingOffset: 77,
        scrollSpeed: 0.5,
        opacitySpeed: 1.2
    },
    {
        layer: document.getElementById("px-3"),
        startingOffset: 72,
        scrollSpeed: 0.6,
        opacitySpeed: 1.08
    },
    {
        layer: document.getElementById("px-4"),
        startingOffset: 55,
        scrollSpeed: 1,
        opacitySpeed: 1
    }
].map((l)=>Object.assign(l, {image: l.layer.getElementsByTagName("img")[0]}));

console.log(layers);

function parallaxOnScroll() {
    let n = normalizeScrollPosition();
    for (let i=0; i<layers.length; i++) {
        let l = layers[i];
        l.image.style.opacity = (1 - n * l.opacitySpeed).toString();
        l.layer.style.transform = `translateY(${l.startingOffset+30*n*l.scrollSpeed}vh)`;
    }
}

function normalizeScrollPosition() {
    let d = container.scrollTop / WINDOW_HEIGHT;
    return d < 1 ? d : 1;
}
