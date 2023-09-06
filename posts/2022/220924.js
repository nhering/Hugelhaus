// NOTE: Do not add the dot to the begining of the source paths
let slides_220924 = JSON.stringify([
    ['/images/2022/09/20220924_081447.jpg','Just after removing the cover that killed off the weeds.'],
    ['/images/2022/09/20220924_081511.jpg','Just after removing the cover that killed off the weeds.'],
    ['/images/2022/09/20220924_082830.jpg','About 20 bags of woodchips.'],
    ['/images/2022/09/20220924_082846.jpg','About 20 bags of woodchips.'],
    ['/images/2022/09/20220924_084352.jpg','First, three layers of brown paper to create a temporary barrier.'],
    ['/images/2022/09/20220924_084416.jpg','First, three layers of brown paper to create a temporary barrier.'],
    ['/images/2022/09/20220924_090932.jpg','First, three layers of brown paper to create a temporary barrier.'],
    ['/images/2022/09/20220924_091457.jpg','Then the chips, witch looked nice for a few months.'],
    ['/images/2022/09/20220924_091516.jpg','Then the chips, witch looked nice for a few months.'],
])

content.innerHTML = `\
    <h1>Septic Groundcover</h1>\
    <h5>Saturday September 24 2022</h5>\
    <br>\
    <p>Mowing around the septic tank lids is annoying.</p>\
    <br>\
    <p>I want to reduce the amount of trim I need to do after mowing.
    And, since the lids are really difficult to mow around, I thought
    I'd try laying down some mulch then grow some kind of ground cover.</p>\
    <br>\
    <p>Step one was to cover the area and kill off most of the plants.
    Then I could come in with a layer of paper and mulch on top to slow
    down weed from taking back over. Then last step would be to plant
    mint, strawberries, and pachysandra.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220924}'></div>
    <br>\
    <p>Then the last step would be to plant mint, strawberries, and pachysandra.
    I intend on grown them from seed in the spring. We'll see how that works
    out.</p>\
`