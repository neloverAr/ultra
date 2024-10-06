
import React from 'react';
import {NavBarSection,Logo,LogoText,UlList,ListItem,Anchor,NavLink} from './style.js'

const Navbar = () => {
    return(
        <NavBarSection className="navbar">           
            <div className="container">      
                <Logo className="logo">
                    <LogoText className="logo-text">Ultra Profile</LogoText>
                </Logo>
                <UlList className="ul-list">
                    <ListItem className="list-item"><NavLink to="/">Home</NavLink></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">About</Anchor></ListItem>
                    <ListItem className="list-item"><NavLink to="/contact">Contact</NavLink></ListItem>
                </UlList>
            </div>
        </NavBarSection>
            
    )
}

export default Navbar;
