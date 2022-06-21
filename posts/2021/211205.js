let slides_211205a = JSON.stringify([
    ['/images/2021/12/20211205_153207.jpg','This post looks like it would work well.']
])

let slides_211205b = JSON.stringify([
    ['/images/2021/12/20211205_153236.jpg','The rope started off pretty bright white.'],
    ['/images/2021/12/20211205_171758.jpg','I soaked the rope to make it easier to dye.']
])

let slides_211205c = JSON.stringify([
    ['/images/2021/12/20211212_134101.jpg','The boards in place over the notches.'],
    ['/images/2021/12/20211212_145413.jpg','Looks like June is interested.'],
    ['/images/2021/12/20211212_152711.jpg','I don&apos;t think I have enough rope. But I do have a whole lot of twine.'],
    ['/images/2022/01/20220101_163518.jpg','Looks pretty good with the twine.']
])

content.innerHTML = `\
    <h1>Scratching Post</h1>\
    <h5>Sunday December 05 2021</h5>\
    <br>\
    <p>I thought I'd make a permanent scratching post.</p>\
    <br>\
    <p>My friends gave me the idea to use a post in the house and wrap it \
    to make a scratching post. Since I had a post, I thought I'd do the \
    same.</p>\
    <br>\
    <div class='slides' data-sources='${slides_211205a}'></div>
    <br>\
    <p>Because the post had notches, I decided to attach a couple pieces of \
    wood to make it even for the rope. I also decided to lightly dye the rope \
    so it wouldn't be quite so bright. I also painted the ends of the wood \
    where the rope would might not completely hide them.</p>\
    <br>\
    <div class='slides' data-sources='${slides_211205b}'></div>
    <br>\
    <p>It was a rather tedious task wrapping the post. I felt kind of silly, \
    but there's really no other way to do this alone than to walk around the \
    post with the twine until it's all wrapped. The process made me dizzy after \
    a few laps so I had to do it in shifts.</p>\
    <br>\
    <div class='slides' data-sources='${slides_211205c}'></div>
    <br>\
`