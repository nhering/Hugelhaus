let slides_211116 = JSON.stringify([
    ['/images/2021/11/20211116_165308.jpg','A shame to cover up the picture window.'],
    ['/images/2021/11/20211116_165336.jpg','The intake vents between the kitchen and livingroom.'],
    ['/images/2021/11/20211116_165343.jpg','The intake in the hall.'],
    ['/images/2021/11/20211126_161555.jpg','The bathroom.'],
    ['/images/2021/11/20211116_165352.jpg','The bathroom.'],
    ['/images/2021/11/20211126_161535.jpg','The bedroom/office.'],
    ['/images/2021/11/20211116_165405.jpg','The bedroom/office.'],
    ['/images/2021/11/20211126_161612.jpg','The cat&apos;s room.'],
    ['/images/2021/11/20211126_161627.jpg','The master bedroom.']
])

content.innerHTML = `\
    <h1>Winterizing</h1>\
    <h5>Thursday November 11 2021</h5>\
    <br>\
    <p>The windows and vents were making heating less efficient than I prefered to tolorate.</p>\
    <br>\
    <p>I didn't really come as any surprise that the house is pretty inefficient where insulation \
    is concerned. Nevertheless, it was a bit of a dissapointment that the large picture window \
    in the living room was leaking so much heat. There goes my lovely view of the wetlands; for the \
    winter at least.</p>\
    <br>\
    <p>It wasn't much work to install by myself. Since I wasn't a fan of the existing trim, I ended \
    up prying off the unsightly rectangular decorative accents. Not having those there made the \
    process of installing much easier. You can see where the accents were in the pictures. I didn't \
    paint or anything to cover where they had been.</p>\
    <br>\
    <div class='slides' data-sources='${slides_211116}'></div>\
`