let slides_220617 = JSON.stringify([
    ['/images/2022/06/20220617_203855.jpg',''],
    ['/images/2022/06/20220617_203903.jpg',''],
    ['/images/2022/06/20220617_204343.jpg',''],
    ['/images/2022/06/20220617_204348.jpg','']
])

content.innerHTML = `\
    <h1>Blue Skies</h1>\
    <h5>Friday June 17 2022</h5>\
    <br>\
    <p>An exceptionaly beautiful day.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220617}'></div>
`