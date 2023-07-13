const Addform = ({ submitHandler, newName, changeName, newPhone, changePhone }) => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          name: <input value={newName} onChange={changeName} />
          Phone No: <input value={newPhone} onChange={changePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}
export default Addform