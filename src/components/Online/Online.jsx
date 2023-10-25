import './Online.css'

export default function Online({user}) {
  return (
    <li className="rightbarfriend">
    <div className="rightbarProfileImgContainer">
      <img src={user.profilePicture} alt="" className="rightbarprofileImg" />
        <span className="rightbarOnline"></span>
    
    </div>
    <span className='rightbarUsername'>{user.username}</span>
  </li>
  )
  }
