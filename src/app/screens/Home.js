import React from 'react'
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();
    return (
        <div>
           <h1>Home</h1> 
           <button onClick={() => history.push("/")}>SignOut</button>
        </div>
    )
}
export default Home