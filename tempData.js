
//Storing everything as a JS object, but it should be moved over to a database and imported as JSON instead, not into setting that up in AWS right now

//Images will store just the file name, the image URL will be generated on layout to retrieve it from the project directory -> or not? Not sure what the best way to do this is

data = {
    cases: [
        {
            id: "01",
            title: "Plus Package",
            platform: "Web",
            tech: "/web/vanilla",
            date: "Winter 2018",
            colors: [
                "#3fffb5",
                "#2e2d4d",
                "#E6E6E6"
            ],
            icon: "plus_package_icon.png",
            coverImage: "plus_package_cover.png",
            primaryImage: "plus_package_cover.png",
            secondaryImage: "plus_package_preview.png",
            previewImage: "plus_package_preview.png",
            productImages: [
                {source: "plus_package_landing.png", type: "web"},
                {source: "plus_package_page_1.png", type: "web"},
                {source: "plus_package_page_2.png", type: "web"},
                {source: "plus_package_icon_iterations.png", type: "square"},
                {source: "plus_package_sticker.png", type: "square"},
            ],
            introduction: "This is a filler introduction and holy moly does it really just get your britches full of stitches. You should check out this rad case study that just absolutely takes the cake.",
            body: "Now that you've clicked on this case study you can see how it is just full of wonder, every single person who has ever lived has unanimously agreed that this product is the single greatest thing to exist. Now that might sound a tad vain, but it is absolutely correct.",
            link: "https://www.pluspackage.io"
        },
        {
            title: "LANDR Co.",
            platform: "Mobile",
            tech: "/mobile/iOS/swift/spritekit",
            date: "Winter 2018",
            colors: [
                "#AA4444",
                "#AA9944",
                "#AAAA99"
            ],
            icon: "landr_icon.png",
            primaryImage: "primary.png",
            secondaryImage: "secondary.png",
            images: [
                {source: "first.png", caption: "first image"},
                {source: "second.png", caption: "second image"},
                {source: "third.png", caption: "third image"},
                {source: "fourth.png", caption: "fourth image"},
            ],
            introduction: "This is a filler introduction and holy moly does it really just get your britches full of stitches. You should check out this rad case study that just absolutely takes the cake.",
            body: "Now that you've clicked on this case study you can see how it is just full of wonder, every single person who has ever lived has unanimously agreed that this product is the single greatest thing to exist. Now that might sound a tad vain, but it is absolutely correct.",
            link: "https://www.pluspackage.io"
        },
        {
            title: "Tileform",
            platform: "Mobile",
            tech: "/mobile/cross-platform/unity/",
            date: "Fall 2018",
            colors: [
                "#AA4444",
                "#AA9944",
                "#AAAA99"
            ],
            icon: "tileform_icon.png",
            primaryImage: "primary.png",
            secondaryImage: "secondary.png",
            logo: "",
            images: [
                {source: "first.png", caption: "first image"},
                {source: "second.png", caption: "second image"},
                {source: "third.png", caption: "third image"},
                {source: "fourth.png", caption: "fourth image"},
            ],
            introduction: "This is a filler introduction and holy moly does it really just get your britches full of stitches. You should check out this rad case study that just absolutely takes the cake.",
            body: "Now that you've clicked on this case study you can see how it is just full of wonder, every single person who has ever lived has unanimously agreed that this product is the single greatest thing to exist. Now that might sound a tad vain, but it is absolutely correct.",
            link: "https://www.pluspackage.io"
        },
        {
            title: "Polarity - the game",
            platform: "Mobile",
            tech: "/mobile/iOS/swift/spritekit",
            date: "Winter 2018",
            colors: [
                "#AA4444",
                "#AA9944",
                "#AAAA99"
            ],
            icon: "polarity_icon.png",
            primaryImage: "primary.png",
            secondaryImage: "secondary.png",
            images: [
                {source: "first.png", caption: "first image"},
                {source: "second.png", caption: "second image"},
                {source: "third.png", caption: "third image"},
                {source: "fourth.png", caption: "fourth image"},
            ],
            introduction: "This is a filler introduction and holy moly does it really just get your britches full of stitches. You should check out this rad case study that just absolutely takes the cake.",
            body: "Now that you've clicked on this case study you can see how it is just full of wonder, every single person who has ever lived has unanimously agreed that this product is the single greatest thing to exist. Now that might sound a tad vain, but it is absolutely correct.",
            link: "https://www.pluspackage.io"
        },
    ]
};