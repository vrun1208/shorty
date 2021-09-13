import React from 'react'
import styled from "styled-components"
//import { useForm } from 'react-hook-form';
import HeaderSection from './Mid';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Advance from '../component/MidTwo';
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
