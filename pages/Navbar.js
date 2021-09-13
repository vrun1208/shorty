import React, { useState } from 'react'
import styled from 'styled-components'
import Desktop from '../component/Desktop'
import Logo from '../component/Logo'
import Phone from '../component/Phone'
import HamIcon from '../component/HamIcon'


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