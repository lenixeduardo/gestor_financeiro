import React from 'react';
import './App.css';
import { UilMoneyBill, UilBill, UilWallet } from '@iconscout/react-unicons';
import Nav from './components/Nav';
import Title from './components/Title';
import Card from './components/Card';
import Resume from './components/Resume';

function App() {
  const transactions = [
    { descricao: 'Padaria', valor: 30, categoria: 'saida' },
    { descricao: 'Mercado', valor: 300, categoria: 'saida' },
    { descricao: 'Salário', valor: 5000, categoria: 'entrada' },
  ];

  const totalReceitas = transactions
    .filter(transaction => transaction.categoria === 'entrada')
    .reduce((acc, transaction) => acc + transaction.valor, 0);

  const totalGastos = transactions
    .filter(transaction => transaction.categoria === 'saida')
    .reduce((acc, transaction) => acc + transaction.valor, 0);

  const saldo = totalReceitas - totalGastos;

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
            amount={`R$ ${totalReceitas.toFixed(2)}`}
            monthlyAverage="Média Mensal: R$ 5 302"
          />
          <Card 
            gastos
            Icon={UilBill}
            title="Gastos"
            amount={`R$ ${totalGastos.toFixed(2)}`}
            monthlyAverage="Média Mensal: R$ 2 100"
          />
          <Card 
            saldoTotal
            Icon={UilWallet}
            title="Saldo"
            amount={`R$ ${saldo.toFixed(2)}`}
            monthlyAverage="Média Mensal: R$ 3 202"
          />
        </div>
        <Title>Extrato </Title>
        <Resume transactions={transactions} />
      </main>
    </div>
  );
}

export default App;
