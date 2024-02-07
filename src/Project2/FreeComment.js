import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  border: 1px solid white;
`;

const FreeComment = ({ comments }) => {
  console.log(comments);
  return (
    <Container>
      {comments.map((comment, commentIndex) => (
        <div
          style={{ margin: "15px", borderBottom: "1px solid white" }}
          key={commentIndex}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <p>{comment.author.username}</p>
            <p>{comment.createAt.substr(0, 10)}</p>
          </div>
          <p>{comment.text}</p>
        </div>
      ))}
    </Container>
  );
};

export default FreeComment;
