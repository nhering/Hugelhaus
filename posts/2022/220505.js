let slides_220505 = JSON.stringify([
    ['/images/2022/05/20220505_130410.jpg','Some kind of rebar'],
    ['/images/2022/05/20220505_132414.jpg','A rich vein of concrete chunks'],
    ['/images/2022/05/20220505_132659.jpg','A rich vein of concrete chunks']
])

content.innerHTML = `\
    <h1>Fill Dirt</h1>\
    <h5>Thursday May 05 2022</h5>\
    <br>\
    <p>A new discovery offers something to keep in mind for future plans.</p>\
    <br>\
    <p>As I have been cleaning up stones and other items found in the yard, I \
    discovered a piece of concrete in the lower yard. This wasn't sticking up too \
    hight to mow over, but it was there and I wanted to remove it.</p>\
    <br>\
    <p>Unfortunately, I discovered that it wasn't just a single small chunk of \
    concrete. I discovered that this was just one of many large pieces. Previosly, \
    this yard was old growth forest. In order to turn it into yard they had to \
    bulldoze all the trees down. This resulted in a few deep holes where root systems \
    had been. So, they used whatever was most available and inexpensive to fill in the \
    holes.</p>\
    <br>\
    <div class='slides' data-sources='${slides_220505}'></div>
    <br>\
    <p>This kind of material is something I'm going to have to look out for if I \
    excavate the yard.</p>\
`