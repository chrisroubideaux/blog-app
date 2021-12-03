import { useContext, useState } from "react";
import '../styles/Write.css';
import axios from "axios";
import { Context } from "../context/Context";


export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="blog">
      {file && (
        <img className="img" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="form text-center" onSubmit={handleSubmit}>
        <div className="">
          <label className="input">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            className="input form-control m-2"
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="input form-control m-2"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="container">
          <textarea
            placeholder="Share your story..."
            type="text"
            className="p"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-lg" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}