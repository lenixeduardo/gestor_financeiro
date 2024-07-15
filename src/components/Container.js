import styled from 'styled-components';

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

export default Container;
