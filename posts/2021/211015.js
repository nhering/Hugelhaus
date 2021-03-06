let slides_211015a = JSON.stringify([
    ['/images/2021/10/20211018_084957.jpg','The view of the backyard before mowing the lawn.'],
    ['/images/2021/10/20211021_174740.jpg','The view of the backyard after mowing the lawn.']
])

let slides_211015b = JSON.stringify([
    ['/images/2021/10/20211022_152031.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/10/20211022_152751.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_160336.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_160559.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_160724.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_160746.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_160852.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_163721.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_160728.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_160656.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211111_162444.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211113_090230.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211117_155958.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211117_162006.jpg','Items left in the yard that needed to be removed.'],
    ['/images/2021/11/20211117_162048.jpg','Items left in the yard that needed to be removed.']
])

let slides_211015c = JSON.stringify([
    ['/images/2021/10/20211028_073810.jpg','The backyard at sunset.']
])

content.innerHTML = `\
    <h1>First Week</h1>\
    <h5>Friday October 15 2021</h5>\
    <br>\
    <p>I finally moved in.</p>\
    <br>\
    <p><strong style='color:#FFF'>Friday</strong> afternoon I brought June and the last of my things to the house. I got \
    June settled in the bedroom to give her a small place to help her acclimate. It didn't \
    take long before she was ready to explore the house. </p>\
    <br>\
    <p><strong style='color:#FFF'>Saturday</strong> I just enjoyed the fact that I now live in my own house. In the evening,\
    I visited my friends and relaxed.</p>
    <br>\
    <p><strong style='color:#FFF'>Sunday</strong> I brought Henry over and he and June were reunited. They immediately began \
    exploring the house together and seemed right at home.</p>\
    <br>\
    <p><strong style='color:#FFF'>Monday</strong> This marks day one of working from home here. I've been concerned that using \
    the hotsopt on my phone wouldn't be enough for work. So far so good. The speed is fine and I haven't had any issues with \
    connectivity.</p>\
    <br>\
    <p><strong style='color:#FFF'>Tuesday</strong> Being in the house full time made me realize just how badly I needed a water \
    treatment system. The existing water softener wasn't enough. Today I had a rep from Kinetico test my water and sell me \
    a system capable of making the water drinkable. The water quality was bad enough that I was a bit uncomfortable even showering \
    in it.</p>\
    <br>\
    <p>In the afternoon, I mowed the lawn for the first time. It had been about three and a half months since it had been cut. That \
    being the case, it was tall enough that I had to go pretty slow and it ended up taking two and a half hours.</p>\
    <br>\
    <p>
    <div class='slides' data-sources='${slides_211015a}'></div>\
    <br>\
    <p><strong style='color:#FFF'>Wednesday</strong> I knew there was trash left, obscured by the overgrowth at the edges of the yard. \
    So, I started the process of removing all that from the property. Here are some pictures of items I've removed along the way.\
    </p>\
    <br>\
    <div class='slides' data-sources='${slides_211015b}'></div>\
    <br>\
    <p><strong style='color:#FFF'>Thursday</strong> The process of getting to this point has entailed much more than the \
    difficult process of a property purchase. It's nice to look at the sunset and appreciate it as the end of more than just the day.\
    </p>\
    <br>\
    <div class='slides' data-sources='${slides_211015c}'></div>\
`