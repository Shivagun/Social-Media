import Share from "../Share/share";
import Post from "../post/post";
import "./feed.css";
import { Posts } from "../../DummyData";

export default function Feed() {
  console.log("feed");
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
