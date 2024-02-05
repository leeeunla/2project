import { useParams } from "react-router-dom";
import Update from "./Update";
import { GameObject, Object } from "./GameObject";
import { Free } from "./Free";
import Attack from "./Attack";
import QandA from "./QandA";
import { Gameinfo } from "./Gameinfo";
import Notice from "./Notice";
import GameMapinfo from "./GameMapinfo";

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
        <Attack />
      ) : id == 7 ? (
        <Free />
      ) : null}
    </>
  );
}
