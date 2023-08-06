import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'



const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')            //state hook for the username
  const [password, setPassword] = useState('')            //state hook for the password
  const [user, setUser] = useState(null)
  const [notification,setNotification] = useState('')



  useEffect(() => {                                       //effect hook for storing the state of user
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser') // fetch the user detail from  lcal st
    if (loggedUserJSON) {         //check weather the user already stored in the local storage or not
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)         //if user found in local storage token is set for the user
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>                       //fetch all blogs from the server
      setBlogs(blogs)
    )
  }, [])

  const handleLogin = async (event) => {                     // login start
    event.preventDefault()

    try {
      const user = await loginService.login({                 // calls login service which return the login 
        username, password,                                   //  credential and token 
      })
      window.localStorage.setItem(                            // store the returned value from the last call
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)                        // set the token for future  with the help of 
      setUser(user)                                           // set token functin in blogs serveices
      setUsername('')
      setPassword('')

    } catch (exception) {
      setNotification("Wrong Username or Password")
      setTimeout(() => {setNotification('')}, 4000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser');
    setUser(null)
  }

  const createBlogForm = () => (
    <Togglable buttonLabel='New Blog'>
      <BlogForm addBlog={addBlog} />
    </Togglable>
    // <form onSubmit={handleCreatBlog}>
    //   <h1>Create new Blog</h1>
    //   <div>
    //     title:
    //     <input
    //       type="text"
    //       value={title}
    //       name="Title"
    //       onChange={({ target }) => setTitle(target.value)}
    //     />
    //   </div>
    //   <div>
    //     author:
    //     <input
    //       type='text'
    //       value={author}
    //       name='author'
    //       onChange={({target}) => setAuthor(target.value)}
    //     />
    //   </div>
    //   <div>
    //     url:
    //     <input
    //       type='text'
    //       value={url}
    //       name='url'
    //       onChange={({target}) => setUrl(target.value)}
    //     />
    //   </div>
    //   <button type='submit'>Add</button>
    // </form>
  )

  const addBlog = async (newBlog) => {
    try {
      const returnedBlog = await blogService.create(newBlog)
      setBlogs(blogs.concat(returnedBlog))
      setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`)
      setTimeout(() => {setNotification('')}, 5000)
    }
    catch{
      setNotification("Some error occur! frontend ")
      setTimeout(() => {setNotification('')}, 5000)
    }
  }

  const modifyLikes = async (newBlog) =>{
    try{
      const returnedBlog = await blogService.update(newBlog)
      setBlogs(blogs.map(blog => blog.id !== newBlog.id?blog:returnedBlog))
      setNotification(`You Liked This Blog`)
      setTimeout(() => {setNotification('')}, 5000)
    }
    catch{
      setNotification(`Some Error Occur!`)
      setTimeout(() => {setNotification('')}, 5000)
    }
  }

  const deleteBlog = async (id)=>{
    try{
      const ans = window.confirm('are you sure you want to delete the blog')
      if(ans){
      await blogService.del(id)
      setBlogs(blogs.filter(blog=> blog.id!=id))
      }
    }
    catch{
      setNotification(`Some Error Occur! in delte frontend`)
      setTimeout(() => {setNotification('')}, 5000)
    }
  }

 

//****************************************************return **************************************** */
  if (user === null)
    return (
      <div>
      <Notification notification={notification} />
      {loginForm()}
      </div>
    )
  else
    return (
      <div>
        <Notification  notification={notification} />
        <h2>blogs</h2>
        <div>{user.name} logged in</div>
        <button type='button' onClick={handleLogout}>logout</button>
        {createBlogForm()}
        {blogs.map(blog => <Blog key={blog.id} id={blog.id} blog={blog} modifyLikes={modifyLikes} deleteBlog={deleteBlog}/>)}
      </div>
    )

}

export default App