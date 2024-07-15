import React from 'react';
import Container from './Container';
import IconContainer from './IconContainer';
import Content from './Content';
import TitleCard from './TitleCard';
import Amount from './Amount';
import MonthlyAverage from './MonthlyAverage';

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

export default Card;