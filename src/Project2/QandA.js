export function QandA() {
  return (
    <>
      <Contanier>
        <div>
          <table>
            <thead>
              <tr>
                <th>글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            style={{ width: "150px", padding: "5px" }}
          ></input>
          <button style={{ padding: "5px" }}>등록</button>
        </div>
      </Contanier>
    </>
  );
}
