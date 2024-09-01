import Post from "../post/Post";
import "./posts.css";

const Posts = ({posts}) => {
  return (
    <div className="posts">
      {posts.map((x)=>( <Post key={x._id} post={x}/>))}
    </div> 
  );
};

export default Posts;
