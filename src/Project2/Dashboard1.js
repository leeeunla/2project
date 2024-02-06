import styled from "styled-components";
import { Dashboardchart } from "./Dashboardchart";
import { Ranking } from "./Ranking";
import { Operator } from "./Operator";
import { Dashboardinquiry } from "./Dashboardinquiry";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 15px;
`;
const Dashboard1 = () => {
  return (
    <>
      <Container>
        <Dashboardchart />
        <Operator />
        <Dashboardinquiry />
        <Ranking />
      </Container>
    </>
  );
};
export default Dashboard1;
