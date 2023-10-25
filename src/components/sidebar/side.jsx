import React  from 'react';
import './side.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Users} from '../../DummyData';
import CloseFriends from '../closeFriends/CloseFriends';



export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarlistItem">
          <RssFeedIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Feed</span>
        </li>
        <li className="sidebarlistItem">
          <ChatIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Chats</span>
        </li>
        <li className="sidebarlistItem">
          <PlayCircleIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Videos</span>
        </li>
        <li className="sidebarlistItem">
          <GroupsIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Groups</span>
        </li>
        <li className="sidebarlistItem">
          <BookmarkIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Bookmarks</span>
        </li>
        <li className="sidebarlistItem">
          <HelpIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Questions</span>
        </li>
        <li className="sidebarlistItem">
          <WorkOutlineIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Jobs</span>
        </li>
        <li className="sidebarlistItem">
          <EventIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Events</span>
        </li>
        <li className="sidebarlistItem">
          <LinkedInIcon className='sidebarIcon'/>
          <span className="sidebarlistItems">Courses</span>
        </li>
      </ul>
      <button className='sidebarButton'>Show More</button>
      <hr className='sidebarHr'/>

      <ul className="sidebarfriendlist">
       
       {Users.map(u=>(
        <CloseFriends key={u.id}user={u}/>
       ))}
 
      </ul>
      </div>
    </div>
  )
}
