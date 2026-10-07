import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
});

test('renders the financial dashboard with calculated totals', () => {
  render(<App />);

  expect(screen.getByText('Minhas Finanças Pessoais')).toBeInTheDocument();
  expect(screen.getByText('Padaria')).toBeInTheDocument();
  expect(screen.getByText(/5\.000,00/)).toBeInTheDocument();
  expect(screen.getByText(/330,00/)).toBeInTheDocument();
  expect(screen.getByText(/4\.670,00/)).toBeInTheDocument();
});

test('renders a form for new transactions', () => {
  render(<App />);

  expect(screen.getByLabelText('Descrição')).toBeInTheDocument();
  expect(screen.getByLabelText('Valor')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument();
});
