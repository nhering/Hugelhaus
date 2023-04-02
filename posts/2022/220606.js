let slides_220606 = JSON.stringify([
    ['/images/2022/04/20220423_121642.jpg',''],
    ['/images/2022/05/20220523_143839.jpg','After power washing the first section.'],
    ['/images/2022/05/20220523_143855.jpg','After power washing the first section.'],
    ['/images/2022/05/20220523_152619.jpg','Boiling salt pellets.'],
    ['/images/2022/06/20220606_175457.jpg','The salt killed the weeds in the cracks.']
])

content.innerHTML = `\
    <h1>Driveway</h1>\
    <h5>Monday June 06 2022</h5>\
    <br>\
    <p>The driveway could use some attention.</p>\
    <br>\
    <p>It's mostly intact but the cracks will only get worse without some\
    added work. I don't thitnk there's a lot that needs to be done but, I'd\
    like to at least clean it up and maybe even fill in some of the cracks.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220606}'></div>
`