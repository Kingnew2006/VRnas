import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

const QuestionContainer = styled.div`
    width: 548px;
    height: 38px;
    display: flex;
    color: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    transition: all 0.2s ease-in-out; 
     
`;

const Description = styled.div`
    width: 548px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: #D1D1D1;
    line-height: 28px;
    transition: all 0.3s ease-in-out;
    margin-bottom: 48px;
`;


 

export default function Question({ question , description }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  let arrow = useRef();

  function HandleClick() {
    setActive((state) => !state);
    arrow.current.classList.toggle("rotate");
    if (arrow.current.classList.contains("rotate")) {
      arrow.current.style.transform = "rotate(180deg)";
    } else {
      arrow.current.style.transform = "rotate(0deg)";
    }
} 


  return (
    <div style={{ width: "548px" }}>
      <QuestionContainer>
        <div>{question}</div>
        <div>
          <svg
            ref={arrow}
            className={active ? "rotate" : ""}
            onClick={HandleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            style={{
                position: "relative",
                right: "0px"
            }}
          >
            <path
              d="M6.01685 7.68789L3.01685 4.68789L3.55435 4.15039L6.01685 6.62539L8.47935 4.16289L9.01685 4.70039L6.01685 7.68789Z"
              fill="white"
            />
          </svg>
        </div>
      </QuestionContainer>

      {active && <Description>{ description }</Description>}
    </div>
  );
}