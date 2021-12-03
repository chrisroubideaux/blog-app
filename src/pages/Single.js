import SinglePost from "../components/SinglePost"
import Sidebar from "../components/Sidebar"

export default function Single() {
  return (
    <div className="blog">
      <SinglePost/>
      <Sidebar />
    </div>
  );
}