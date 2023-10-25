import "./Right.css";
import { Users } from "../../DummyData";
import Online from "../Online/Online";

export default function Right({ Profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.jpg" alt="gift" />
          <span className="birthdayText">
            <b>Shiva Foster</b> and <b>3 Other friends</b> have a birthday today
          </span>
        </div>
        <div>
          <img className="rightbarAd" src="/assets/vijay.jpeg" alt="" />
        </div>
        <h4 className="rightbarTittle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTittle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City</span>
            <span className="rightbarInfoValue">Chennai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From</span>
            <span className="rightbarInfoValue">Lakkur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTittle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>{" "}
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>{" "}
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>{" "}
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>{" "}
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>{" "}
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>{" "}
          <div className="rightbarFollowing">
            <img
              src="assets/vijay1.jpg"
              alt=""
              className="rightbarFollingImg"
            />
            <span className="rightbarFollowingName">Sivakumar</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="right">
      <div className="rightbarWrapper">
          {Profile ? <ProfileRightbar/>: <HomeRightbar/>}
      </div>
    </div>
  );
}
