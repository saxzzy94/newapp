import React from "react";
import styled from "styled-components";

//icons
import { BiSearch } from "react-icons/bi";
import {
  FigmaIcon,
  RaycastIcon,
  YouTubeIcon,
  SlackIcon,
  LinearIcon,
  CopyIcon,
  CopiedIcon,
} from "./icons/icons";

//components
import Icons from "./components/icons";
import Suggestion from "./components/suggestion";
import Command from "./components/command";

function App() {
  const [suggestions, setSuggestions] = React.useState([
    {
      id: 1,
      name: "linear",
      icon: LinearIcon,
    },
    {
      id: 2,
      name: "figma",
      icon: FigmaIcon,
    },
    {
      id: 3,
      name: "slack",
      icon: SlackIcon,
    },
    {
      id: 4,
      name: "youtube",
      icon: YouTubeIcon,
    },
    {
      id: 5,
      name: "raycast",
      icon: RaycastIcon,
    },
  ]);

  const [commands, setCommands] = React.useState([
    {
      id: 1,
      name: "Clipboard History",
      icon: CopyIcon,
    },
    {
      id: 2,
      name: "Import extension",
      icon: CopiedIcon,
    },
    {
      id: 3,
      name: "Manage extension",
      icon: CopiedIcon,
    },
  ]);

  return (
    <Container>
      <Icons />
      <div className="search">
        <form className="input">
          <BiSearch className="icon" />
          <input type="text" placeholder="Search here...." />
        </form>
        <div className="section">
          <div className="title">
            <p>Suggestions</p>
          </div>
          <div className="content">
            {suggestions.map((suggestion) => (
              <Suggestion suggestion={suggestion} key={suggestion?.id} />
            ))}
          </div>
        </div>
        <div className="section">
          <div className="title">
            <p>Commands</p>
          </div>
          <div className="content">
            {commands.map((command) => (
              <Command command={command} key={command?.id} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  /* background: linear-gradient(75.96deg, #8d2ed7 0%, #c277fd 99.48%); */
  background: #1e1d1d;
  /* padding: 50px 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .search {
    width: 800px;
    height: auto;
    background: var(--black);
    margin: 30px 0;
    border-radius: 10px;
    border: 3px solid var(--gray);
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      width: 100%;
      height: 50px;
      border-bottom: 3px solid var(--gray);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 10px 0;

      .icon {
        color: var(--gray);
        font-size: 1.5em;
        margin: 10px;
      }

      input {
        width: 95%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: var(--white);
      }
    }

    .section {
      width: 100%;
      height: auto;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title {
        width: 100%;
        height: 25px;

        p {
          color: var(--gray);
          font-weight: 700;
        }
      }

      .content {
        width: 100%;
      }
    }
  }
`;

export default App;
