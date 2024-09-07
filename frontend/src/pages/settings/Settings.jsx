import { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedUser.profilePicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
       await axios.put(`/users/${user._id}`, updatedUser);
    } catch (err) {

    }
    console.log(updatedUser)
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img src={user.profilePicture} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} 
            onChange={(e)=> setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">Username </label>
          <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)} />
          <label htmlFor="">Email </label>
          <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="">Password </label>
          <input type="password" placeholder="*****"  onChange={(e)=>setPassword(e.target.value)}/>
          <button className="settingsSubmit" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
