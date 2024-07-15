import React from 'react';
import ResumeContainer from './ResumeContainer';
import ResumeDiv from './ResumeDiv';
import ResumeContent from './ResumeContent';

function Resume({ transactions }) {
  return (
    <ResumeContainer>
      {transactions.map((transaction, index) => (
        <ResumeDiv key={index}>
          <ResumeContent categoria={transaction.categoria}>{transaction.descricao}</ResumeContent>
          <ResumeContent categoria={transaction.categoria}>R$ {transaction.valor.toFixed(2)}</ResumeContent>
        </ResumeDiv>
      ))}
    </ResumeContainer>
  );
}

export default Resume;
