 import React, { Component } from 'react'
 import NavBar from './NavBar'

 const Footer = (props) => {
     return (
        <footer className="flex h-20 bg-violet-100 gap-4 items-center px-4">
        <h4><a href="http://localhost:3000/">{props.brand}</a>&copy; 2022</h4>
        <NavBar 
        type="footer" 
        />
    </footer>
     )
   }
 
 
 export default Footer