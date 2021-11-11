const carousel211015a = JSON.stringify([
    '/images/2021/10/20211018_084957.jpg',
    '/images/2021/10/20211021_174740.jpg'
])
const carousel211015b = JSON.stringify([
    '/images/2021/10/20211022_152031.jpg',
    '/images/2021/10/20211022_152751.jpg'
])

content.innerHTML = `\
    <h1></h1>\
    <h5>Friday October 15 2021</h5>\
    <br>\
    <p>I finally moved into the house.</p>\
    <br>\
    <p>On Friday afternoon I brought June and the last of my things to the house. I got \
    June settled in the bedroom to give her a small place to help her acclimate. It didn't \
    take long before she was ready to explore the house. </p>\
    <br>\
    <p>On Sunday I brought Henry over and he and June were reunited. They immediately began \
    exploring the house together and seemed right at home.</p>\
    <br>\
    <p>Being in the house full time made me realize just how badly I needed a water \
    treatment system. The existing water softener wasn't enough. On Tuesday I had a rep \
    from Kinetico test my water and sell me a system capable of making the water drinkable.</p>\
    <br>\
    <div class='carousel' data-sources='${carousel211015a}'>\
        <div class='controls'>\
            <div class='left'></div>\
            <div class='right'></div>\
        </div>\
        <img src='./images/2021/10/20211018_084957.jpg'/ >\
        <div class='caption'>The view of the backyard before and after mowing the lawn.</div>\
    </div>\
    <br>\
    <p> \
    </p>\
    <br>\
    <div class='carousel' data-sources='${carousel211015b}'>\
        <div class='controls'>\
            <div class='left'></div>\
            <div class='right'></div>\
        </div>\
        <img src='./images/2021/10/20211022_152031.jpg'/ >\
        <div class='caption'>Items left in the yard that needed to be removed.</div>\
    </div>\
`