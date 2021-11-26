// NOTE: Do not add the dot to the begining of the source paths
let carousel211110 = JSON.stringify([
    '/images/2021/10/20211110_065040.jpg',
    '/images/2021/11/20211114_165411.jpg',
    '/images/2021/11/20211110_200157.jpg',
    '/images/2021/11/20211110_200454.jpg',
    '/images/2021/11/20211119_194137.jpg'
])

content.innerHTML = `\
    <h1>Scenic Moments</h1>\
    <h5>Wednesday Novemper 10 2021</h5>\
    <br>\
    <p>A few images from around the house.</p>\
    <br>\
    <p>Not all these were from the same day but they are all from the first few \
    weeks of living here. A foggy morning, the first snow of the season are a \
    couple of firsts. The living room looking bare with my new 'sound system' which \
    is just a speaker from HomeDepot connected via bluetooth to my old laptop. A \
    cloudy evening obscuring the moon looking out over the deck.</p>\
    <br>\
    <div class='carousel' data-sources='${carousel211110}'>\
        <div class='controls'>\
            <div class='left'></div>\
            <div class='right'></div>\
        </div>\
        <img src='./images/2021/10/20211110_065040.jpg'/ >\
        <div class='caption'>Some images to remember.</div>\
    </div>\
`