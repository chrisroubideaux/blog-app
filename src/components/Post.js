import { Link } from "react-router-dom";

export default function Post({ post }) {
 
  return (
    <div className="container-fluid">
      {post.photo && <img className="img" src="" alt="" />}
      <div className="">
        <div className="">
          {post.categories.map((c) => (
            <span className="">{c.name} </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="">
          <span className="">{post.title}  </span>
        </Link>
        <hr />
        <span className="">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="">{post.desc}</p>
    </div>
  );
}