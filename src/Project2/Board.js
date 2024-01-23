import { useParams } from "react-router-dom";
import Notification from "./Notification";
import Update from "./Update";
import { Game } from "./Game";
import { Object } from "./Object";
import Map from "./Map";
import { Free } from "./Free";
import Attack from "./Attack";
import QandA from "./QandA";

export function Board() {
  const { id } = useParams();
  console.log("id =", id);
  return (
    <>
      {id == 0 ? (
        <Notification />
      ) : id == 1 ? (
        <Update />
      ) : id == 2 ? (
        <Game />
      ) : id == 3 ? (
        <Object />
      ) : id == 4 ? (
        <Map />
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
