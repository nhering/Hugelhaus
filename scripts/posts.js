const posts = [
    {   id: 210605, year: 2021, month: 6, day: 5,
        menuText: "First Impressions",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210605.js'
    },
    {   id: 210619, year: 2021, month: 6, day: 19,
        menuText: "Home Inspection",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210619.js'
    },
    {   id: 210720, year: 2021, month: 7, day: 20,
        menuText: "Title Signing",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210720.js'
    },
    {   id: 210809, year: 2021, month: 8, day: 9,
        menuText: "The Keys",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210809.js'
    },
    {   id: 210813, year: 2021, month: 8, day: 13,
        menuText: "Left Behind",
        tags: [
            tags.CLEAN_UP, tags.MOVE_IN
        ],
        src: './posts/2021/210813.js'
    },
    {   id: 210814, year: 2021, month: 8, day: 14,
        menuText: "Utilities",
        tags: [
            tags.UTILITIES, tags.MOVE_IN
        ],
        src: './posts/2021/210814.js'
    },
    {   id: 210816, year: 2021, month: 8, day: 16,
        menuText: "Water Pressure",
        tags: [
            tags.BASEMENT, tags.PLUMBING, tags.REPAIRS
        ],
        src: './posts/2021/210816.js'
    },
    {   id: 210818, year: 2021, month: 8, day: 18,
        menuText: "New Lawnmower",
        tags: [
            tags.MOVE_IN, tags.YARD
        ],
        src: './posts/2021/210818.js'
    },
    {   id: 210906, year: 2021, month: 9, day: 6,
        menuText: "House Warming",
        tags: [
            tags.FRIENDS_FAMILY, tags.MOVE_IN
        ],
        src: './posts/2021/210906.js'
    },
    {   id: 210912, year: 2021, month: 9, day: 12,
        menuText: "What Feels Like Home?",
        tags: [
            tags.LITTLE_MOMENTS ,tags.MOVE_IN
        ],
        src: './posts/2021/210912.js'
    },
    {   id: 210925, year: 2021, month: 9, day: 25,
        menuText: "Test Drive",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210925.js'
    },
    {   id: 211002, year: 2021, month: 10, day: 2,
        menuText: "Pellet Stove & Lawnmower",
        tags: [
            tags.MOVE_IN, tags.UTILITIES
        ],
        src: './posts/2021/211002.js'
    },
    {   id: 211003, year: 2021, month: 10, day: 3,
        menuText: "Smoke 'em Out",
        tags: [
            tags.CLEAN_UP
        ],
        src: './posts/2021/211003.js'
    },
    {   id: 211008, year: 2021, month: 10, day: 8,
        menuText: "Pellet Deleviery",
        tags: [
            tags.UTILITIES, tags.GARAGE
        ],
        src: './posts/2021/211008.js'
    },
    {   id: 211015, year: 2021, month: 10, day: 15,
        menuText: "First Week",
        tags: [
            tags.CLEAN_UP, tags.YARD, tags.IMPROVEMENTS, tags.MOVE_IN
        ],
        src: './posts/2021/211015.js'
    },
    {   id: 211110, year: 2021, month: 11, day: 10,
        menuText: "Scenic Moments",
        tags: [
            tags.LITTLE_MOMENTS
        ],
        src: './posts/2021/211110.js'
    },
    {   id: 211111, year: 2021, month: 11, day: 11,
        menuText: "Water Treatment Install",
        tags: [
            tags.PLUMBING, tags.UTILITIES, tags.IMPROVEMENTS, tags.BASEMENT
        ],
        src: './posts/2021/211111.js'
    },
    {   id: 211116, year: 2021, month: 11, day: 16,
        menuText: "Winterizing",
        tags: [
            tags.BATHROOM, tags.BEDROOM, tags.LIVINGROOM, tags.UTILITIES
        ],
        src: './posts/2021/211116.js'
    },
    {   id: 211117, year: 2021, month: 11, day: 17,
        menuText: "Another Burn",
        tags: [
            tags.CLEAN_UP, tags.MOVE_IN
        ],
        src: './posts/2021/211117.js'
    },
    {   id: 211122, year: 2021, month: 11, day: 22,
        menuText: "Recycle Metal Items Left Behind",
        tags: [
            tags.CLEAN_UP, tags.MOVE_IN
        ],
        src: './posts/2021/211122.js'
    },
    {   id: 211123, year: 2021, month: 11, day: 23,
        menuText: "Generator",
        tags: [
            tags.ELECTRIC ,tags.UTILITIES
        ],
        src: './posts/2021/211123.js'
    },
    {   id: 211205, year: 2021, month: 12, day: 05,
        menuText: "Scratching Post",
        tags: [
            tags.ANIMALS, tags.LIVINGROOM
        ],
        src: './posts/2021/211205.js'
    },
    {   id: 211212, year: 2021, month: 12, day: 12,
        menuText: "Stray Cat",
        tags: [
            tags.ANIMALS, tags.PROJECTS
        ],
        src: './posts/2021/211212.js'
    },
    {   id: 220206, year: 2022, month: 02, day: 06,
        menuText: "Recreation Fail",
        tags: [
            tags.LITTLE_MOMENTS, tags.LIVINGROOM
        ],
        src: './posts/2022/220206.js'
    },
    {   id: 220401, year: 2022, month: 04, day: 01,
        menuText: "Burn Pile Upgrade",
        tags: [
            tags.CLEAN_UP, tags.IMPROVEMENTS, tags.YARD
        ],
        src: './posts/2022/220401.js'
    },
    {   id: 220417, year: 2022, month: 04, day: 17,
        menuText: "Cat Barrier",
        tags: [
            tags.IMPROVEMENTS
        ],
        src: './posts/2022/220417.js'
    },
    {   id: 220430, year: 2022, month: 04, day: 30,
        menuText: "Clearing The Gate",
        tags: [
            tags.CLEAN_UP, tags.IMPROVEMENTS, tags.YARD
        ],
        src: './posts/2022/220430.js'
    },
    {   id: 220503, year: 2022, month: 05, day: 03,
        menuText: "Starlink",
        tags: [
            tags.UTILITIES
        ],
        src: './posts/2022/220503.js'
    },
    {   id: 220505, year: 2022, month: 05, day: 05,
        menuText: "Fill Dirt",
        tags: [
            tags.CLEAN_UP, tags.IMPROVEMENTS, tags.YARD
        ],
        src: './posts/2022/220505.js'
    },
    {   id: 220521, year: 2022, month: 05, day: 21,
        menuText: "Fallen Tree",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2022/220521.js'
    },
    {   id: 220522, year: 2022, month: 05, day: 22,
        menuText: "A Mouse",
        tags: [
            tags.LITTLE_MOMENTS, tags.ANIMALS
        ],
        src: './posts/2022/220522.js'
    },
    {   id: 220605, year: 2022, month: 06, day: 05,
        menuText: "Germinating Mint",
        tags: [
            tags.PROJECTS, tags.YARD
        ],
        src: './posts/2022/220605.js'
    },,
    {   id: 220617, year: 2022, month: 06, day: 17,
        menuText: "Blue Skies",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2022/220617.js'
    },
    {   id: 220926, year: 2022, month: 09, day: 26,
        menuText: "Yard Update",
        tags: [
            tags.PROJECTS, tags.YARD
        ],
        src: './posts/2022/220926.js'
    },
    {   id: 221113, year: 2022, month: 11, day: 13,
        menuText: "First Snow",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2022/221113.js'
    }
]