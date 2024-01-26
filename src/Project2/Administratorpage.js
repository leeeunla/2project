import Boardmanagement from "./Boardmanagement";
import Dashboard from "./Dashboard";
import Inquirymanagement from "./Inquirymanagement";
import UserList from "./UserList";

//관리자 페이지 전체
export function Administratorpage() {
  return (
    <>
      <UserList /> {/* 사용자목록 */}
      <Dashboard /> {/* 대시보드 */}
      <Boardmanagement /> {/* 게시판 관리 */}
      <Inquirymanagement /> {/*1:1문의 관리*/}
    </>
  );
}
