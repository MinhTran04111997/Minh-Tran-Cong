import React from 'react'


const Course =({course}) => {
    const Header = () => {
        return (
          <h2>{course.name}</h2>
        )
    }
    const Content = () => {
      //let i=0
      //course.parts.map(courseinformation => i+= courseinformation.exercises)
      
        let initialValue =0    
        let sum =course.parts.reduce(
            (previousValue, currentValue) => previousValue + currentValue.exercises, initialValue)

        console.log(sum)
      
      
      return (
        <div>
        <ul>
            {course.parts.map(courseinfo => {
              return (
            
              <li key={courseinfo.id}>
                {courseinfo.name} {courseinfo.exercises}
              </li>
              )
            
            }
            )}
        </ul>
        <h3>total of {sum} exercises</h3>
        
       
        </div>

      )
    }

    
  
  return (
  <div>
  
  <Header/>
  <Content/>
  
  
      
  </div>

)
  

}

export default Course
