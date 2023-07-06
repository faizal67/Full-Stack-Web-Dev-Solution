import { useState } from 'react'


const StatisticLine = (props) => <tbody><tr><td>{props.text}</td><td>{props.value}</td></tr></tbody>

const Statistic = ({ good, neutral, bad, total, average, positive }) => {

  if (total == 0)
    return (<h2>There is no feedback :)</h2>)
  return (
    <div>
      <h2>Statistics-</h2>
      <table >
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <tbody><tr><td>all: </td><td>{total}</td></tr></tbody>
        <tbody><tr><td>average: </td><td>{average}</td></tr></tbody>
        <tbody><tr><td>positive: </td><td>{positive}</td></tr></tbody>
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [sum, setSum] = useState(0);

  const clickGood = () => {
    const totalGood = good + 1;
    const totalSum = sum + 1;
    const tot_al = totalGood+neutral+bad;
    setGood(totalGood);
    setTotal(tot_al);
    setSum(totalSum);
    setAverage(totalSum / tot_al);
    setPositive((totalGood / tot_al) * 100);
  }
  const clickNeutral = () => {
    const totalNeutral = neutral+1;
    const tot_al = bad+good+totalNeutral;
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setAverage(sum / tot_al);
    setPositive((good / tot_al) * 100);
  }
  const clickBad = () => {
    const totalBad = bad+1;
    const tot_al = totalBad+good+neutral;
    const totalSum = sum - 1;
    setBad(totalBad);
    setTotal(total + 1);
    setSum(sum - 1);
    setAverage(totalSum / tot_al);
    setPositive((good / tot_al) * 100);
  }

  return (
    <div>
      <h1>Give FeedBack</h1>
      <button onClick={clickGood} >Good</button>
      <button onClick={clickNeutral} >Neutral</button>
      <button onClick={clickBad} >Bad</button>
      <Statistic good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App;
