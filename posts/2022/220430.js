let slides_220430a = JSON.stringify([
    ['/images/2021/08/20210821_114022.jpg','Aug 2021: The fence at the back of the yard can&apos;t even be seen.'],
    ['/images/2021/08/20210821_114022zoom.jpg','Aug 2021: Zoom in on where the gate is.']
])

let slides_220430b = JSON.stringify([
    ['/images/2021/11/20211111_160728_clean.jpg','Nov 2021: It gets easier to see it without leaves in the way.']
])

let slides_220430c = JSON.stringify([
    ['/images/2022/04/20220430_084116.jpg','About an hour or so into the process.'],
    ['/images/2022/04/20220430_092632.jpg','I discover lots of plastic behind the crate and pile it up to be dealt with later.'],
    ['/images/2022/04/20220430_102141.jpg','The bruch is now completely gone.'],
    ['/images/2022/04/20220430_102912.jpg','It&apos;s constructed of pallets attached to a piece of plastic as the base.'],
    ['/images/2022/04/20220430_120825.jpg','The non burnable parts are all that is left.']
])

content.innerHTML = `\
    <h1>Clearing The Gate</h1>\
    <h5>Saturday April 30 2022</h5>\
    <br>\
    <p>It's time to see what's in those weeds.</p>\
    <br>\
    <p>Last summer I could see there was something in the brush that was in front of a \
    gate in the fence. I didn't want to get into that then but the time has come to tackle \
    that project.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220430a}'></div>
    <br>\
    <p>Here's another picture after the foliage has died back.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220430b}'></div>
    <br>\
    <p>I got started early and as I trimmed the brush away, I stacked it on the burn pile. \
    By 8:30 am I had a pretty good fire going. The whole thing took me about four hours.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220430c}'></div>
`