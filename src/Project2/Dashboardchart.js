import { Bar } from "react-chartjs-2";
import { Chart as chartJs } from "chart.js/auto";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 700px;
`;
export function Dashboardchart() {
  const data = [];
  return (
    <>
      <Container>
        <h2 style={{ textAlign: "center" }}>회원가입 현황 수</h2>
        <Bar
          style={{
            position: "relative",
            height: "300px",
            paddingRight: "500px",
          }}
          data={{
            labels: [],
            datasets: [
              {
                label: "회원가입 현황 수",
                data: [],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </Container>
    </>
  );
}
