let slides_220417 = JSON.stringify([
    ['/images/2022/04/20220417_145232.jpg','Start with some salvaged 2x4 lumber.'],
    ['/images/2022/04/20220417_145654.jpg','Cut up all neat and tidy.'],
    ['/images/2022/04/20220417_150147.jpg','Get them ready for painting.'],
    ['/images/2022/04/20220417_161831.jpg','Now apply paint.'],
    ['/images/2022/04/20220417_170816.jpg','After the paint dried.'],
    ['/images/2022/06/20220605_081253.jpg','I painted it again with green once I had it all togther.']
])

content.innerHTML = `\
    <h1>Cat Barrier</h1>\
    <h5>Sunday June 17 2022</h5>\
    <br>\
    <p>Cats don't respect your space when you're working on a project.</p>\
    <br>\
    <p>This is something I decide to make as a preventative measure. I don't have \
    any current project going that would require keeping the cats away from the work. \
    But, I know this will come up and so I decided some solution would be in order.</p>\
    <br>\
    <p>I decided to make a barrier that I could easily place in the hallway, keeping \
    the cats either in the bedroom section of the house or out of it depending on where \
    the work was taking place.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220417}'></div>
`