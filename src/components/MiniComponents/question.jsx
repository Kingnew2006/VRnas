import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Container = styled.div`
  width: 548px;
`;

const QuestionContainer = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  color: var(--text-color); /* вместо rgb(255, 255, 255) */
  border-bottom: 1px solid var(--grey1); /* вместо #2c2c2c */
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const Description = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: var(--grey1); /* вместо #d1d1d1 */
  line-height: 28px;
  margin: 12px 0 48px 0;
  transition: all 0.3s ease-in-out;
`;


const Arrow = styled.svg`
  width: 13px;
  height: 12px;
  transition: transform 0.3s ease;
  color: var(--text-color); /* вместо rgb(255, 255, 255) */
  fill: white;
  ${({ $active }) =>
    $active &&
    css`
      transform: rotate(180deg);
    `}
`;

export default function Question({ question, description }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prev) => !prev);
  }

  return (
    <Container>
      <QuestionContainer
        onClick={handleClick}
        role="button"
        aria-expanded={active}
      >
        <div>{question}</div>
        <div><Arrow $active={active} viewBox="0 0 13 12"><path d="M6.01685 7.68789L3.01685 4.68789L3.55435 4.15039L6.01685 6.62539L8.47935 4.16289L9.01685 4.70039L6.01685 7.68789Z" /></Arrow></div>
      </QuestionContainer>

      {active && <Description>{description}</Description>}
    </Container>
  );
}
