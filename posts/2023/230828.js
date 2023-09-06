let slides_230828 = JSON.stringify([
    ['/images/2023/08/20230828_171125.jpg','The fence made it difficult to mow and keep clean.'],
    ['/images/2023/08/20230828_171131.jpg','Plus, the weed hid some more burried trash.'],
    ['/images/2023/08/20230828_171955.jpg','Goodbye panel.'],
    ['/images/2023/08/20230828_172302.jpg','Goodbye post.'],
    ['/images/2023/08/20230828_172427.jpg','Hello trash hidden under fence.'],
    ['/images/2023/08/20230828_174031.jpg','That looks better.']
])

content.innerHTML = `\
    <h1>Vinyl Fence Removal (continued)</h1>\
    <h5>Monday August 28 2023</h5>\
    <br>\
    <p>Time to finish removing the vinyl fence.</p>\
    <br>\
    <p>Last October I removed one of the two fence panels. Now
    it's time to take the other one down.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230828}'></div>
`