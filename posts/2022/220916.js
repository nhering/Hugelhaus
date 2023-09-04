let slides_220916 = JSON.stringify([
    ['/images/2022/07/20220706_203911.jpg',''],
    ['/images/2022/07/20220706_203919.jpg',''],
    ['/images/2022/07/20220706_203931.jpg',''],
    ['/images/2022/07/20220706_203939.jpg',''],
    ['/images/2022/07/20220706_203946.jpg',''],
    ['/images/2022/08/20220814_190448.jpg',''],
    ['/images/2022/09/20220916_161244.jpg','']
])

content.innerHTML = `\
    <h1>Potato Harvest</h1>\
    <h5>Friday September 16 2022</h5>\
    <br>\
    <p>An arbitrary potato planting.</p>\
    <br>\
    <p>This was a very unplanned choice. I happened to have some potting soil
    laying around, a container, and a potato that had been sitting around long
    enough to start growning.</p>\
    <br>\
    <p>I decided to put the soil in the container, and the potato on top of the
    soil. That was about as much as I thougt about it.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220916}'></div>
`