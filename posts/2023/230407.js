let slides_230407 = JSON.stringify([
    ['/images/2023/04/20230403_174016.jpg',''],
    ['/images/2023/04/20230404_172431.jpg',''],
    ['/images/2023/04/20230407_174625.jpg','']
])

content.innerHTML = `\
    <h1>Picture Window Treatment</h1>\
    <h5>Friday April 07 2023</h5>\
    <br>\
    <p>A project to go along with the entertainment wall project.</p>\
    <br>\
    <p>I decided to paint the woodwork around the windows to match the color
    of the wall behind the T.V. I also hung blackout shades to reduce glare
    coming from the picture windows.</p>\
    <br>\
    <div class='slides' data-sources='${slides_230407}'></div>
`