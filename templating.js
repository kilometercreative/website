let data = [];

function parseOnLoad(buildPage) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        // do only if response object exists
        if (req.readyState === 4 && req.response) {
            let response = JSON.parse(req.response);

            // don't fail, just return null if cases aren't found
            data = response.cases && response.cases.map((dataCase, index) => {
                dataCase.id = index;
                return dataCase;
            });

            buildPage();
        }
    };
    req.open("GET", "data.json");
    req.send();
}


// **********
// Temporary test functions to lay stuff out on page load

function layoutIndex(numberToShow) {
    let parent = document.getElementById('case-container');
    for (let i = 0; i < numberToShow; i++) {
        if (data[i].platform === "Web")
            layoutWebTile(parent, data[i]);
        else if (data[i].platform === "Mobile")
            layoutAppTile(parent, data[i]);
    }
}

function layoutProjectPageTest() {
    let hash = window.location.hash;
    if (hash) {
        let index = parseInt(hash.substr(1)); // cut off the "#"
        layoutProjectPage(index, data[index]);
    } else {
        window.location.href = 'work.html';
    }
}

function layoutWorkPreviewTest() {
    let parent = document.getElementById('case-container');
    for (let i = 0; i < data.length; i++) {
        layoutWorkPreviewTile(parent, data[i]);
    }
}

// *********

function layoutWebTile(parent, data) {
    parent.innerHTML +=
        "<div class='web-case'>" +
            "<img src='productImg/" + data.primaryImage + "' alt='' class='web-case-cover-img'/>" +
            "<div class='case-preview'>" +
                "<div class='text'>" +
                    "<h2>" + data.title + "</h2>" +
                    "<h4>"+ data.tech + "</h4>" +
                    "<h3>" + data.introduction + "</h3>" +
                    "<div class='links'>" +
                        "<a href='" + data.link + "'>Visit Site</a>" +
                        "<a href='project.html#" + data.id + "'>View case study</a>" +
                    "</div>" +
                "</div>" +
                "<img src='productImg/" + data.secondaryImage + "' alt='' class='web-case-alt-img'/>" +
            "</div>" +
       "</div>";
}

function layoutAppTile(parent, data) {
    parent.innerHTML +=
        "<div class='mobile-case'>" +
            "<div class='case-preview'>" +
                "<div class='text'>" +
                    "<h2>" + data.title +  "</h2>" +
                    "<h4>" + data.tech + "</h4>" +
                    "<h3>" + data.introduction + "</h3>" +
                    "<div class='links'>" +
                        "<a>Download App</a>" + // TODO
                        "<a href='project.html#" + data.id + "'>View case study</a>" +
                    "</div>" +
                "</div>" +
                "<img src='productImg/" + data.primaryImage + "' alt='' class='mobile-case-cover-img'/>" +
            "</div>" +
        "</div>";
}

function layoutWorkPreviewTile(parent, data) {
    linkText = data.platform === "Mobile" ? "Download App" : "Visit Site";
    projectLink = 'project.html#' + data.id;
    imageSource = 'productImg/' + data.previewImage;

    parent.innerHTML +=
        "<div class='default-case-preview'>" +
            "<a href='" + projectLink + "' class='image-link'>" +
                "<img src='" + imageSource + "' alt='' class='default-case-preview-image'/>" +
            "</a>" +
            "<h2>" + data.title + "</h2>" +
            "<h4>" + data.tech + "</h4>" +
            "<a href='" + data.link + "'>" + linkText + "</a>" +
        "</div>";
}

function layoutProjectPage(index, data) {
    // TODO - This opacity fade needs to be called once data is received, is funky rn
    document.getElementById('full-case-container').style.opacity = "1";

    console.log('layout');
    let obj = data;

    document.getElementById('icon').src = './productImg/' + obj.icon;
    document.getElementById('title').innerHTML = obj.title;
    document.getElementById('tech').innerHTML = obj.tech;
    // document.getElementById('icon').src = retrieveImageSource(obj.icon);

    let link = document.getElementById('external-link');
    link.href = obj.link;
    link.innerHTML = obj.link;

    // document.getElementById('cover-image').src = retrieveImageSource(obj.cover);
    document.getElementsByClassName('purpose')[0].innerHTML = obj.body.map((section) => {
       return "<h2>"+section.title+"</h2><p class='purpose-text'>" + section.text + "</p>"
    }).join("");

    document.getElementById('cover-image').src = './productImg/' + obj.coverImage;

    let paletteContainer = document.getElementById('palette-container');
    for (i=0; i<obj.colors.length; i++) {
        paletteContainer.innerHTML +=
            "<div class='color-wrapper'>" +
                "<div class='color' style='background-color: " + obj.colors[i] + "'></div>" +
                "<h5>" + obj.colors[i] + "</h5>" +
            "</div>";
    }

    let caseBody = document.getElementById('project-image-container');
    for (let i = 0; i < obj.productImages.length; i++) {
        caseBody.innerHTML += layoutProjectImageTile(obj.productImages[i]);
    }

}

function layoutProjectImageTile(obj) {

    let path = "./productImg/" + obj.source;
    imgClass = "";
    containerClass = "";
    if (obj.type === "mobile") {
        imgClass = "full-case-mobile-image";
        return(
            "<img src='" + path + "' alt='' class='" + imgClass + "'/>"
        );
    } else if (obj.type === "square") {
        imgClass = "full-case-square-image";
        return(
            "<img src='" + path + "' alt='' class='" + imgClass + "'/>"
        );
    } else {
        imgClass = "full-case-web-image";
        containerClass = "full-case-web-image-container";
    }

    return(
        "<div class='" + containerClass + "'>" +
            "<img src='" + path + "' alt='' class='" + imgClass + "'/>" +
        "</div>"
    );
}