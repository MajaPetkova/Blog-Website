import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img src="https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCategory">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
};

export default Post;
