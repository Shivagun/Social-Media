import "./CloseFriends.css";

export default function CloseFriends({ user }) {
  return (
    <li className="sidebarFrirnd">
      <img src={user.profilePicture} alt="" className="sidebarFriendimg" />
      <span className="FriendName">{user.username}</span>
    </li>
  );
}
