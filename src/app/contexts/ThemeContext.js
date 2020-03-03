import React, { createContext, useState } from 'react'
export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [status, setStatus] = useState('');
    const [ pass, setPass ] = useState("");
    const [ username, setUsername ] = useState("");
    
    function handleChangeP(e) {
        setPass(e.target.value);
    }; 

    function handleChangeU(e) {
        setUsername(e.target.value);
    };
   

    function handleClick(e) {
    
        e.preventDefault();
        if(username || pass) {
          if(pass.length >= 6) {
            setStatus('Login');
            
          }else{
            setStatus('ErrorLength'); 
          }
        }else{
          setStatus("ErrorBlank");
        }
        
      };
     
    return (
      <ThemeContext.Provider value = {{setPass: setPass, setUsername: setUsername, pass: pass, username: username, handleChangeP: handleChangeP, handleChangeU: handleChangeU, handleClick: handleClick, status: status}}>
        {props.children}
      </ThemeContext.Provider>
        
    )
}

export default ThemeContextProvider;