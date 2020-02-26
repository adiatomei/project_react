import React from 'react'
import BoxLogin from '../login/BoxLogin'
import styled from 'styled-components'

//Component

function LoginScreen(props) {
    return (
        <Box>
           <BoxLogin/>
        </Box>
    )
}

//Style

document.body.style = 'background: #f3ddd6;';

const Box = styled.div`
   display: table;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
`



export default LoginScreen