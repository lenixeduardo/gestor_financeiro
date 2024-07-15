import styled from 'styled-components';

const ResumeContent = styled.div`
  font-size: 1.8rem;
  opacity: 0.8;
  color: ${props => (props.categoria === 'entrada' ? 'green' : 'red')};
`;

export default ResumeContent;