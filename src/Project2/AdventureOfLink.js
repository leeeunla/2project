import { useState, useCallback, useEffect, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const Container = styled.div`
  width: 1344px;
  height: 756px;
  margin: auto;
  border: 1px solid gray;
`;

export function AdventureOfLink() {
  const [playingGame, setPlayingGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameFocus = useRef(null);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState();

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "Build/Build.loader.js",
      dataUrl: "Build/Build.data",
      frameworkUrl: "Build/Build.framework.js",
      codeUrl: "Build/Build.wasm",
    });

  function sendUserName() {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    const username = loginState.username;
    sendMessage("player", "setUserName", username);
  }

  const handleGameOver = useCallback((userName, score) => {
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
    console.log(isGameOver, userName, score);
  }, []);

  useEffect(() => {
    addEventListener("GameOverToReact", handleGameOver);
    return () => {
      removeEventListener("GameOverToReact", handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);

  function toggleGameStart() {
    gameFocus.current.focus();
    setPlayingGame((prev) => !prev);
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  return (
    <>
      {playingGame ? (
        <button onClick={toggleGameStart}>Stop Game</button>
      ) : (
        <button onClick={toggleGameStart}>Start Game</button>
      )}
      <button onClick={sendUserName}>Name</button>
      <Container tabIndex="0" ref={gameFocus}>
        {/* tabIndex : 포커스를 가능하게 함 */}
        {playingGame ? (
          <Unity
            style={{
              width: "100%",
              height: "100%",
            }}
            unityProvider={unityProvider}
          />
        ) : null}
      </Container>
    </>
  );
}
