import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
export default function Topbar() {
  return (
    <>
      <div className="TopbarContainer">
        <div className="TopbarLeft">
          <span className="logo">SD Media</span>
        </div>
        <div className="TopbarCenter">
          <div className="searchbar">
            <SearchIcon className="Search" />
            <input
              placeholder="search for friend,post and videos"
              className="searchint"
            />
          </div>
        </div>
        <div className="TopbarRight">
          <div className="topbarlinks">
            <span className="topbarlink">Homepage</span>
            <span className="topbarlink">Timeline</span>
          </div>
          <div className="topbaricons">
            <div className="topbaritems">
              <PersonIcon />
              <span className="topbariconBadge">1</span>
            </div>
            <div className="topbaritems">
              <ChatIcon />
              <span className="topbariconBadge">2</span>
            </div>
            <div className="topbaritems">
              <NotificationsActiveIcon />
              <span className="topbariconBadge">3</span>
            </div>
          </div>
        </div>
        <img src="/assets/tk.jpg" alt="tk" className="topbarimg" />
      </div>
    </>
  );
}
