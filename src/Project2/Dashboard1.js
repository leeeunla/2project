import styled from "styled-components";
import { Dashboardchart } from "./Dashboardchart";
import { Ranking } from "./Ranking";
import { Operator } from "./Operator";
import { Dashboardinquiry } from "./Dashboardinquiry";
import { FaArrowUp } from "react-icons/fa6";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 15px;
`;
const Dashboard1 = () => {
  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Container>
        <Dashboardchart />
        <Operator />
        <Ranking />
      </Container>
      <p
        style={{
          textAlign: "end",
          marginRight: "50px",
          fontSize: "20px",
        }}
        onClick={MoveToTop}
      >
        <FaArrowUp />
      </p>
    </>
  );
};
export default Dashboard1;
