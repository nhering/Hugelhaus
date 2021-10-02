class Content {
    constructor(data = {}){
        this.div = document.getElementById("content")
        window.addEventListener('resize',()=>{
            this.resize()
        })
        this.root = "Hugelhaus"
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
        this.resize()
        this.buildCarousels()
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

    resize(){
        let container = document.querySelector('.container')
        let w = container.clientWidth - 4
        document.querySelectorAll('.img-caption')
            .forEach((e) => {
                this.fitCaption(e,w)
            })
    }

    fitCaption(caption,width){
        caption.style.width = `${width}px`
        caption.querySelector('img').style.width = `${width}px`
    }

    buildCarousels(){
        document.querySelectorAll('.carousel')
        .forEach(c => {
            new Carousel({
                root: this.root,
                ele: c
            })
        })
    }
}

class Carousel {
    constructor(data = {}){
        console.log('Carousel.constructor')
        // elements
        this.ele = data.ele || document.createElement('div')
        this.img = this.ele.querySelector('img')
        this.left = this.ele.querySelector('.left')
        this.right = this.ele.querySelector('.right')
        // other properties
        this.sources = JSON.parse(this.ele.dataset.sources)
        this.basePath = `${window.location.href.split(data.root)[0]}${data.root}`
        this.localPath = this.img.src.split(this.basePath)[1]
        this.currentIndex = this.sources.indexOf(this.localPath)
        
        this.left.addEventListener('click',()=>{
            this.previous()
        })
        this.right.addEventListener('click',()=>{
            this.next()
        })
    }

    previous(){
        console.log("previous")
        if (this.currentIndex > 0){
            this.currentIndex--
        } else {
            this.currentIndex = this.sources.length - 1
        }
        this.changeSource()
    }

    next(){
        console.log("next")
        if (this.currentIndex < this.sources.length - 1){
            this.currentIndex++
        } else {
            this.currentIndex = 0
        }
        this.changeSource()
    }

    changeSource(){
        console.log("changeSource")
        this.localPath = this.sources[this.currentIndex]
        console.log(this.localPath)
        let src = `${this.basePath}${this.localPath}`
        console.log(src)
        this.img.src = src
    }
}
