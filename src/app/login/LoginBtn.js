import React from 'react'
import styled from 'styled-components'

function UserName() {
    return (
        
        <Button type="submit">Login</Button>
       
    )
}

//Style

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

export default UserName

