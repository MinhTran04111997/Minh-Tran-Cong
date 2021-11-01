import React, { useState } from 'react'

const Button = (props) => {
  
   
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
    
    
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [Vote, setVote]= useState([0,0,0,0,0,0,0])
  const biggest = [...Vote]
  let max=biggest[0]
  let index=0
  let i

  for (i = 0; i < 7; i++) 
    {
      if (max < biggest[i]) 
      {
        max = biggest[i];
        index = i;
      }
    }
  console.log(Vote)
  
  

  

 return (
    <div>
      <h1>ANECDOTE OF THE DAY</h1>
      {anecdotes[selected]}
      
      <div>has {Vote[selected]} votes</div>
      
      <div>
        <Button handleClick={()=>{
          const copy = [...Vote]
          copy[selected] +=1
          
          setVote(copy)
      }} text="vote" />
      <Button handleClick={()=> setSelected(Math.floor(Math.random() * 7))} 
                    number={selected} 
                    text="next anecdote"/></div>

     <h1>ANECDOTE WITH MOST VOTE</h1>
     <div>{anecdotes[index]}</div>
     <div>has {Math.max(...Vote)} votes</div>
      
      

    </div>
  )
  
  

  
}

export default App