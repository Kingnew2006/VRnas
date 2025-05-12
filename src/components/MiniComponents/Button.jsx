import styled from "styled-components";

const ButtonCom = styled.button`
  width: ${({ $width }) => $width || '150px'}; /* Дефолтное значение */
  height: 50px;
  background: linear-gradient(90deg, rgba(12,186,241,1) 0%, rgba(233,92,233,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: white;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 700;
  line-height: 0.875rem;
  letter-spacing: 0.09375rem;
`;

function Button({ Width, Value , className }) {
  return <ButtonCom $width={Width} className={className}>{Value}</ButtonCom>;
}

export default Button;
