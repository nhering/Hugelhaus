let slides_221113 = JSON.stringify([
    ['/images/2022/11/20221113_070820.jpg','caption'],
    ['/images/2022/11/20221113_070848.jpg','caption'],
    ['/images/2022/11/20221113_071435.jpg','caption']
])

content.innerHTML = `\
    <h1>First Snow</h1>\
    <h5>Sunday November 13 2022</h5>\
    <br>\
    <p>The first snow of the season.</p>\
    <br>\
    <div class='slides' data-sources='${slides_221113}'></div>
`