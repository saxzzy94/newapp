import React from "react";
import styled from "styled-components";

import { AiOutlineEnter } from "react-icons/ai";

const Instruction = ({ one, two, three, children }) => {
  return (
    <Container>
      <div className="instructions">
        <p>{one}</p>
      </div>
      <div className="commands">
        <div className="one">
          <p>{two}</p>
          <AiOutlineEnter className="icon" />
        </div>
        <div className="two">
          <p>{three}</p>
          {children}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 98%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  border-top: 1px solid var(--gray);

  p {
    /* text-transform: capitalize; */
    color: var(--white);
  }

  .instructions {
    width: 35%;
  }

  .commands {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      width: 45%;
      height: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      .icon {
        background: var(--icon);
        color: var(--white);
        padding: 5px;
        font-size: 2em;
        border-radius: 2px;
        margin: 0 10px;
      }
    }

    .two {
      border-left: 1px solid var(--gray);
    }
  }
`;

export default Instruction;
