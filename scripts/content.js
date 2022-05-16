class Content {
    constructor(data = {}){
        this.div = document.getElementById("content")
        window.addEventListener('resize',()=>{
            this.resize()
        })
        this.root = "Hugelhaus"
        this.post = null
    }

    home(){
        window.location = window.location.pathname
    }

    route(id = false){
        let post = false
        if (id) {
            window.location = `${window.location.pathname}?id=${id}`
        }

        const args = this.getUrlArgs()
        if (args.search && args.count == 0){
            window.location = window.location.pathname
            return
        } else if (!args.search) {
            this.src = "./posts/home.js"
            return
        }

        post = this.getPost(args.id)
        this.post = post
        if (!post){
            window.location = window.location.pathname
        } else {
            this.src = post.src
        }
    }

    getUrlArgs(){
        let args = {
            search: false,
            count: 0
        }
        let props = ['id']
        const search = window.location.search.substring(1)

        if (search != ""){
            args.search = true
            search.split('&').forEach((n) => {
                let arg = n.split('=')
                if (props.includes(arg[0])){
                    args.count++
                    args[arg[0]] = arg[1]
                }
            })
        }
        
        return args
    }

    getPost(id){
        let post = false
        posts.forEach((p => {
            if (p.id === parseInt(id)){
                post = p
            }
        }))
        return post
    }

    set innerHTML(html){
        let container = document.createElement('div')
        container.classList.add('container')
        container.innerHTML = html
        this.div.appendChild(container)
        this.buildSlides()
        this.resize()
        this.addTags(container)
    }

    set src(src){
        this.div.innerHTML = null
        this.removeContentScriptElement()
        this.addContentScriptElement(src)
    }

    removeContentScriptElement(){
        let old = document.getElementById('content-script')
        if (old) old.remove()
    }

    addContentScriptElement(src){
        let ele = document.createElement('script')
        ele.setAttribute('type','text/javascript')
        ele.setAttribute('src',src)
        ele.setAttribute('id','content-script')
        document.querySelector('head').appendChild(ele)
    }

    addTags(container){
        let ele = document.createElement('fieldset')
        ele.classList.add('tags')
        let legend = document.createElement('legend')
        legend.classList.add('legend')
        legend.innerText = 'TAGS'
        ele.appendChild(legend)
        this.post.tags.forEach((t) => {
            let tag = document.createElement('div')
            tag.classList.add('tag')
            tag.innerText = t
            ele.appendChild(tag)
        })
        container.appendChild(ele)
    }

    resize(){
        let container = document.querySelector('.container')
        let w = container.clientWidth - 4
        document.querySelectorAll('.slides')
            .forEach((e) => {
                this.fitCaption(e,w)
            })
    }

    fitCaption(caption,width){
        caption.style.width = `${width}px`
        caption.querySelector('img').style.width = `${width}px`
    }

    buildSlides(){
        document.querySelectorAll('.slides')
        .forEach(slide => {
            new Slide({
                root: this.root,
                ele: slide
            })
        });
    }
}

class Slide {
    constructor(data = {})
    {
        this.ele = data.ele
        this.left
        this.right
        this.img
        this.caption
        this.sources = JSON.parse(this.ele.dataset.sources)
        this.basePath = `${window.location.href.split(data.root)[0]}${data.root}`
        this.localPath = this.sources[0][0]
        this.currentIndex = 0
        this.buildPresentationElements()
        this.changeSource()
    }

    buildPresentationElements()
    {
        if (this.sources.length > 1)
        {
            this.buildLeftNav()
            this.buildRightNav()
        }

        this.img = document.createElement('img')
        this.ele.appendChild(this.img)

        this.caption = document.createElement('div')
        this.caption.classList.add('caption')
        this.ele.appendChild(this.caption)
    }

    buildLeftNav()
    {
        this.left = document.createElement('div')
        this.left.classList.add('left')
        this.left.innerText = "<"
        this.left.addEventListener('click',()=>{
            this.previous()
        })
        this.ele.appendChild(this.left)
    }
    
    previous()
    {
        if (this.currentIndex > 0){
            this.currentIndex--
        } else {
            this.currentIndex = this.sources.length - 1
        }
        this.changeSource()
    }

    buildRightNav()
    {
        this.right = document.createElement('div')
        this.right.classList.add('right')
        this.right.innerText = ">"
        this.right.addEventListener('click',()=>{
            this.next()
        })
        this.ele.appendChild(this.right)
    }

    next()
    {
        if (this.currentIndex < this.sources.length - 1){
            this.currentIndex++
        } else {
            this.currentIndex = 0
        }
        this.changeSource()
    }

    changeSource()
    {
        this.img.src = `${this.basePath}${this.sources[this.currentIndex][0]}`
        this.caption.innerText = this.sources[this.currentIndex][1]
    }
}
