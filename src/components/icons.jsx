import React from "react";
import styled from "styled-components";

const Icons = () => {
  return (
    <Container>
      <div className="div">
        <div className="num red">
          <p>45</p>
        </div>
        <div className="gray">
          <img src="/icons/nyt.png" alt="nyt" />
        </div>
        <div className="name">
          <p>NYT</p>
        </div>
      </div>
      <div className="div">
        <div className="num blue">
          <p>367</p>
        </div>
        <div className="gray">
          <img src="/icons/nautilus.png" alt="nautilus" />
        </div>
        <div className="name">
          <p>Nautilus</p>
        </div>
      </div>
      <div className="div">
        <div className="num blue">
          <p>67</p>
        </div>
        <div className="gray">
          <img src="/icons/netflix.png" alt="netflix" />
        </div>
        <div className="name">
          <p>Netflix</p>
        </div>
      </div>
      <div className="div">
        <div className="num red">
          <p>12</p>
        </div>
        <div className="gray">
          <img src="/icons/nothing.png" alt="nothing" />
        </div>
        <div className="name">
          <p>Nothing</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: 150px;
  padding: 20px 10px;
  background: var(--black);
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .div {
    width: 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 10px;

    .num {
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      top: -12px;
      right: -12px;

      p {
        padding: 5px;
      }
    }

    .red {
      background: var(--red);
    }

    .blue {
      background: var(--blue);
    }

    .gray {
      width: 100%;
      height: 80%;
      background: var(--gray);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        padding: 10px;
        background: var(--black);
        border-radius: 5px;
        overflow: hidden;

        img {
          width: 100%;
          object-position: center;
        }
      }
    }

    .name {
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      color: var(--white);
    }
  }
`;

export default Icons;
