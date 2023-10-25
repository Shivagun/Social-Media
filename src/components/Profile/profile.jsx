import "./profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Feed from "../../components/feed/feed";
import Right from "../../components/rightbar/Right";
import Sidebar from "../../components/sidebar/side";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="peofileCoverImg" src="assets/Zimba.jpg" alt="" />
            <img className="peofileUserImg" src="assets/Zimba1.jpg" alt="" />
            </div>
       <div className="profileInfo">
        <h4 className="profileInfoName">Sivakumar</h4>
        <span className="profileInfoDesc">Hello My Friends!</span>
       </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Right Profile/>
          </div>
        </div>
      </div>
    </>
  );
}
