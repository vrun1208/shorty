import React from 'react'
import styled from "styled-components"
//import { useForm } from 'react-hook-form';
import HeaderSection from './Mid';
import Navbar from './Navbar';
import Footer from './Footer';
import Advance from './MidTwo';


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
