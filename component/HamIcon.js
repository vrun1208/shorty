import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div`
  height: 10px;
  width: 15px;
  align-items: flex-end;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 780px) {
    display: none;
  }
  
`

const HamIcon = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
       
      <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"/>

    </StyledBurger>
  )
}

export default HamIcon