import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Redirect } from "react-router-dom";
import { ThemeContext } from '../contexts/ThemeContext';


//Component

function LoginScreen(props) {

  return (
    <ThemeContext.Consumer>{(context) => {
      
      return(<div>
        <GlobalStyle/>
        <Form>
          <Input type = "text" name = "username" value = {context.username} onChange = {context.handleChangeU} placeholder = "Username"/>
          <Input type = "password" name = "pass" value = {context.pass} onChange = {context.handleChangeP} placeholder = "Password"/>
          <Button type="submit" onClick = {context.handleClick}>Login</Button>
          {context.status === "ErrorBlank" ? (<P>You need to complete all the fields</P>)
          : context.status === "ErrorLength" ? (<P>The password need to be bigger or equal than 6 characters</P>)
          : context.status ==="Login" ? <Redirect to="/Home" />
          : ""
          
          }
          <p>Not registered? <A href="#">Create an account</A></p>
        </Form>
      </div>)
    }}</ThemeContext.Consumer>
  );
}

//Style



const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f3ddd69;
  }

`

const Form = styled.form`
  width: 581px;
  height: 200px;
  margin: 0 auto;
  margin-top: 33vh;
  padding: 50px 0 50px 0;
  text-align: center;
  background-color: #dc7272cc;
  border-radius: 10px;


`

const Input = styled.input`
  width: 250px;
  height: 30px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  color: #886666;
  :change {
    outline: none;
}
`
const Button = styled.button`
   width: 100px;
   height: 30px;
   display: block;
   margin: 0 auto;
   margin-top: 20px;
   background-color: #6b4343;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   font-size: 15px;
   font-weight: bold;
   color: white;
   :hover{
       background-color: white;
       color: #6b4343;
    }

    :focus {
       outline: none;
    }
`

const A = styled.a`
  color: #ccf7fd;
  text-decoration: none;
  :hover{
      color: #ffc979;
  }
`
const P = styled.a`
  color: #9e093c;
  font-size: 20px;
`



export default LoginScreen