import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Marija</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          asperiores commodi quo iure ratione atque! Ullam eum cum consectetur
          quod? Veniam perferendis maxime consequuntur dignissimos nesciunt
          minus incidunt inventore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero distinctio cumque necessitatibus et dolor
          aperiam deleniti velit amet delectus dolorem!Veniam perferendis maxime
          consequuntur dignissimos nesciunt minus incidunt inventore. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio
          cumque necessitatibus et dolor aperiam deleniti velit amet delectus
          dolorem! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur nulla ad commodi ut eius blanditiis placeat, maxime animi
          maiores optio quos qui. Quod, minima maxime voluptatum quis molestiae
          at. Qui illum odio fugiat, accusamus nam a id deserunt, cum animi ex
          ratione tenetur aspernatur possimus officia non atque debitis
          deleniti, molestiae quae quas rem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Libero distinctio cumque necessitatibus
          et dolor aperiam deleniti velit amet delectus dolorem!Veniam
          perferendis maxime consequuntur dignissimos nesciunt minus incidunt
          inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero distinctio cumque necessitatibus et dolor aperiam deleniti
          velit amet delectus dolorem! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur nulla ad commodi ut eius blanditiis
          placeat, maxime animi maiores optio quos qui.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
