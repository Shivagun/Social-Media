import'./share.css'
import MmsIcon from '@mui/icons-material/Mms';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function Share() {
  return (
    <div className='share-pick'>
    <div className="sharewrapper">
      <div className="sharetop">
        <img className="shareProfileImg" src="/assets/sd.jpg" alt="KK" />
        <input placeholder="what's in your mind Shiva?" className='shareInput' />
      </div>
      <hr className='sharehr'></hr>
      <div className="sharebottom">
        <div className="shareOptions">
          
          <div className="shareOption">
          <MmsIcon htmlColor='tomato' className='shareIcon'/>
            <span className='shareOptionText'>Photo Or Video</span>
          </div>
          
          <div className="shareOption">
          <LabelIcon htmlColor='blue' className='shareIcon'/>
            <span className='shareOptionText'>Tag</span>
          </div>
          
          <div className="shareOption">
          <LocationOnIcon htmlColor='green'  className='shareIcon'/>
            <span className='shareOptionText'>Location</span>
          </div>
          
          <div className="shareOption">
          <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
            <span className='shareOptionText'>Feelings</span>
          </div>
          <button className='shareButton'>
            Share
          </button>
          
        </div>
      </div>
     
    </div>
    </div>
  )
}