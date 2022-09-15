import React from "react";
import styled from "styled-components";

const Command = ({ command }) => {
  return (
    <Container>
      <div className="left">
        <div className="icon">
          <command.icon />
        </div>
        <p>{command?.name}</p>
      </div>
      <div className="right">
        <p>Command</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 10px;

  .left {
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .icon {
      padding: 5px;
      margin: 0 10px 0 0;
      border-radius: 5px;
      background: #1e1616;
      cursor: pointer;
      color: var(--white);
    }

    p {
      color: var(--white);
      text-transform: capitalize;
      cursor: pointer;
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      color: var(--white);
      cursor: pointer;
    }
  }

  :hover {
    background: var(--gray);
  }
`;

export default Command;
