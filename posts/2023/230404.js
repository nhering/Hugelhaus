let slides_230404 = JSON.stringify([
    ['/images/2022/11/20221119_163711.jpg','Little did I know, but this would be the last time I burn anything in the wood stove.'],
    ['/images/2023/04/20230404_180655.jpg','The tarp strapped around the chimney.']
])

content.innerHTML = `\
    <h1>Chimney Fail</h1>\
    <h5>Tuesday April 04 2023</h5>\
    <br>\
    <p>The next in a long line of things breaking...</p>\
    <br>\
    <p>We had a couple days of consistent heavy rain when I noticed a puddle
    of water forming on the kitchen floor. I looked around to see if the sink
    or dishwasher were leaking and nothing. Then I saw that it was actually
    coming from the chimney. Starting at the ceiling, there was a stream of 
    water trickling down the brick.</p>\
    <br>\
    <p>I called my neighbor who was a roofer to ask him if he'd take a look
    and give me an opinion of what was going on. Long story short, he pointed
    out the chimeny was falling apart on the inside.</p>\
    <br>\
    <p>I went out and bought a tarp and some straps to cover the chimney at the
    source of the leak, on the roof. Lucky, I don't need it to heat the house.
    I had already wanted to get rid of the chimney all together, but I didn't
    really plan on doing that any time soon. So, it'll remain covered for a few
    years.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230404}'></div>
`