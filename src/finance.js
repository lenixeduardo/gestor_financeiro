export const DEFAULT_TRANSACTIONS = [
  { id: 'padaria', descricao: 'Padaria', valor: 30, categoria: 'saida', data: '2026-10-02' },
  { id: 'mercado', descricao: 'Mercado', valor: 300, categoria: 'saida', data: '2026-10-03' },
  { id: 'salario', descricao: 'Salário', valor: 5000, categoria: 'entrada', data: '2026-10-01' }
];

export function calculateFinancialSummary(transactions) {
  const months = new Set(
    transactions
      .map((transaction) => transaction.data?.slice(0, 7))
      .filter(Boolean)
  );
  const monthCount = Math.max(months.size, 1);

  const totalReceitas = transactions
    .filter((transaction) => transaction.categoria === 'entrada')
    .reduce((acc, transaction) => acc + Number(transaction.valor || 0), 0);

  const totalGastos = transactions
    .filter((transaction) => transaction.categoria === 'saida')
    .reduce((acc, transaction) => acc + Number(transaction.valor || 0), 0);

  const saldo = totalReceitas - totalGastos;

  return {
    totalReceitas,
    totalGastos,
    saldo,
    mediaMensalReceitas: totalReceitas / monthCount,
    mediaMensalGastos: totalGastos / monthCount,
    mediaMensalSaldo: saldo / monthCount
  };
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}
