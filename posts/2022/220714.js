let slides_220714_a = JSON.stringify([
    ['/images/2022/05/20220527_152556.jpg','Painted turtle.'],
    ['/images/2022/06/20220601_195952.jpg','Snapping turtle']
])

let slides_220714_b = JSON.stringify([
    ['/images/2022/07/20220714_185558.jpg','The nest it very small.'],
    ['/images/2022/07/20220714_185553.jpg','Only one egg?']
])

content.innerHTML = `\
    <h1>Reptile Eggs</h1>\
    <h5>Thursday July 14 2022</h5>\
    <br>\
    <p>I hope to support the local wildlife population.</p>\
    <br>\
    <p>The wetlands are home to at least two species of turtle. I\
    saw two make their way close to the house in late spring which\
    makes me think they may have been looking for a place to lay eggs.<p>\
    <br>\
    <div class='slides' data-sources='${slides_220714_a}'></div>
    <br>\
    <p>I have also seen a couple of species of snake around here but\
    they were not mature enough to lay eggs. Of course that just means\
    that there are mature snakes around if there are young.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220714_b}'></div>
`