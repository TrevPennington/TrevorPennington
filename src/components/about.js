import React from "react"
import { Link } from "gatsby"
import Button from "../components/button"
import "./about.css"

export default () => (
    <div className='aboutContainer'>
        <h1 className='aboutTitle'>About Me</h1>
        <p className='aboutText'>I am a front end developer from Raleigh, NC specializing in React, GraphQL, and Gatsby.</p>
        <Link className='aboutLink' to='/about' ><Button children='more about me' /></Link>
    </div>
)