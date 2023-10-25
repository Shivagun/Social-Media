import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../DummyData"
import { useState } from "react";

export default function Post({post}) {
  const data=Users.filter(u => u.id === post.userId)
  console.log(data,"dataa")
  const [like,setlike]=useState(post.like)
  const [isLiked,setisLiked]=useState(false)

  const likeHandler =()=>{
    setlike(isLiked ? like-1 : like+1)
    setisLiked(!isLiked)
  }

    return (
    <div className='Post'         >
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileimg' src={data.map(data=>data.profilePicture)}  alt="" />
                    <span className="postUsername">
                        {data.map(data=>data.username)}                        </span>
                    <span className="postDate">{post.date}</span>
                </div>

                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img  className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.jpeg" onClick={likeHandler} alt="" />
                <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}Comments</span>
                </div>

            </div>

        </div>
    </div>
  )
}
