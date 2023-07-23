import { Link } from "react-router-dom";
import "./post.css"; // Import the post.css file

export default function Post({ post }) {
  return (
    <div className="post card mb-4">
      <div className="card-body">
        <div className="postInfo">
          <Link to={`/post/${post._id}`} className="link">
            <h5 className="postTitle card-title">{post.title}</h5>
          </Link>
          <hr />
          <p className="postDate card-subtitle text-muted">
            {new Date(post.createdAt).toDateString()}
          </p>
        </div>
        <p className="postDesc card-text">{post.desc}</p>
      </div>
    </div>
  );
}
