let slides_230402 = JSON.stringify([
    ['/images/2023/04/20230402_180421.jpg','Warm Gubbis.'],
    ['/images/2023/04/20230402_180433.jpg','There is an outlet on either side of the portch. That works out nicely for plugging in the heating mat in the cat house.'],
    ['/images/2023/04/20230402_180442.jpg','Warm Gubbis.'],
    ['/images/2023/04/20230402_180458.jpg','The feeder needed some reinforcment to keep the racoons from stealing the food.'],
    ['/images/2023/04/20230402_180514.jpg','You can see where the racoons clawed the front cover trying to pry it open.']
])

content.innerHTML = `\
    <h1>Cat House & Feeder Update</h1>\
    <h5>Tuesday April 02 2023</h5>\
    <br>\
    <p>How are the house and feeder working out?</p>\
    <br>\
    <p>Pretty good as far as I can tell. Gubbis (my son named the stray) seems pretty
    happy and content. There where some days over the winter that got down in the 
    negative degrees, about -20 fahrenheit for a few days. And he spent a lot of time
    in the cat house with the warming mat. So, I'd say this one is a success.</p>\
    <br>\
    <p>The feeder makes it easy for me to keep things on a schedule for him too. The
    racoons were desperately trying to get to the food and at first they succeeded. I
    ended up adding bricks to keep them from dragging it away and a rubber strap to keep
    them from being able to open it.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230402}'></div>
`