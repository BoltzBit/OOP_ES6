class Post {
    constructor(title,date){
        this.title = title
        this.date = date
    }

    static comaparePosts(item1,item2){
        return item1.date - item2.date
    }
}


const posts = [
    new Post('Title 1', new Date(2018,8,4)),
    new Post('Title 2', new Date(2018,8,6)),
    new Post('Title 3', new Date(2018,9,4)),
    new Post('Title 4', new Date(2018,8,5)),
    new Post('Title 1', new Date(2018,8,20)),
    new Post('Title 1', new Date(2018,8,15))
]

let a = posts.sort(Post.comaparePosts)

console.log(a)