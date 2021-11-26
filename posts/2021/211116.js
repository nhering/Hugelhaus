let carousel211116 = JSON.stringify([
    '/images/2021/11/20211116_165308.jpg',
    '/images/2021/11/20211116_165336.jpg',
    '/images/2021/11/20211116_165343.jpg',
    '/images/2021/11/20211126_161555.jpg',
    '/images/2021/11/20211116_165352.jpg',
    '/images/2021/11/20211126_161535.jpg',
    '/images/2021/11/20211116_165405.jpg',
    '/images/2021/11/20211126_161612.jpg',
    '/images/2021/11/20211126_161627.jpg',
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
    <div class='carousel' data-sources='${carousel211116}'>\
        <div class='controls'>\
            <div class='left'></div>\
            <div class='right'></div>\
        </div>\
        <img src='./images/2021/11/20211116_165308.jpg'/ >\
        <div class='caption'>A combination of 4 mil plastic sheeting and masking tape on the windows and vents.</div>\
    </div>\
`