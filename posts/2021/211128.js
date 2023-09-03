// NOTE: Do not add the dot to the begining of the source paths
let slides_211128 = JSON.stringify([
    ['/images/2021/11/20211128_114149.jpg','I had already removed some of the drywall from the studs, but this is pretty much what it looked like when I bought the house.'],
    ['/images/2021/11/20211128_115617.jpg','I had already removed some of the drywall from the studs, but this is pretty much what it looked like when I bought the house.'],
    ['/images/2021/11/20211128_115624.jpg','I had already removed some of the drywall from the studs, but this is pretty much what it looked like when I bought the house.'],
    ['/images/2022/01/20220116_134037.jpg','I had already removed some of the drywall from the studs, but this is pretty much what it looked like when I bought the house.'],
    ['/images/2022/01/20220129_154837.jpg','Started taking out the wooden wall and a lot of the studs.'],
    ['/images/2022/01/20220129_155649.jpg','Started taking out the wooden wall and a lot of the studs.'],
    ['/images/2022/01/20220129_162447.jpg','Finished removing the wooden wall.'],
    ['/images/2022/01/20220129_162642.jpg','Finished removing the wooden wall. The studs around the bathroom are stil intact.'],
    ['/images/2022/01/20220130_175536.jpg','Brought in my dads woodworking tools.'],
    ['/images/2022/01/20220130_175539.jpg','Bathroom studs still need to go.']
])

content.innerHTML = `\
    <h1>Basement Update</h1>\
    <h5>Sunday November 28 2021</h5>\
    <br>\
    <p>Time to start clearing out the basement.</p>
    <br>\
    <p>By this time I had already removed a little bit of the existing drywall.
    Overall though, this is what it looked like when I bought the house. In the
    future I'd like to turn this into an apartment, with a shared utility room
    and a steam shower in the bathroom.</p>\
    <br>\
    <div class='slides' data-sources='${slides_211128}'></div>
`