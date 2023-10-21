let slides_231020a = JSON.stringify([
    ['/images/2023/10/20231020_130718.jpg','I forgot to take a picture before installing the new oven.']
])

let slides_231020b = JSON.stringify([
    ['/images/2023/10/20231020_171757.jpg','The discharge hose was incorrectly connected to the drainage pipe.'],
    ['/images/2023/10/20231020_171836.jpg','The discharge hose was incorrectly connected to the drainage pipe.'],
    ['/images/2023/10/20231021_141822.jpg','I replaced the supply and discharge plumbing with pex and pvc respectively.'],
    ['/images/2023/10/20231021_141833.jpg','I replaced the supply and discharge plumbing with pex and pvc respectively.']
])

let slides_231020c = JSON.stringify([
    ['/images/2023/10/20231021_095126.jpg','It was evident that there was a mice problem at some point.'],
    ['/images/2023/10/20231021_095238.jpg','It was evident that there was a mice problem at some point.'],
    ['/images/2023/10/20231021_095242.jpg','I also damaged the old dishwashers discharge pipe while pulling it out of under the counter.'],
    ['/images/2023/10/20231021_095411.jpg','There was some water mess that needed to be dried.'],
    ['/images/2023/10/20231021_144041.jpg','There was some water mess that needed to be dried.'],
    ['/images/2023/10/20231021_153403.jpg','But eventually I got it all together. I&apos;m excited to get to use these now.']
])

content.innerHTML = `\
    <h1>Kitchen Updgrade</h1>\
    <h5>Friday October 20 2023</h5>\
    <br>\
    <p>I finally got tired of having no oven.</p>\
    <br>\
    <p>Two years into living without an oven was enough. I didn't mind as
    much when at least the burners worked, but the oven starte beeping every
    few minutes any time it was plugged in. That was enough for me to not
    want to use the burners anymore. And after a few months of using a hot
    plate instead of the more powerful burners; that got old.</p>\
    <br>\
    <div class='slides' data-sources='${slides_231020a}'></div>
    <br>\
    <p>I figured since I was getting a new oven, I may as well get a new
    dishwasher too. It was pretty annoying doing dishes by hand all the time.
    However, installing the diswasher was not as easy as the oven. There were
    some issues with the way that the previous dishwasher was installed that
    needed to be addressed before I could be comfortable with a new install.
    </p>\
    <br>\
    <div class='slides' data-sources='${slides_231020b}'></div>
    <br>\
    <p>Once that was looking better, I could focus on the dishwasher itself.</p>\
    <br>\
    <div class='slides' data-sources='${slides_231020c}'></div>
    <br>\
`