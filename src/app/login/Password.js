import React from 'react'
import styled from 'styled-components'

function Password() {
    return (
        
        <Input type = "password"/>
        
    )
}

//Style

const Input = styled.input`
  width: 250px;
  height: 30px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
`

export default Password