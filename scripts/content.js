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
        let container = new Ele('div').AddClass('container').InnerHTML(html).Element
        this.div.appendChild(container)
        this.buildSlides()
        this.resize()
        this.addTagsSection(container)
        this.addCommentsSection(container)
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

    addTagsSection(container){
        let ele = new Ele('fieldset').AddClass('tags')
        ele.AppendChild(new Ele('legend').AddClass('legend').InnerText('TAGS').Element)
        this.post.tags.forEach((t) => {
            ele.AppendChild(new Ele('div').AddClass('tag').InnerText(t).Element)
        })
        container.appendChild(ele.Element)
    }

    addCommentsSection(container)
    {
        let ele = new Ele('fieldset').AddClass('comments')
        ele.AppendChild(new Ele('legend').AddClass('legend').InnerText('COMMENTS').Element)
        ele.AppendChild(this.commentInput)
        ele.AppendChild(this.commentSaveButton)
        ele.AppendChild(this.commentsDiv)
        container.appendChild(ele.Element)
        this.loadComments()
    }

    get commentInput()
    {
        let result = new Ele('textarea').Id('newComment').AddClass('comment')
        if (funtilityApi.userIsSignedIn)
        {
            result
                .Placeholder('Care to comment?')
        } else {
            funtilityApi.signOut
            result
                .Placeholder('You must be signed in to comment.')
                .Disable()
        }
        return result.Element
    }

    get commentSaveButton()
    {
        if (funtilityApi.userIsSignedIn)
        {
            return new Ele('button')
                .AddClass('save-comment')
                .InnerText('Save Comment')
                .Event_Click(() => { 
                    this.saveComment()
                })
                .Element
        } else {
            return new Ele('div').Element
        }
    }

    saveComment()
    {
        let body = this.saveCommentBody()
        if (body !== {})
        {
            let commentsDiv = document.getElementById('comments')
            funtilityApi
                .POST('Hugelhaus/Comment',body)
                .then((res) => {
                    commentsDiv.prepend(this.comment(res.result))
                })
        }
    }

    saveCommentBody()
    {
        let commentEle = document.getElementById('newComment')
        if(!this.post || !this.post.id || !commentEle.value) {
            return {}
        } else {
            let result = {
                'Id': 0,
                'UserPublicId': '',
                'PostId': `${this.post.id}`,
                'TimeStamp': '',
                'Content': commentEle.value
            }
            commentEle.value = ''
            return result 
        }
    }

    get commentsDiv()
    {
        return new Ele('div')
            .Id('comments')
            .Element
    }

    loadComments()
    {
        let commentsDiv = document.getElementById('comments')
        funtilityApi
            .GET('Hugelhaus/Comments',[['postId',this.post.id]])
            .then((res) => {
                res.result.sort(this.compareComment)
                res.result.forEach((comment) => {
                    console.log(comment)
                    commentsDiv.appendChild(this.comment(comment))
                })
            })
    }

    compareComment(a,b)
    {
        if(a.commentId < b.commentId) return 1
        if(a.commentId > b.commentId) return -1
        return 0
    }

    comment(comment)
    {
        let container = new Ele('div').AddClass('comment').Id(comment.commentId)
        let name = new Ele('div').AddClass('name').InnerText(comment.userName).Element
        container.AppendChild(name)
        let time = new Ele('div').AddClass('time').InnerText(this.parseTimeStamp(comment.timeStamp)).Element
        container.AppendChild(time)
        let text = new Ele('div').AddClass('comment-content').InnerText(comment.content).Element
        container.AppendChild(text)
        let result = container.Element
        result.dataset.comment = JSON.stringify(comment)
        return result
    }

    parseTimeStamp(timeStamp)
    {
        let n = timeStamp.split('-')
        let date = new Date(Date.UTC(n[0],n[1],n[2],n[3],n[4])).toString()
        let l = date.split(' ')
        let t = l[4].split(':')
        return `${l[0]} ${l[1]} ${l[2]} ${l[3]} ${t[0]}:${t[1]}`
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
        this.img.src = `http://www.hugelhaus.com${this.sources[this.currentIndex][0]}`
        this.caption.innerText = this.sources[this.currentIndex][1]
    }
}
