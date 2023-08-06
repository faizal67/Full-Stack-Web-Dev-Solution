const Notification = ({notification}) => {
    const notificationStyle = {
        position:'fixed',
        color:'red',
        border:'2px solid red',
        backgroundColor:'white',
        left:'50%',
        transform:'translate(-50%)',
        padding:'15px',
        transiton: '3s'


    }

    if(notification==='')
    return (<div></div>)
    return (
      <div style={notificationStyle}>
        {notification}
      </div>
    )
}

export default Notification