const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const sumWithInitial = blogs.reduce((total, blogs) => total+blogs.likes,0)
    return sumWithInitial
    }


const favouriteBlog = (blogs) => {
    const favourite = blogs.map((a)=> a.likes).reduce((x,y)=> Math.max(x,y))
    const index = blogs.findIndex(x=> x.likes===favourite)
    return blogs[index]
}


const mostBlogs = (blogs) => {
    const maxAuthor = {
        author:"",
        blogs:0
    }
   
    const authors = blogs.map((blog)=>blog.author)
    const counts = {}

    for (const num of authors) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    for(let key in counts){
        if(counts[key] > maxAuthor.blogs){
            maxAuthor.author = key
            maxAuthor.blogs = counts[key]
        }
    }


    return maxAuthor;

}

const mostLikes = (blogs) => {
    const author = {
        author: "",
        likes: 0
    }
    // const authors = blogs.map(blog => {
    //     const newAuthor ={
    //         author: blog.author,
    //         likes: blog.likes
    //     }
    //     return newAuthor
    // })
    for(let num in blogs){
        if(blogs[num].likes > author.likes)
        {
            author.author = blogs[num].author
            author.likes = blogs[num].likes
        }
    }
    return author

}

module.exports = {
  dummy, totalLikes,favouriteBlog,mostBlogs, mostLikes
}