let slides_221011 = JSON.stringify([
    ['/images/2022/10/20221011_172937.jpg','Not really very attractive if you ask me.'],
    ['/images/2022/10/20221011_173906.jpg','One down.'],
    ['/images/2022/10/20221011_175506.jpg','One to go.']
])

content.innerHTML = `\
    <h1>Vinyl Fence Removal</h1>\
    <h5>Thursday October 11 2022</h5>\
    <br>\
    <p>The vinyl fence wasn't in good shape and was out of place.</p>\
    <br>\
    <p>I'm not sure what motivated someone to put two lone sections of white
    vinyl fence at the side of the garage, but I didn't really want to keep
    them. I'd rather just open the yard up since I don't have any animals to
    worry about getting loose.</p>\
    <br>\
    <div class='slides' data-sources='${slides_221011}'></div>
    <br>\
    <p>I got distracted with other projects and left this for now.</p>\
    <br>\
`