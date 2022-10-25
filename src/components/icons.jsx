import React from "react";
import styled from "styled-components";
import ContentLoader from "react-content-loader"


const Icons = ({ sites, loading  }) => {

  return (
    <Container>
      <div className="div">
        <div className="num red">
        </div>
        <div className="gray">
          {
            loading ? (
              <ContentLoader>
                <rect x="0" y="0" width="100%" height="100%" />
              </ContentLoader>
            ) : (
              <>
              {
                sites.length > 0 ? (
                  <img src={`${sites[0]?.logo}`} alt={`${sites[0]?.name}`} />    
                ) : (null)
              }
              </>
            )
          }
        </div>
        <div className="name">
          <p>{sites[0]?.name}</p>
        </div>
      </div>
      <div className="div">
        <div className="num blue">
        </div>
         <div className="gray">
          {
            loading ? (
              <ContentLoader>
                <rect x="0" y="0" width="100%" height="100%" />
              </ContentLoader>
            ) : (
              <>
              {
                sites.length > 0 ? (
                  <img src={`${sites[1]?.logo}`} alt={`${sites[1]?.name}`} />    
                ) : (null)
              }
              </>
            )
          }
        </div>
        <div className="name">
          <p>{sites[1]?.name}</p>
        </div>
      </div>
      <div className="div">
        <div className="num blue">
        </div>
         <div className="gray">
          {
            loading ? (
              <ContentLoader>
                <rect x="0" y="0" width="100%" height="100%" />
              </ContentLoader>
            ) : (
              <>
              {
                sites.length > 0 ? (
                  <img src={`${sites[2]?.logo}`} alt={`${sites[2]?.name}`} />    
                ) : (null)
              }
              </>
            )
          }
        </div>
        <div className="name">
          <p>{sites[2]?.name}</p>
        </div>
      </div>
      <div className="div">
        <div className="num red">
        </div>
         <div className="gray">
          {
            loading ? (
              <ContentLoader>
                <rect x="0" y="0" width="100%" height="100%" />
              </ContentLoader>
            ) : (
              <>
              {
                sites.length > 0 ? (
                  <img src={`${sites[3]?.logo}`} alt={`${sites[3]?.name}`} />    
                ) : (null)
              }
              </>
            )
          }
        </div>
        <div className="name">
          <p>{sites[3]?.name}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 650px;
  height: 150px;
  padding: 20px 10px;
  background: var(--black);
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: var(--shadow) 0px 10px 50px;

  .div {
    width: 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 10px;
    cursor: pointer;

    .num {
      color: #ffffff;
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
      /* background: var(--gray); */
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50%;
        object-position: center;
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
