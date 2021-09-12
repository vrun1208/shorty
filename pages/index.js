import React, {useState, useEffect} from 'react'
import styled from "styled-components"
//import { useForm } from 'react-hook-form';
import HeaderSection from './mid';
import Navbar from './navbar';
import Footer from './footer';
//import Shorty from './short';
import Advance from './midTwo';
//import Nav from "./navbar";

const StyledApp = styled.main`
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  max-width: 2400px;
  margin: 0 auto;
  padding: 0;
`;

export default function Home() {


  return (<StyledApp>
    <Navbar />
<HeaderSection />
<Advance />
<Footer />
  </StyledApp>
    
  );
}
