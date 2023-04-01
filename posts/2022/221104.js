let slides_221104 = JSON.stringify([
    ['/images/2022/10/20221028_155907.jpg','Beaver gnaw marks.'],
    ['/images/2022/10/20221028_155912.jpg','All cut up along with some other brush.'],
    ['/images/2022/11/20221104_182242.jpg','It started up pretty easy given it was still green.'],
    ['/images/2022/11/20221104_191838.jpg',''],
    ['/images/2022/11/20221104_191918.jpg','']
])

content.innerHTML = `\
    <h1>Last Fire</h1>\
    <h5>Friday November 04 2022</h5>\
    <br>\
    <p>Beavers had apparently attempted to harvest part of a tree by the\
    fence and when it fell, it fell in the yard side.</p>\
    <br>\
    <p>Since they had gifted me with some fire wood and the weather was getting\
    colder by the day, I decided to have one last fire of the season.</p>\
    <br>\
    <div class='slides' data-sources='${slides_221104}'></div>
`