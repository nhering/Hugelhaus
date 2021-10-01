// NOTE: Do not add the dot to the begining of the source paths
let carousel000000 = JSON.stringify(['/images/2021/04/20210401_153001.jpg'])

content.innerHTML = `\
    <h1></h1>\
    <h5>dddd mmmm dd yyyy</h5>\
    <br>\
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem mauris.</p>\
    <br>\
    <div class='img-caption'>\
        <img src='./images/.jpg'/ >\
        <div class='caption'></div>\
    </div>\
    <div class='carousel' data-sources='${carousel000000}'>\
        <div class='controls'>\
            <div class='left'></div>\
            <div class='right'></div>\
        </div>\
        <img src='./images/2021/04/20210401_153001.jpg'/ >\
        <div class='caption'>This is the image from the seller's realtor</div>\
    </div>\
`