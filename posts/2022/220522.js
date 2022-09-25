let slides_220522a = JSON.stringify([
    ['/images/2022/06/20220620_194536.jpg','Can mice have heart attacks?']
])

let slides_220522b = JSON.stringify([
    ['/images/2022/05/20220522_072503.jpg','A temporary cage while I figure out how I want to settle this.'],
    ['/images/2022/05/20220522_081422.jpg','I have a feeling June isn&apos;t going to let this rest.'],
    ['/images/2022/05/20220522_105606.jpg','Feeling confirmed.']
])

let slides_220522c = JSON.stringify([
    ['/images/2022/05/20220522_110109.jpg','Be free little mouse.']
])

content.innerHTML = `\
    <h1>A Mouse</h1>\
    <h5>Sunday May 22 2022</h5>\
    <br>\
    <p>Cats are cruel.</p>\
    <br>\
    <p>It was about 2am that I was awoke by the cats making noise under and around my\
    bed. I heard the squeek of a mouse and knew what they were up to. I didn't pay it\
    much mind. Cats hunt mice, it's a thing. They caught at least one already in this\
    house so I went back to sleep knowing that would be the end of it in a minute or \
    so.</p>\
    <br>\
    <p>When I got up in the morning I discovered I was incorrect. Instead of a cat
    gifting me with a dead mouse, I found this.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220522a}'></div>
    <br>\
    <p>If the cat's aren't going to finish the job then I feel like the mouse has\
    earned a place in the house having endured what must have been a pretty rough \
    night.</p>\
    <br>\
    <p>I set the mouse up with some food, water, and bedding. I put the bin up where I \
    hoped the cats wouldn't notice it. On top of the pellet stove is a place they've never \
    been interested in spending time before so that's where I put it. Of course cat's have \
    very good senses and they figured it out pretty quick.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220522b}'></div>
    <br>\
    <p>Well, this isn't going to work out and I'm not interested in having a constant \
    temptation in the house for the cats. So I set the mouse outside and let it figure out \
    where to go from here.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220522c}'></div>
    <br>\
    <p>If the mouse comes back in the house; It's on it's own.</p>\
    <br>\
`