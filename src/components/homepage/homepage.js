import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        // HomePage
        <div className="homepage">
            <h1>You are Logged Out</h1>
            <div className="button" onClick={() => setLoginUser({})} >Login Again</div>
        </div>
    )
}

export default Homepage