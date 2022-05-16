let slides_211111 = JSON.stringify([
    ['/images/2021/08/20210816_155316.jpg','Before the install.'],
    ['/images/2021/11/20211111_125506.jpg','During installation.'],
    ['/images/2021/11/20211111_125515.jpg','During installation.'],
    ['/images/2021/11/20211111_142350.jpg','After the install.']
])

content.innerHTML = `\
    <h1>Water Treatment Install</h1>\
    <h5>Thursday November 11 2021</h5>\
    <br>\
    <p>A couple weeks after the rep from Kinetico sold me the system, they were able \
    to fullfill the order. A third party plumber was hired to install the water filters \
    and tanks.</p>\
    <br>\
    <p>I had removed some of the wall frame that would have otherwise made it a bit more \
    difficult to install. He was replacing some of the copper pipes with pex. Watching him \
    do this gave me the impression that I may be able to do some of the other work on the \
    plumbing myself. It didn't seem like a very difficult process.</p>\
    <br>\
    <div class='slides' data-sources='${slides_211111}'></div>\
`