import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './Header'

function Header() {
  return (
    <S.ContainerHeader>
      <S.SectionLogo>
        <NavLink to='/'>
          <h1>World Country Flags</h1>
        </NavLink>
      </S.SectionLogo>
      <S.SectionNav>
        <S.ListNav>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/countries'>List</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </S.ListNav>
      </S.SectionNav>
    </S.ContainerHeader>
  )
}

export default Header
