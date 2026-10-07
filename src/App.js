import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { UilMoneyBill, UilBill, UilWallet } from '@iconscout/react-unicons';
import Nav from './components/Nav';
import Title from './components/Title';
import Card from './components/Card';
import Resume from './components/Resume';
import {
  DEFAULT_TRANSACTIONS,
  calculateFinancialSummary,
  formatCurrency
} from './finance';

const STORAGE_KEY = 'gestor-financeiro:transactions';

function loadTransactions() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_TRANSACTIONS;

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : DEFAULT_TRANSACTIONS;
  } catch {
    return DEFAULT_TRANSACTIONS;
  }
}

function App() {
  const [transactions, setTransactions] = useState(loadTransactions);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('saida');
  const [data, setData] = useState(() => new Date().toISOString().slice(0, 10));
  const [error, setError] = useState('');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const summary = useMemo(
    () => calculateFinancialSummary(transactions),
    [transactions]
  );

  function handleSubmit(event) {
    event.preventDefault();

    const amount = Number(valor);
    if (!descricao.trim() || !Number.isFinite(amount) || amount <= 0 || !data) {
      setError('Informe descrição, data e um valor maior que zero.');
      return;
    }

    setTransactions((current) => [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        descricao: descricao.trim(),
        valor: amount,
        categoria,
        data
      },
      ...current
    ]);
    setDescricao('');
    setValor('');
    setError('');
  }

  function removeTransaction(id) {
    setTransactions((current) =>
      current.filter((transaction) => transaction.id !== id)
    );
  }

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
            amount={formatCurrency(summary.totalReceitas)}
            monthlyAverage={`Média mensal: ${formatCurrency(summary.mediaMensalReceitas)}`}
          />
          <Card
            gastos
            Icon={UilBill}
            title="Gastos"
            amount={formatCurrency(summary.totalGastos)}
            monthlyAverage={`Média mensal: ${formatCurrency(summary.mediaMensalGastos)}`}
          />
          <Card
            saldoTotal
            Icon={UilWallet}
            title="Saldo"
            amount={formatCurrency(summary.saldo)}
            monthlyAverage={`Média mensal: ${formatCurrency(summary.mediaMensalSaldo)}`}
          />
        </div>

        <section className="transaction-section" aria-labelledby="new-transaction-title">
          <h2 id="new-transaction-title">Nova movimentação</h2>
          <form className="transaction-form" onSubmit={handleSubmit}>
            <label>
              Descrição
              <input
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                placeholder="Ex.: Mercado"
              />
            </label>
            <label>
              Valor
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={valor}
                onChange={(event) => setValor(event.target.value)}
                placeholder="0,00"
              />
            </label>
            <label>
              Tipo
              <select
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
              >
                <option value="saida">Saída</option>
                <option value="entrada">Entrada</option>
              </select>
            </label>
            <label>
              Data
              <input
                type="date"
                value={data}
                onChange={(event) => setData(event.target.value)}
              />
            </label>
            <button type="submit">Adicionar</button>
          </form>
          {error && <p className="form-error" role="alert">{error}</p>}
        </section>

        <Title>Extrato</Title>
        <Resume transactions={transactions} onRemove={removeTransaction} />
      </main>
    </div>
  );
}

export default App;
