import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 16px;
  color: white;
  border-radius: 12px;
  padding: 20px;
  min-height: 160px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => {
    if (props.receita) return '#36D3B8';
    if (props.gastos) return '#FD6D6A';
    if (props.saldoTotal) return '#364C52';
    return '#364C52';
  }};
`;

export default Container;
