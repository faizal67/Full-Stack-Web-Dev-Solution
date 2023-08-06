import { useState } from "react"

const Blog = ({id, blog ,modifyLikes,deleteBlog}) => {

  const [view, setView] = useState(false)

  const blogStyle = {
    padding: 10,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const toggleView=()=>{
    view?setView(false):setView(true)
  }

  const likeHandler= ()=>{
    const newBlog = {
      ...blog,
      likes:blog.likes+1
    }
    modifyLikes(newBlog)
  }
  const deleteHandler=()=>{
    deleteBlog(id)
  }


  if (view)
    return (
      <div style={blogStyle}>
        <div>title: {blog.title} </div>
        <div>Author: {blog.author} </div>
        <div> url: {blog.url}</div>
        <div> likes: {blog.likes} 
          <button onClick={likeHandler}>Like</button>
        </div>
        <button onClick={deleteHandler}>delete</button>
        <button onClick={toggleView}>Show Less</button>
      </div>
    )

  else {
    return (
      <div style={blogStyle}>
        <div>title: {blog.title} </div>
        <button onClick={toggleView}>Show More</button>
      </div>
    )
  }

}

export default Blog