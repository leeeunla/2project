import { Bar } from "react-chartjs-2";
import { Chart as chartJs } from "chart.js/auto";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 800px;
`;
export function Dashboardchart() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState();
  useEffect(() => {
    apiGetChart();
  }, []);
  async function apiGetChart() {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (loginState && loginState.token) {
      const response = await fetch(`http://localhost:8080/api/score`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginState.token}`,
        },
      }).then((response) => response.json());

      console.log(response);
      if (response.resultCode === "SUCCESS") {
        const sortedData = response.data.sort((a, b) => b.score - a.score);
        setData(response.data);
      } else {
        setData([
          {
            user: "",
          },
        ]);
      }
    }
  }

  return (
    <>
      <Container>
        <h2 style={{ textAlign: "center" }}>코인을 많이 먹은 유저 순</h2>
        <Bar
          data={{
            labels: data.map((d) => d.username),
            datasets: [
              {
                label: "코인 많이먹은 순",
                data: data.map((d) => d.score),
                borderWidth: 1,
              },
            ],
          }}
          options={{
            animation: false,
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
              tooltip: {
                enabled: false,
              },
            },
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
