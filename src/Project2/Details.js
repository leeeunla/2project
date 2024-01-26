//상세페이지(게시판에서 글을 클릭시 보이게 하려는 것으로 만듬!)
export function Detalis() {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="댓글을 입력해주세요"
          style={{ width: "150px", padding: "5px" }}
        ></input>
        <button style={{ padding: "5px" }}>등록</button>
      </div>
    </>
  );
}
