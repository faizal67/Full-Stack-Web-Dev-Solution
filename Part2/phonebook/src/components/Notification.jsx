function removemessage (messageHandler) {
        messageHandler('')
}

const messageStyle = {
    color: 'red',
    border: '2px solid red',
    padding: '10px 10px'
}

const Notification = ({message,messageHandler}) =>{
    setTimeout(() => {
        console.log("start")
        removemessage(messageHandler)
    }, 5000)
    if (message === null) {
        return null
      }
    return (
        <div className="notification" style={messageStyle}>
            {message}
        </div>
    )
}
export default Notification