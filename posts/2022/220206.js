let slides_220206 = JSON.stringify([
    ['/images/2022/02/20220206_144510.jpg','Whoops'],
    ['/images/2022/02/20220206_144556.jpg','My bad']
])

content.innerHTML = `\
    <h1>Recreation Fail</h1>\
    <h5>Sunday February 06 2022</h5>\
    <br>\
    <p>Onewheels are not indoor toys.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220206}'></div>
`