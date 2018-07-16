
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
                "#AA4444",
                "#AA9944",
                "#AAAA99"
            ],
            icon: "icon.png",
            primaryImage: "primary.png",
            secondaryImage: "secondary.png",
            previewImage: "preview.png",
            productImages: [
                {source: "first.png", caption: "first image", type: "mobile"},
                {source: "second.png", caption: "second image", type: "mobile"},
                {source: "third.png", caption: "third image", type: "web"},
                {source: "fourth.png", caption: "fourth image", type: "mobile"},
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
            title: "LANDR Co.",
            platform: "Mobile",
            tech: "/mobile/iOS/swift/spritekit",
            date: "Winter 2018",
            colors: [
                "#AA4444",
                "#AA9944",
                "#AAAA99"
            ],
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
            title: "LANDR Co.",
            platform: "Mobile",
            tech: "/mobile/iOS/swift/spritekit",
            date: "Winter 2018",
            colors: [
                "#AA4444",
                "#AA9944",
                "#AAAA99"
            ],
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