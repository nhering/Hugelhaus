let slides_230330a = JSON.stringify([
    ['/images/2023/03/20230330_183218.jpg','The actuall first fire in the burn pit for the year.']
])

let slides_230330b = JSON.stringify([
    ['/images/2023/04/20230402_162655.jpg','The cage was a bit rusty, but folded in a square, it seemed like it would work pretty well.'],
    ['/images/2023/04/20230414_124627.jpg','It did help keep everything burning in one contained area.'],
    ['/images/2023/04/20230414_124630.jpg','I think it took less than an hour to burn all that cardboard and sticks.']
])

content.innerHTML = `\
    <h1>First Burn</h1>\
    <h5>Thursday March 30 2023</h5>\
    <br>\
    <p>First and second burns actually.</p>\
    <br>\
    <p>The first burn was just a little bit of a fire for no reason other than
    to get a fire going. A fire just for the sake of it I guess.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230330a}'></div>
    <br>\
    <p>We had built up a large amount of cardboard over the winter. I thought it
    might be easier to burn it if there were some kind of container to put it in
    as we burn it. That way we wouldn't have to keep pulling from the edges and
    piling anything that wasn't burning in the middle of the fire.</p>\
    <br>\
    <p>The previous owners of the house left behind a pet cage in the weeds to
    the side of the yard. This seemed like it might work for burning in.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230330b}'></div>
    <br>\
    <p>I don't think the cage was really all that necessary. I don't think I'll
    keep it.</p>\
    <br>\
`