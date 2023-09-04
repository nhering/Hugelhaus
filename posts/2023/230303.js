let slides_230303a = JSON.stringify([
    ['/images/2023/03/20230303_105701.jpg','In its temporary configuration where everything was just sitting on folding tables.'],
    ['/images/2023/03/20230304_115812.jpg','First take everything down so we can paint.'],
    ['/images/2023/03/20230305_104934.jpg','The door will get painted too eventually.'],
    ['/images/2023/04/20230409_101846_edit.jpg','Getting closer.']
])

let slides_230303b = JSON.stringify([
    ['/images/2023/03/20230314_152012.jpg',''],
    ['/images/2023/03/20230314_152526.jpg',''],
    ['/images/2023/03/20230314_153222.jpg',''],
    ['/images/2023/03/20230314_153317.jpg',''],
    ['/images/2023/03/20230315_084914.jpg',''],
    ['/images/2023/03/20230315_105913.jpg','']
])

content.innerHTML = `\
    <h1>Entertainment Wall Phase 1</h1>\
    <h5>Friday March 03 2023</h5>\
    <br>\
    <p>Time to upgrade the entertainment situation.</p>\
    <br>\
    <p>Now that my son has been here for a couple months and we had
    bought a T.V., speakers, WII U, and a Switch; it seemed like a 
    good time to upgrade the presentation of these things. I had an
    idea of what I wanted this whole thing to look like. I wanted to
    paint the wall behind the T.V. a dark color, then hang a full
    wall curtain to make it feel a bit more like a theater. This was
    going to have to happen in phases.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230303a}'></div>
    <br>\
    <p>I had run my Onewheel into the wall a while back, so now it's time
    to patch that.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230303b}'></div>
`