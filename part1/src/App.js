import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
    
    
  )
}


const Statistics = (props) => {
  if (props.value1 ===0 && props.value2===0 && props.value3===0)
  {
    return(
      <div>No feedback given</div>
    )
  }
  return (
    <table>
    <tbody>
          <tr>
          <td>{props.text1}</td>
          <td>{props.value1}</td>
          </tr>
          <tr>
          <td>{props.text2}</td>
          <td>{props.value2}</td>
          </tr>
          <tr>
            <td>{props.text3}</td>
            <td>{props.value3}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.value1+props.value2+props.value3}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(props.value1-props.value3)/(props.value1+props.value2+props.value3)}</td>
            </tr>
          <tr>
            <td>positive</td
            ><td>{100*(props.value1+props.value2)/(props.value1+props.value2+props.value3)}%</td>
            </tr>
    </tbody>
    </table>
    
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <p> give feedback </p>
      <Button handleClick={()=> setGood(good+1)} text="good"/>
      <Button handleClick={()=> setBad(bad+1)} text="bad"/>
      <Button handleClick={()=> setNeutral(neutral+1)} text="neutral"/>

      <p>statistic</p>
      
      
      <Statistics value1={good} value2={neutral} value3={bad} text1="good" text2="neutral" text3="bad"/>
      
          
    </div>
    
  )
}



 

export default App