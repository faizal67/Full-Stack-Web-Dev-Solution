import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // const n = anecdotes.length;
  var [max,setMax] = useState(0)
  const [maxIndex,setIndex] = useState(0)
  const [points,setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const voteHandler = () => {
    const copy = [...points]
    copy[selected]+=1
    setPoints(copy)
    if(points[selected] > max){
      setMax(points[selected])
      setIndex(selected)
    }
  }

  const [selected, setSelected] = useState(0)
  const nextHandler = () => {
    const randomIndex = Math.floor(Math.random() * 8);
    setSelected(randomIndex)

  }

  return (
    <div>
      <h2>Anecdotes of the Day</h2>
      {anecdotes[selected]}
      <br />
      <p> has: {points[selected]} vote.</p>
      <button onClick={voteHandler}>UpVote</button>{" "}
      <button onClick={nextHandler}>Next anecdotes</button>
      <h2>Anecdotes with Maximum votes</h2>

      {console.log(maxIndex,points)}
      {anecdotes[maxIndex]}
    </div>
  )
}

export default App
