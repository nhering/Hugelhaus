let slides_220625 = JSON.stringify([
    ['/images/2022/04/20220410_141709.jpg','A temporary display location.'],
    ['/images/2022/06/20220625_102742.jpg','This is a bit better.']
])

content.innerHTML = `\
    <h1>Lego Collection</h1>\
    <h5>Saturday June 25 2022</h5>\
    <br>\
    <p>I have a collection of Star Wars Lego kits.</p>\
    <br>\
    <p>I like to display a few of them at a time. Until this point\
    I hadn't designated a place for them. I think this shelf will work\
    for a few years, but eventualy I'd like a display case.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220625}'></div>
`