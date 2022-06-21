let slides_211123 = JSON.stringify([
    ['/images/2021/11/20211126_093924.jpg','New generator.'],
    ['/images/2022/05/20220530_193023.jpg','Internal connection switches.'],
    ['/images/2022/05/20220530_193108.jpg','Exterior outlet.'],
    ['/images/2022/05/20220530_193126.jpg','Exterior outlet.']
])

content.innerHTML = `\
    <h1>Generator</h1>\
    <h5>Friday November 26 2021</h5>\
    <br>\
    <p>Before I even moved in, there had been a power outage that lasted more than a day.</p>\
    <br>\
    <p>A nice feature of the house is that it was already wired to connect a generator. \
    It's very easy to plug in the generator, switch from utility to generator power. \
    It might be nice to move the outlet inside so that if there is an outage during bad 
    weather, there's no need to go outside to plug it in.</p>\
    <br>\
    <div class='slides' data-sources='${slides_211123}'></div>
`