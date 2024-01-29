import styled from "styled-components";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaYoutube, FaFacebookF } from "react-icons/fa";

const Div = styled.div`
  border-top: 1px solid white;
  display: flex;
  justify-content: space-between;
  color: white;
`;

export function Footer() {
  return (
    <>
      <Div>
        <p>&#169; 링크의 모험</p>
        <div
          style={{
            display: "flex",
            marginRight: "5px",
            gap: "5px",
            cursor: "pointer",
          }}
        >
          <p style={{ color: "rgb(0,172,238)", fontSize: "20px" }}>
            <TfiTwitterAlt />
          </p>
          <p style={{ color: "rgb(196,48,43)", fontSize: "20px" }}>
            <FaYoutube />
          </p>
          <p style={{ color: "rgb(59,89,152)", fontSize: "20px" }}>
            <FaFacebookF />
          </p>
        </div>
      </Div>
    </>
  );
}
