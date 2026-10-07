import {
  calculateFinancialSummary,
  formatCurrency
} from './finance';

test('calculates income, expenses and balance without hardcoded totals', () => {
  const summary = calculateFinancialSummary([
    { valor: 1000, categoria: 'entrada', data: '2026-09-01' },
    { valor: 200, categoria: 'saida', data: '2026-09-02' },
    { valor: 500, categoria: 'entrada', data: '2026-10-01' },
    { valor: 100, categoria: 'saida', data: '2026-10-02' }
  ]);

  expect(summary.totalReceitas).toBe(1500);
  expect(summary.totalGastos).toBe(300);
  expect(summary.saldo).toBe(1200);
  expect(summary.mediaMensalReceitas).toBe(750);
  expect(summary.mediaMensalGastos).toBe(150);
  expect(summary.mediaMensalSaldo).toBe(600);
});

test('formats values as Brazilian reais', () => {
  expect(formatCurrency(1234.5)).toContain('1.234,50');
});
