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
  const [loginState, setLoginState] = useState();
  const [data, setData] = useState();
  const gameFocus = useRef(null);

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "Build/Build.loader.js",
      dataUrl: "Build/Build.data",
      frameworkUrl: "Build/Build.framework.js",
      codeUrl: "Build/Build.wasm",
    });

  function sendUserName() {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    setLoginState(loginState);
    const username = loginState.username;
    sendMessage("player", "setUserName", username);
  }

  const handleGameOver = useCallback((userName, score) => {
    console.log("GAMEOVER", userName, score);
  }, []);

  const handleGameStartEvent = useCallback(() => {
    sendUserName();
    console.log("GAMESTART");
  });

  const handleCoinEvent = useCallback((coinValue) => {
    console.log("coinValue", coinValue + 3);
    apiSetScore(coinValue);
  });

  useEffect(() => {
    addEventListener("GameOverToReact", handleGameOver);
    addEventListener("GameStartEventToReact", handleGameStartEvent);
    addEventListener("CoinEventToReact", handleCoinEvent);
    return () => {
      removeEventListener("GameOverToReact", handleGameOver);
      removeEventListener("GameStartEventToReact", handleGameStartEvent);
      removeEventListener("CoinEventToReact", handleCoinEvent);
    };
  }, [
    addEventListener,
    removeEventListener,
    handleGameOver,
    handleGameStartEvent,
    handleCoinEvent,
  ]);

  function toggleGameStart() {
    gameFocus.current.focus();
    setPlayingGame((prev) => !prev);
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  async function apiSetScore(coinValue) {
    const score = {
      username: loginState?.username,
      score: coinValue + 3,
    };
    const response = await fetch(`http://localhost:8080/api/score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginState?.token}`,
      },
      body: JSON.stringify(score),
    }).then((response) => response.json());

    console.log(response);
    if (response.resultCode === "SUCCESS") {
      setData(response.data);
    } else {
      if (response.resultCode === "ERROR") {
        setData(response.data);
      }
    }
  }

  return (
    <>
      {playingGame ? (
        <button onClick={toggleGameStart}>Stop Game</button>
      ) : (
        <button onClick={toggleGameStart}>Start Game</button>
      )}
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
