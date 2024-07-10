import React from 'react';
import './App.css';
import styled from 'styled-components';
import { UilMoneyBill, UilBill, UilWallet } from '@iconscout/react-unicons';
import Nav from './components/nav.js';

const Container = styled.div`
  display: flex;
  gap: 1vw;
  color: white;
  border-radius: 8px;
  padding: 20px;
  width: 25vw; 
  height: 200px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${props => {
    if (props.receita) return '#36D3B8';
    if (props.gastos) return '#FD6D6A';
    if (props.saldoTotal) return '#364C52';
  }};
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0 0 10px 0;
  color:#5D666F;
`;

const TitleCard = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin: 0 0 10px 0;
  font-weight: normal;
`;

const Amount = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const MonthlyAverage = styled.div`
  font-size: 1.8rem;
  opacity: 0.8;
`;

const IconContainer = styled.div`
  border: 3px solid white;
  padding: 4px;
  opacity: 0.5;
  border-radius: 5px;
  width: 50px;
  height: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
`;

function Card({ Icon, title, amount, monthlyAverage, receita, gastos, saldoTotal }) {
  return (
    <Container receita={receita} gastos={gastos} saldoTotal={saldoTotal}>
      <IconContainer>
        <Icon size="50" color="white" />
      </IconContainer>
      <Content>
        <TitleCard>
          {title}
        </TitleCard>
        <Amount>{amount}</Amount>
        <MonthlyAverage>{monthlyAverage}</MonthlyAverage>
      </Content>
    </Container>
  );
}

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="App-header">
        <Title>Minhas Finanças Pessoais</Title>
      </div>
      <main className="main-container">
        <div className="card-container">
          <Card 
            receita
            Icon={UilMoneyBill}
            title="Receitas"
            amount="R$ 63 618,00"
            monthlyAverage="Média Mensal: R$ 5 302"
          />
          <Card 
            gastos
            Icon={UilBill}
            title="Gastos"
            amount="R$ 25 000,00"
            monthlyAverage="Média Mensal: R$ 2 100"
          />
          <Card 
            saldoTotal
            Icon={UilWallet}
            title="Saldo"
            amount="R$ 38 618,00"
            monthlyAverage="Média Mensal: R$ 3 202"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
