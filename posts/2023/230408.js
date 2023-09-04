let slides_230408 = JSON.stringify([
    ['/images/2023/04/20230408_084611.jpg','Put the top shelf in place in order to gauge where the others should be placed.'],
    ['/images/2023/04/20230408_090435.jpg','Ziptie two grow lights per shelf.'],
    ['/images/2023/04/20230408_093318.jpg','Ziptie two grow lights per shelf.'],
    ['/images/2023/04/20230408_093857.jpg','About 13" between shelves.'],
    ['/images/2023/04/20230408_093913.jpg','About 13" between shelves.'],
    ['/images/2023/04/20230408_093918.jpg','About 13" between shelves.'],
    ['/images/2023/04/20230408_093929.jpg','About 13" between shelves.'],
    ['/images/2023/04/20230408_135824.jpg','About 13" between shelves.'],
    ['/images/2023/04/20230408_140926.jpg','The boot trays are useful for watering. Fill the tray and the plants get water via wicking.'],
    ['/images/2023/04/20230408_141903.jpg','Wrap in reflective mylar to improve efficiency of the grow lights.'],
    ['/images/2023/04/20230408_142753.jpg','The canvas keeps the heat in and makes it look a little nicer.'],
    ['/images/2023/04/20230408_151910.jpg','The canvas keeps the heat in and makes it look a little nicer.'],
    ['/images/2023/04/20230408_151917.jpg','A neat fold keeps everything well contained.'],
    ['/images/2023/04/20230408_151919.jpg','The safety pins and hook made for an easy way to open and close the system.'],
    ['/images/2023/04/20230417_185101.jpg','The lights are a bit annoying to look at, the canvas helps there.'],
    ['/images/2023/04/20230417_192507.jpg','I can fit 40 3" peat pots per tray giving an overall yeild of 80 per rack.']
])

content.innerHTML = `\
    <h1>Seed Growing Station</h1>\
    <h5>Saturday April 08 2023</h5>\
    <br>\
    <p>I've been wanting to start plants from seed for years.</p>\
    <br>\
    <p>The construction was pretty easy and not too expensive either. I 
    used a small wire rack, four 12" square grow lights, a timer, a couple
    boot trays, some mylar reflective material, and a bunch of zip ties.</p>\
    <br>\
    <p>If this goes well, I could pretty easily scale it up by three times
    by adding one more shelf to this rack and then duplicate the whole 
    system.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230408}'></div>
`