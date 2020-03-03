import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useHistory } from "react-router-dom"

function Home(props) {
  let history = useHistory();
  function redirect(item) {
    history.push("/");
    
  }
  return (
    <ThemeContext.Consumer>{(context) => {
      return(
        <div>
          <h1>Home</h1> 
          <button onClick={redirect}>SignOut</button>
        </div>
        
      )
      
    }}</ThemeContext.Consumer>
  )
}
export default Home;