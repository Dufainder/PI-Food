import React from 'react'
import { Nav, NavContainer } from './styledNavbar'
import SearchBar from '../SearchBar/index'
import { CreateRecipeSVG, LogoSVG } from '../Home/HomeStyled'
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <Nav>
        <NavContainer>
          <LogoSVG/>
          <SearchBar/>
          <div>

          <Link to='/create'>
                  <CreateRecipeSVG/>
              </Link> 
       </div>
        </NavContainer>
    </Nav>
  )
}
