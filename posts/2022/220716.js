// NOTE: Do not add the dot to the begining of the source paths
let slides_220716 = JSON.stringify([
    ['/images/2022/07/20220716_101916.jpg',''],
    ['/images/2022/07/20220716_101920.jpg',''],
    ['/images/2022/07/20220716_101930.jpg',''],
    ['/images/2022/07/20220716_101953.jpg','']
])

content.innerHTML = `\
    <h1>Hawk Perch</h1>\
    <h5>Saturday July 16 2022</h5>\
    <br>\
    <p>This wasn't the intended purpose for the pipe but it was\
    kind of nice to see.</p>\
    <br>\
    <p>When I was cleaning up the fallen oak tree, I placed the pipe\
    so that I would remember where to stand when taking pictures of the\
    project. At some point during the process, a hawk decided it was\
    a good place to survey the yard for prey I guess.</p>
    <br>\
    <div class='slides' data-sources='${slides_220716}'></div>
`