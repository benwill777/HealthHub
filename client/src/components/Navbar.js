import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const NavBar = styled.div`
background-color: palegreen;
opacity: 0.9;
display: flex;
justify-content: space-around; 
flex-direction: column;
width: 100vw;
font-size: 35px;
box-shadow: 0px 6px 6px rgba(0,0,0,0.5);
margin-bottom: 8px;

h2 {
   color: whitesmoke;
   font-family: fantasy;
   text-decoration: underline overline;
  
}
p{
       font-size: 20px;
   }
`
class Navbar extends Component {
    render() {
        return (
            <NavBar> <div>
                <Link to='/'> <h2>HealthHub</h2></Link>
                <p>Recipe Nutrition Analysis </p>
            </div></NavBar>
        );
    }
}

export default Navbar;