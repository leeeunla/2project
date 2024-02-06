import { useParams } from "react-router-dom";
import Update from "./Update";
import { GameObject, Object } from "./GameObject";
import { Free } from "./Free";
import QandA from "./QandA";
import { Gameinfo } from "./Gameinfo";
import Notice from "./Notice";
import GameMapinfo from "./GameMapinfo";
import Walkthrough from "./Walkthrough";

export function Board() {
  const { id } = useParams();
  console.log("id =", id);
  return (
    <>
      {id == 0 ? (
        <Notice />
      ) : id == 1 ? (
        <Update />
      ) : id == 2 ? (
        <Gameinfo />
      ) : id == 3 ? (
        <GameObject />
      ) : id == 4 ? (
        <GameMapinfo />
      ) : id == 5 ? (
        <QandA />
      ) : id == 6 ? (
        <Walkthrough />
      ) : id == 7 ? (
        <Free />
      ) : null}
    </>
  );
}
