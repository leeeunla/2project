import styled from "styled-components";

// 회원 탈퇴
const Container = styled.div``;
const Withdrawal = () => {
  return (
    <>
      <Container>
        <div style={{ borderBottom: "2px solid black" }}>
          <h2>회원탈퇴</h2>
        </div>
        <div>
          <p>
            1.회원 탈퇴시 저장되어있던 기록과 내용은 30일이 지난 시점 모두
            사라집니다.
          </p>
          <p>
            2.탈퇴 취소는 신청일로부터 15일 이전만 가능하며, 그 이후엔 취소가
            <br />
            불가능하다는 점 미리 안내드립니다.
          </p>
          <p>
            3. 탈퇴 진행 후 다시 접속하신 경우 새로운 계정으로 진행하셔야
            합니다.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>정말로 탈퇴하시겠습니까?</p>
          <button style={{ margin: "10px", padding: "5px" }}>탈퇴하기</button>
          <button style={{ margin: "10px", padding: "5px" }}>취소</button>
        </div>
      </Container>
    </>
  );
};
export default Withdrawal;
