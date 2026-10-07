import styled from 'styled-components';

const ResumeContent = styled.div`
  font-size: 1.15rem;
  opacity: 0.9;
  color: ${(props) => (props.$categoria === 'entrada' ? 'green' : 'red')};
`;

export default ResumeContent;
