import React from "react";
import { useState } from "react";
import styled from "../Circle/feedbackCircle.module.scss";

const DesCon = ({ des , job  , hover}) => {
  return (
    <div className={styled.desCon}>
      <div className={styled.desCon__des}>{des}</div>
      <div className={styled.desCon__job}>{job}</div>
      <div className={styled.desCon__line}></div>
    </div>
  );
};

const FeedbackCircle = ({ img, des, job }) => {
  const [hover, sethover] = useState(false);

  return (
    <div className={styled.container}>
      <div
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        className={styled.circle}
      >
        <img src={img} alt="" />
        {hover && <div className={styled.back}></div>}
      </div>
      {hover && <DesCon  des={des} job={job} />}
    </div>
  );
};



export default FeedbackCircle;
