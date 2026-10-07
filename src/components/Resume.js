import React from 'react';
import ResumeContainer from './ResumeContainer';
import ResumeDiv from './ResumeDiv';
import ResumeContent from './ResumeContent';
import { formatCurrency } from '../finance';

function Resume({ transactions, onRemove }) {
  if (transactions.length === 0) {
    return <p>Nenhuma movimentação cadastrada.</p>;
  }

  return (
    <ResumeContainer>
      {transactions.map((transaction) => (
        <ResumeDiv key={transaction.id}>
          <div>
            <ResumeContent categoria={transaction.categoria}>
              {transaction.descricao}
            </ResumeContent>
            <small>{transaction.data}</small>
          </div>
          <div className="resume-actions">
            <ResumeContent categoria={transaction.categoria}>
              {transaction.categoria === 'saida' ? '-' : '+'}
              {formatCurrency(transaction.valor)}
            </ResumeContent>
            <button
              type="button"
              className="remove-transaction"
              onClick={() => onRemove(transaction.id)}
              aria-label={`Remover ${transaction.descricao}`}
            >
              Remover
            </button>
          </div>
        </ResumeDiv>
      ))}
    </ResumeContainer>
  );
}

export default Resume;
