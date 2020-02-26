import React from 'react'
import styled from 'styled-components'

function UserName() {
    return (
        
        <Input type = "text"/>
        
    )
}

//Style

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

export default UserName