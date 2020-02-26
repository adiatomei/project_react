import React from 'react'
import UserName from './UserName'
import Password from './Password'
import LoginBtn from './LoginBtn'
import SignUp from './SignUp'
import styled from 'styled-components'

//Component

function BoxLogin() {
    return (
        <Form>
            <UserName/>
            <Password/>
            <LoginBtn/>
            <SignUp/>    
        </Form>
    )
}

//Style

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

export default BoxLogin