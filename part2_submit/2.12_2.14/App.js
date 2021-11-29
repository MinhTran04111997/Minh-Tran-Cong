import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  
  const [searchName, setsearchName]=useState('')
  const [subMitt,setsubMitt]=useState(false)
 
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const Button = (props) => {
  
   
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
      
      
    )
  }
  
  



const comPare = () => {
  
  const newArray=[]
  countries.map((country,i) => newArray[i]=country.name.official )
  console.log(newArray)
  let count=0
  let x=0
  let diffsubmit = false
  let i
  for ( x=0; x<countries.length; x++){
    if (newArray[x].toLowerCase().includes(searchName.toLowerCase())=== true){
      count +=1
    }
    console.log(count)

  }
  if (searchName === ''){
  return (
  <div></div>
)
  }
  if (searchName !== '') {
    if (count<=10){
      
      return (
        countries.map((country,i) => {
    
        if (newArray[i].toLowerCase().includes(searchName.toLowerCase())=== true){
          if(count !== 1) {
            if (diffsubmit === subMitt){
            
            return (
              <div>
                <div
                key={i}>{country.name.official} 
                
               </div>
               <Button handleClick={()=>{
                
                 setsubMitt(!subMitt)
                 console.log(country.name)
                
                 }} text="show" />
               


              </div>
              
              
            )
            
            }
            if (diffsubmit !== subMitt){
              const languages = Object.values(country.languages)

              return (
                <div>
                  <div>
              <h1>{country.name.official}</h1>
              <div>Capital: {country.capital}</div>
              <div>Population: {country.population}</div>
              <h3>Languages:</h3>  {languages.map((language,i) => <li key={i}>{language}</li>)}
              <img src={country.flags.png} />


            </div>
                  <Button handleClick={()=>{
                        
                        setsubMitt(!subMitt)
                        
                       
                        }} text="exit show" />
                </div>
              )
            }
          }
          if (count === 1){
            return (
              <div> {RenderCountry(country)}
              </div>
            )
            
            
          }
      
          
        }
      return (
      < div key={i}></div>
        )
      })
    )
    
     
  }
    else if (count >=10){
      return (
        <div>Too many matches, specify another filter</div>
        )   
    }
    
    

}
}


const RenderCountry = (country) => {
  
  const languages = Object.values(country.languages)
          return (
           
            
            <div>
              <h1>{country.name.official}</h1>
              <div>Capital: {country.capital}</div>
              <div>Population: {country.population}</div>
              <h3>Languages:</h3>  {languages.map((language,i) => <li key={i}>{language}</li>)}
              <img src={country.flags.png} />


            </div>
            
          )
}

const handlesearchName = (event) => {
  console.log(event.target.value)
  setsearchName(event.target.value)
  
}
return (
    <div>
      <h2>Country search</h2>
      <div>
        enter the name to search: 
        <input value ={searchName}
               onChange={handlesearchName}    ></input>
      </div>
      
      
      
      <div >{comPare()}</div>
      
          
      
    </div>
  )
}

export default App