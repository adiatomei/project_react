import React from 'react'
import styled from 'styled-components'


function SignUp() {
    return (
        <p>Not registered? <A href="#">Create an account</A></p>
    )
}

const A = styled.a`
  color: #ccf7fd;
  text-decoration: none;
  :hover{
      color: #ffc979;
  }
`
export default SignUp