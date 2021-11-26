class Menu {
    constructor(){
        this.left = -240
        this.selectedTags = []
        this.setLocalStorage()
        this.shownInput = null

        this.menuDiv = document.getElementById("menu")
        this.menuDiv.appendChild(this.getHeader())
        this.loadItems(posts)
        
        this.menuButtonDiv = document.getElementById("menubutton")
        this.menuButtonDiv.addEventListener('click',() => {
            this.toggleMenu()
        })
    }

    setLocalStorage(){
        let s = localStorage.getItem('searchTerms')
        if (!s) localStorage.setItem('searchTerms','')
        let t = localStorage.getItem('selectedTags')
        if (!t) localStorage.setItem('selectedTags',JSON.stringify([]))
        this.selectedTags = JSON.parse(t)
        // localStorage.setItem('selectedTags',JSON.stringify([]))
    }

    loadItems(posts){
        // console.log('loadItems')
        let list = document.querySelector('.menu-list')
        if (list) list.remove()

        list = document.createElement('div')
        list.classList.add('menu-list')

        let groups = this.groupPosts(posts)
        groups.forEach((g) => {
            let menuYear = document.createElement('div')            
            menuYear.classList.add('menu-year')

            let menuYearHeader = document.createElement('div')
            menuYearHeader.classList.add('menu-year-header')
            menuYearHeader.innerText = g.year
            menuYearHeader.addEventListener('click',()=>{
                let ele = document.getElementById(g.year)
                ele.classList.toggle('hide')
            })

            let menuYearItems = document.createElement('div')
            menuYearItems.classList.add('menu-year-items')
            menuYearItems.id = g.year
            g.posts.forEach((p)=>{
                let li = document.createElement('div')
                li.classList.add('menu-item')
                let m = Number.MMM(p.month)
                let d = `${p.day}`.padStart(2,'0')
                li.innerHTML = `<div class='date'>${m}-${d}</div><div class='text'>${p.menuText}</div>`
                li.addEventListener('click',() => {
                    content.route(p.id)
                    this.toggleMenu()
                })
                menuYearItems.appendChild(li)
            })

            menuYear.appendChild(menuYearHeader)
            menuYear.appendChild(menuYearItems)
            list.appendChild(menuYear)
        })
        this.menuDiv.appendChild(list)
    }

    groupPosts(posts){
        // console.log('groupPosts')
        posts.sort(this.sortPosts)
        let groups = []
        let years = []
        posts.forEach((p)=>{
            // console.log(p.year)
            if(years.indexOf(p.year) < 0) years.push(p.year)
        })
        // console.log(years)
        years.sort()
        // console.log('groupPosts')

        years.forEach((y) => {
            let group  = {
                year: y,
                posts: []
            }
            posts.forEach((p) => {
                if(p.year === y) group.posts.push(p)
            })
            groups.push(group)
        })

        return groups
    }

    sortPosts(a,b){
        // console.log('sortPosts')
        let ay = `${a.year}`.padStart(4,'0')
        let am = `${a.month}`.padStart(2,'0')
        let ad = `${a.day}`.padStart(2,'0')
        let anum = parseInt(`${ay}${am}${ad}`)

        let by = `${b.year}`.padStart(4,'0')
        let bm = `${b.month}`.padStart(2,'0')
        let bd = `${b.day}`.padStart(2,'0')
        let bnum = parseInt(`${by}${bm}${bd}`)

        if (anum < bnum) {
            return -1
        } else if (anum === bnum) {
            return 0
        } else {
            return 1
        }
    }

    hideMenu(){
        this.menuDiv.style.left = -240
        this.left = -240
    }

    toggleMenu(){
        let x = this.left < 0 ? 0 : -240
        this.menuDiv.style.left = x
        this.left = x
    }

    getHeader(){
        let div = document.createElement('div')
        div.classList.add('menu-header')
        div.appendChild(this.getTagButton())
        div.appendChild(this.getSearchButton())
        div.appendChild(this.getTagMultiSelect())
        div.appendChild(this.getSearchInput())
        return div
    }

    getTagButton(){
        let div = document.createElement('div')
        div.classList.add('button')
        div.innerText = "TAGS"
        div.addEventListener('click',()=>{
            this.showInput('tags')
        })
        return div
    }

    getTagMultiSelect(){
        let div = document.createElement('div')
        div.classList.add('hide')
        div.setAttribute('id','taginput')
        Object.entries(tags).forEach((t) => {
            div.appendChild(this.getTagCheckbox(t))
        })
        return div
    }

    getTagCheckbox(tag){
        let div = document.createElement('div')
        div.classList.add('tag-item')

        let input = document.createElement('input')
        input.setAttribute('type','checkbox')
        input.setAttribute('id',tag[0])
        input.setAttribute('name',tag[1])
        let i = this.selectedTags.indexOf(tag[1])
        if (i > -1) input.checked = true
        input.addEventListener('click',()=>{
            this.handleTagSelect(input,tag)
        })

        let label = document.createElement('label')
        label.setAttribute('for',tag[0])
        label.innerText = tag[1]

        div.appendChild(input)
        div.appendChild(label)
        return div
    }

    handleTagSelect(ele,tag){
        this.selectedTags = JSON.parse(localStorage.getItem('selectedTags'))

        let ind = this.selectedTags.indexOf(tag[1])
        let del = ind > -1 ? 1 : 0
        this.selectedTags.splice(ind,del)
        if (ele.checked) {
            this.selectedTags.push(tag[1])
        }

        localStorage.setItem('selectedTags',JSON.stringify(this.selectedTags))
        // console.log(localStorage.getItem('selectedTags'))
        // console.log(this.selectedTags)
        this.searchTags()
    }

    getSearchButton(){
        let div = document.createElement('div')
        div.classList.add('button')
        div.innerText = "SEARCH"
        div.addEventListener('click',()=>{
            this.showInput('search')
        })
        return div
    }

    getSearchInput(){
        let div = document.createElement('input')
        div.classList.add('hide')
        div.setAttribute('id','searchinput')
        div.placeholder = 'search'
        div.addEventListener('input',()=>{
            this.searchString(div.value)
        })
        return div
    }

    showInput(type){
        let tags = document.getElementById('taginput')
        let search = document.getElementById('searchinput')
        switch (type){
            case 'tags':
                if (this.shownInput === 'tags') {
                    tags.classList.add('hide')
                    this.shownInput = null
                } else if (this.shownInput === 'search'){
                    search.classList.add('hide')
                    this.searchTags()
                    tags.classList.remove('hide')
                    tags.focus()
                    this.shownInput = 'tags'
                } else {
                    this.searchTags()
                    tags.classList.remove('hide')
                    tags.focus()
                    this.shownInput = 'tags'
                }
                return
            case 'search':
                if (this.shownInput === 'search') {
                    search.classList.add('hide')
                    this.shownInput = null
                } else if (this.shownInput === 'tags'){
                    tags.classList.add('hide')
                    search.value = localStorage.getItem('searchTerms')
                    this.searchString(search.value)
                    search.classList.remove('hide')
                    search.focus()
                    this.shownInput = 'search'
                } else {
                    search.value = localStorage.getItem('searchTerms')
                    this.searchString(search.value)
                    search.classList.remove('hide')
                    search.focus()
                    this.shownInput = 'search'
                }
                return
            default:
                return
        }
    }

    searchString(terms){
        localStorage.setItem('searchTerms',terms)

        let result = []
        if (terms === '') {
            result = posts
        } else {
            posts.forEach((p) => {
                if(p.menuText.toLowerCase().indexOf(terms.trim()) > -1) {
                    result.push(p)
                }
            })
        }
        this.loadItems(result)
    }

    searchTags(){
        let result = []
        if (this.selectedTags.length === 0) {
            result = posts
        } else {
            posts.forEach((p) => {
                let addThisPost = false
                this.selectedTags.forEach((t) => {
                    let ind = p.tags.indexOf(t)
                    if(ind > -1){
                        addThisPost = true
                    }
                })
                if (addThisPost) result.push(p)
            })
        }
        this.loadItems(result)
    }
}

const tags = {
    ATTIC: "Attic",
    BASEMENT: "Basement",
    BATHROOM: "Bathroom",
    BEDROOM: "Bedroom",
    CLEAN_UP: "Clean up",
    ELECTRIC: "Electrical",
    FRIENDS_FAMILY: 'Friends & Family',
    FOYER: "Foyer",
    GARAGE: "Garage",
    IMPROVEMENTS: "Improvements",
    KITCHEN: "Kitchen",
    LITTLE_MOMENTS: "Little Moments",
    LIVINGROOM: "Livingroom",
    MOVE_IN: "Move In",
    PLUMBING: "Plumbing",
    REPAIRS: "Repairs",
    UTILITIES: "Utilities",
    YARD: 'Yard',
}

const posts = [
    {   id: 210605, year: 2021, month: 6, day: 5,
        menuText: "First Impressions",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210605.js',
    },
    {   id: 210619, year: 2021, month: 6, day: 19,
        menuText: "Home Inspection",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210619.js',
    },
    {   id: 210720, year: 2021, month: 7, day: 20,
        menuText: "Title Signing",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210720.js',
    },
    {   id: 210809, year: 2021, month: 8, day: 9,
        menuText: "The Keys",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210809.js',
    },
    {   id: 210813, year: 2021, month: 8, day: 13,
        menuText: "Left Behind",
        tags: [
            tags.CLEAN_UP, tags.MOVE_IN
        ],
        src: './posts/2021/210813.js',
    },
    {   id: 210814, year: 2021, month: 8, day: 14,
        menuText: "Utilities",
        tags: [
            tags.UTILITIES, tags.MOVE_IN
        ],
        src: './posts/2021/210814.js',
    },
    {   id: 210816, year: 2021, month: 8, day: 16,
        menuText: "Water Pressure",
        tags: [
            tags.BASEMENT, tags.PLUMBING, tags.REPAIRS
        ],
        src: './posts/2021/210816.js',
    },
    {   id: 210818, year: 2021, month: 8, day: 18,
        menuText: "New Lawnmower",
        tags: [
            tags.MOVE_IN, tags.YARD
        ],
        src: './posts/2021/210818.js',
    },
    {   id: 210906, year: 2021, month: 9, day: 6,
        menuText: "House Warming",
        tags: [
            tags.FRIENDS_FAMILY, tags.MOVE_IN
        ],
        src: './posts/2021/210906.js',
    },
    {   id: 210912, year: 2021, month: 9, day: 12,
        menuText: "What Feels Like Home?",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210912.js',
    },
    {   id: 210925, year: 2021, month: 9, day: 25,
        menuText: "Test drive",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210925.js',
    },
    {   id: 211002, year: 2021, month: 10, day: 2,
        menuText: "Pellet Stove & Lawnmower",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/211002.js',
    },
    {   id: 211003, year: 2021, month: 10, day: 3,
        menuText: "Smoke 'em Out",
        tags: [
            tags.CLEAN_UP
        ],
        src: './posts/2021/211003.js',
    },
    {   id: 211015, year: 2021, month: 10, day: 15,
        menuText: "First week",
        tags: [
            tags.CLEAN_UP, tags.YARD, tags.IMPROVEMENTS, tags.MOVE_IN
        ],
        src: './posts/2021/211015.js',
    }
]
