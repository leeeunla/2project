import styled from "styled-components";
import GameSwiper from "./GameSwiper";
import { Giode } from "./Giode";
import { Put } from "./Put";
const Container = styled.div``;

const BG = styled.div``;
export function Home() {
  return (
    <>
      <Container>
        <GameSwiper />
        <br />
        <Put />
        <br />
        <br />
        <br />
        <br />
        <Giode />
        <br />
        <br />
        <BG />
      </Container>
    </>
  );
}
