import Post from "../components/Post"
import '../styles/Header.css';

export default function Posts({ posts }) {
  return (
    <div className="header">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}