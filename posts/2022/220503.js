let slides_220503a = JSON.stringify([
    ['/images/2022/05/20220503_193540.jpg','Unboxing'],
    ['/images/2022/05/20220503_193828.jpg','Unboxing']
])

let slides_220503b = JSON.stringify([
    ['/images/2022/05/20220530_185835.jpg','Mounted on the NE post of the deck.']
])

content.innerHTML = `\
    <h1>Starlink</h1>\
    <h5>Tuesday May 03 2022</h5>\
    <br>\
    <p>The transceiver is delivered.</p>\
    <br>\
    <p>On July 12 2021 I preordered Starlink service. At the time the service was in the beta phase \
    of development. Their website stated "Starlink is targeting coverage in your area in mid to late \
    2021. For reasons that are out of the scope of this article, they were delayed.</p>\
    <br>\
    <p>Since then, I've been relying on my phone carrier's hotspot service to keep me working from \
    home. While that service has been sufficient, it did come with a limiting factor. I was accustomed \
    to streaming services and the hotspot has a data cap per month. That made it so, my internet was really \
    only for work. There are worse things to deal with, but it was a let down.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220503a}'></div>
    <br>\
    <p>I installed the unit on a pipe I fastened to a post on the deck.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220503b}'></div>
    <br>\
    <p>The speeds are more than I needed to work from home and there is no data cap per month at this \
    point. I hope they don't cap the data in the future. So far it's been better than using the hotspot \
    on my phone.</p>\
`