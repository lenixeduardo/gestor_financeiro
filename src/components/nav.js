import React from 'react';
import styled from 'styled-components';
import { UilUserCircle } from '@iconscout/react-unicons'

const NavMenu = styled.div`
height: 8vh; 
background-color: #F9FDFF;
display: flex;
justify-content: space-between;

width: 98%;
position: relative;
`

const Logo = styled.img`
width: 200px;
height: auto;
`



const Login = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const Icon = styled(UilUserCircle)`
  width: 35px;
  height: 35px;
 color: #36D3B8;
  
`;


const Text = styled.h2`
 font-size: 1.8rem;
 font-family: "Play", Sans-serif;
 font-weight: normal;
`


const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px; /* Espessura da listra */
  background-color: #3498db; /* Cor azul */
`;



const Nav = () => {
    return (
      <NavMenu>
        <Logo src={'https://moneysuite.com.br/wp-content/uploads/2022/09/Logo-moneysuite.svg'} alt="logotipo" />
        <Login>
          <Icon />
          <Text>Login</Text>
        </Login>
        <Divider />
      </NavMenu>
    );
  };
  
  export default Nav;