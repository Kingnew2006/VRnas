import styled from "styled-components";

const ButtonCom = styled.button`
  width: ${({ $width }) => $width || '150px'}; /* Дефолтное значение */
  height: 50px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: var(--text-color);
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 700;
  line-height: 0.875rem;
  letter-spacing: 0.09375rem;
`;

function Button({ Width, Value , color , className }) {
  return <ButtonCom $width={Width} className={className} style={{ background: color }}>{Value}</ButtonCom>;
}

export default Button;
