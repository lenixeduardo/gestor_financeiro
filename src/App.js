import React from 'react';
import './App.css';
import { UilMoneyBill, UilBill, UilWallet } from '@iconscout/react-unicons';
import Nav from './components/Nav';
import Title from './components/Title';
import Card from './components/Card';

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
