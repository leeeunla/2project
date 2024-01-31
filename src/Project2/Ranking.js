import { Bar } from "react-chartjs-2";
import { Chart as chartJs } from "chart.js/auto";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 800px;
`;
export function Ranking() {
  const data = [];
  return (
    <>
      <Container>
        <h2 style={{ textAlign: "center" }}>층을 많이 올라간 사람 순위</h2>
        <Bar
          style={{
            position: "relative",
            height: "350px",
            paddingRight: "500px",
          }}
          data={{
            labels: [],
            datasets: [
              {
                label: "층을 많이 올라간 사람 순위",
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
