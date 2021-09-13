import React from 'react'
import styled from 'styled-components'
import mobileBoostBackground from '/images/bg-boost-mobile.svg'
import desktopBoostBackground from '/images/bg-boost-desktop.svg'
import Logo from './Logo'
import facebook from '/images/icon-facebook.svg'
import instagram from '/images/icon-instagram.svg'
import twitter from '/images/icon-twitter.svg'
import pinterest from '/images/icon-pinterest.svg'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`
const StyledTopSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4em 0;
  background-color: #3b3054;
  background-image: url(${mobileBoostBackground});
  background-repeat: no-repeat;
  background-position: center right;
  h2 {
    text-align: center;
    color: white;
    font-size: 1.5rem;
  }
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: white;
    padding: 0.8em 3em;
    margin: 1em auto;
    border: none;
    border-radius: 2em;
    background-color: #2acfcf;
    transition: background-color 300ms;
    &:active {
      background-color: #bfbfbf;
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: #bfbfbf;
        transition:background-color 300ms;
      }
      &:active {
        background-color:#2acfcf;
      }
    }
  }
  @media screen and (min-width: 780px) {
    background-image: url(${desktopBoostBackground});
    background-position: center;
    background-size: cover;
    padding: 2em;
    h2 {
      text-align: center;
      color: white;
      font-size: 2.3rem;
    }
    button {
      margin: 2em auto;
    }
  }
`

const StyledBottomSide = styled.div`
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232127;
  .logo {
    height: 30px;
    width: 100px;
    color: white ;
    margin: 1em auto;
  }
  .links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section {
    margin: 1em 2em;
    h3 {
      text-align: center;
      color: white;
      margin: 0 auto 1em auto;
      font-size: 1.2rem;
    }
    ul {
      margin: 0.5em auto;
      li {
        cursor: pointer;
        text-align: center;
        list-style: none;
        margin: 0.2em 0;
        color: #bfbfbf;
        transition: color 200ms;
        &:hover {
          color: #2acfcf;
          transition: color 100ms;
        }
      }
    }
  }
  .socials-container {
    margin: 2em auto 0 auto;
    display: flex;
    .icon {
      fill: white;
      margin: 0.5em;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 768px) {
    .links-container {
      flex-direction: row;
      align-items: flex-start;
    }
    .section {
      margin: 1em 2em;
      h3 {
        text-align: left;
      }
      ul {
        margin: 0.5em auto;
        li {
          text-align: left;
        }
      }
    }
  }
  @media screen and (min-width: 960px) {
    padding: 5em 2vw;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    .logo {
        margin: 0 1.5em;
      width: 10em;
      height: 50px;
    }
    .links-container {
      flex: 2;
      justify-content: center;
      flex-direction: row;
      align-items: flex-start;
      .section {
        margin: 0 2vw;
        min-width: 130px;
      }
    }
    .socials-container {
      flex: 1;
      margin: 0 auto;
      justify-content: center;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledTopSide>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </StyledTopSide>
      <StyledBottomSide>
        {/* <img className='logo'
          src={Logo} /> */}
          <Logo />
        <div className='links-container'>
          <div className='section'>
            <h3>Features</h3>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className='section'>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className='section'>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='socials-container'>
          <img className='icon'
            src={facebook} />
          
          <img className='icon'
            src={twitter} />
          
          <img className='icon'
            src={pinterest} />
          
          <img className='icon'
            src={instagram} />
          
        </div>
      </StyledBottomSide>
    </StyledFooter>
  )
}

export default Footer