import React from 'react';
import styled from 'styled-components';
import { UilWallet } from '@iconscout/react-unicons';

const NavMenu = styled.nav`
  min-height: 72px;
  background-color: #f9fdff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4%;
  box-sizing: border-box;
  border-bottom: 1px solid #dbe7ec;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #263b42;
  font-size: 1.15rem;
  font-weight: 700;
`;

const Status = styled.span`
  color: #60757d;
  font-size: 0.9rem;
`;

const Nav = () => (
  <NavMenu aria-label="Navegação principal">
    <Brand>
      <UilWallet size="28" color="#36D3B8" />
      Gestor Financeiro
    </Brand>
    <Status>Dados salvos neste dispositivo</Status>
  </NavMenu>
);

export default Nav;
