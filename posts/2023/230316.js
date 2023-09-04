let slides_230316 = JSON.stringify([
    ['/images/2023/03/20230316_101456.jpg',''],
    ['/images/2023/03/20230316_125205.jpg','']
])

content.innerHTML = `\
    <h1>Pellet Stove Breakdown</h1>\
    <h5>Thursday March 16 2023</h5>\
    <br>\
    <p>It was bound to break down at some point.</p>\
    <br>\
    <p>One of the blower motors broke down and needed to be replaced.
    I was able to order a new one off of E-Bay and it took about four
    days to ship. Then, once I replaced it, I discovered that the one
    I replaced wasn't the one that broke. So, I had to replace the other
    one too. Which also came from E-Bay and took another four or so
    days to arrive. We were without heat for the kitchen and livingroom
    for about a week and a half. It was chilly...</p>\
    <br>\
    <div class='slides' data-sources='${slides_230316}'></div>
`