
let data = {
    cases: []
};

function parseOnLoad(then) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            data = JSON.parse(req.responseText);
            then();
        }
    };
    req.open("GET", "data.json");
    req.send();
}

// **********
// Temporary test functions to lay stuff out on page load

function layoutWorkPreviewTest() {
    let parent = document.getElementById('case-container');
    for (let i=0; i<data.cases.length; i++) {
        // console.log(i);
        layoutWorkPreviewTile(parent, i, data.cases[i]);
    }
}

function layoutIndexTest() {
    let parent = document.getElementById('case-container');
    for (let i=0; i<3; i++) {
        data.cases[i].platform
    }
    layoutWebTile(parent, data.cases[0]);
    layoutAppTile(parent, data.cases[1]);
}

function layoutProjectPageTest() {
    let hash = window.location.hash;
    if (hash !== "") {
        let index = parseInt(hash.substr(1));
        layoutProjectPage(index, data.cases[index]);
    } else {
        window.location.href = 'work.html';
    }
}

// *********

function layoutWebTile(parent, data) {
    parent.innerHTML += `<div class='web-case'><img src='' alt='' class='web-case-cover-img'/><div class='case-preview'><div class='text'><h2>${data.title}</h2><h4>${data.tech}</h4><h3>${data.introduction}</h3><div class='links'><a href=data.link>Visit Site</a><a>View case study</a></div></div><img src='' alt=''/></div></div>`;
}

function layoutAppTile(parent, data) {
    parent.innerHTML += `<div class='mobile-case'><div class='case-preview'><div class='text'><h2>${data.title}</h2><h4>${data.tech}</h4><h3>${data.introduction}</h3><div class='links'><a>Download App</a><a>View case study</a></div></div><img src='' alt=''/></div></div>`;
}

function layoutWorkPreviewTile(parent, index, data) {
    let linkText = data.platform === "Mobile" ? "Download App" : "Visit Site";
    let projectLink = 'project.html#' + index;
    let imageSource = "./img/" + data.previewImage;

    parent.innerHTML += `<div class='default-case-preview'><a href='${projectLink}' class='image-link'><img src='${imageSource}' alt='' class='default-case-preview-image'/></a><h2>${data.title}</h2><h4>${data.tech}</h4><a>${linkText}</a></div>`;
}

function layoutProjectPage(index, data) {
    // TODO - This opacity fade needs to be called once data is received, is funky rn
    document.getElementById('full-case-container').style.opacity = "1";

    // console.log('layout');
    let obj = data;

    document.getElementById('title').innerHTML = obj.title;
    document.getElementById('tech').innerHTML = obj.tech;
    // document.getElementById('icon').src = retrieveImageSource(obj.icon);

    let link = document.getElementById('external-link');
    link.href = obj.link;
    link.innerHTML = obj.link;

    // document.getElementById('cover-image').src = retrieveImageSource(obj.cover);
    document.getElementById('purpose-text').innerHTML = obj.body;

    let paletteContainer = document.getElementById('palette-container');
    for (let i=0; i<obj.colors.length; i++) {
        paletteContainer.innerHTML += `<div class='color-wrapper'><div class='color' style='background-color: ${obj.colors[i]}'></div><h5>${obj.colors[i]}</h5></div>`;
    }

    let caseBody = document.getElementById('full-case-container');
    for (let i=0; i<obj.productImages.length; i++) {
        caseBody.innerHTML += layoutProjectImageTile(obj.productImages[i]);
    }

}

function layoutProjectImageTile(obj) {
    //This is stupid and needs to be fixed
    let path = "./productImg/" + obj.source;
    let imgClass = "";
    let containerClass = "";
    if (obj.type === "mobile") {
        imgClass = "full-case-mobile-image";
        containerClass = "full-case-mobile-image-container";
    } else {
        imgClass = "full-case-web-image";
        containerClass = "full-case-web-image-container";
    }

    return `<div class='${containerClass}'><img src='${path}' alt='' class='${imgClass}'><p>${obj.caption}</p></div>`;
}