import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

//Component

function LoginScreen(props) {
    return (
        
        <div>
           <GlobalStyle/>
           <Form>
               <Input type = "text" placeholder = "Username"/>
               <Input type = "password" placeholder ="Password"/>
               <Button type="submit">Login</Button>
               <p>Not registered? <A href="#">Create an account</A></p>
           </Form>
        </div>
    )
}

//Style



const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f3ddd6;
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



export default LoginScreen