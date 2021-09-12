import React from 'react'
import styled from 'styled-components'
import logo from '/images/logo.svg'

const StyledLogo = styled.a`
  width: 6em;
  height: 3em;
  margin: 1em 0;
  @media screen and (min-width: 780px) {
    width: 10em;
    height: 3em;
    margin: 0 1em;
  }
`

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="logo"/>
    </StyledLogo>
  )
}

export default Logo