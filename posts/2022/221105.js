let slides_221105a = JSON.stringify([
    ['/images/2022/11/20221105_115403.jpg','Some hobby wood.'],
    ['/images/2022/11/20221105_130144.jpg','Some hobby wood.'],
    ['/images/2022/11/20221105_141810.jpg','And some spray paint.'],
    ['/images/2022/11/20221105_141816.jpg','And some spray paint.'],
])

let slides_221105b = JSON.stringify([
    ['/images/2023/04/20230402_180458.jpg','Weigh it down to prevent racoons from stealing it.'],
    ['/images/2023/04/20230402_180514.jpg','Weigh it down to prevent racoons from stealing it.']
])

content.innerHTML = `\
    <h1>Cat Feeder</h1>\
    <h5>Saturday November 05 2022</h5>\
    <br>\
    <p>An automated feeder for the stray cat.</p>\
    <br>\
    <p>I had recently gone out of town for a couple days and the neighbor\
    offered to feed the cat while I was gone. I appreciated the help and I'm\
    sure the cat appreciates the steady meals.</p>\
    <br>\
    <p>The reality was, I wasn't all that consistent with the time of day I\
    feed it even when I was home. I decided to get the cat a feeder that would\
    ensure it got two small meals a day. This isn't only for the cat, it also\
    helps keep the racoons and other wildlife from eating the cats food.</p>\
    <br>\
    <p>I made a box for the feeder to help protect it from the elements as well\
    lock lock it down a bit. Here are some picture from the construction process.\
    I forgot to take pictures while assembling it.</p>\
    <br>\
    <div class='slides' data-sources='${slides_221105a}'></div>
    <br>\
    <p>Here it is outside. The bricks turned out to be a requirement. The racoons\
    are pretty relentless when it comes to trying to unlock the food inside. They\
    knocked it over and emptied it out once before I added the rubber strap and the\
    bricks to keep them from dragging it around.</p>\
    <br>\
    <p>You can see the marks where they claw at the front of it in an attempt to open\
    it up.</p>\
    <br>\
    <div class='slides' data-sources='${slides_221105b}'></div>
`