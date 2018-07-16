
function scrollToElement(id) {
    let item = document.getElementById(id);
    let dy = item.offsetTop;
    window.scrollTo(0, dy);
}