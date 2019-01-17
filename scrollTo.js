
function scrollToElement(id) {
    let item = document.getElementById(id);
    let dy = item.offsetTop + ((window.innerWidth <= 480) ? -80 : 0);
    // console.log(dy);
    window.scrollTo(0, dy);
}