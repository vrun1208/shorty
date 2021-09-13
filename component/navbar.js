import React, { useState } from 'react'
import styled from 'styled-components'
import Desktop from './Desktop'
import Logo from './Logo'
import Phone from './Phone'
import HamIcon from './HamIcon'


const StyledNav = styled.nav`
  width: clamp(5em, 90%, 1400px);
  margin: 0 auto;
  padding: 1em;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 780px) {
    margin: 2em auto 0 auto;
  }
`

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledNav>
      <Logo />
      <Desktop /> 
      <Phone open={open} setOpen={setOpen} />
       <HamIcon open={open} setOpen={setOpen}/>
    </StyledNav>
  )
}

export default Navbar