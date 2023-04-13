import React, { useEffect, useState } from "react";
import "./Feed.css";
// import CreateIcon from "@material-ui/icons/Create";
import {
  CalendarViewDayOutlined,
  Create,
  EventNoteOutlined,
  Image,
  SubscriptionsOutlined,
} from "@mui/icons-material";
import InputOption from "./InputOption";
// import ImageIcon from "@material-ui/icons/Image";
// import { CalendarViewDay, EventNote, Subscriptions } from "@material-ui/icons";
import Post from "./Post";
import { db } from "./firebase";
import { serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          {/* <CreateIcon /> */}
          <Create />

          <form className="feed__input__form">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="feed__input__form__input"
              type="text"
            />
            <button
              onClick={sendPost}
              className="feed__input__form__button"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="photo" color="#70B5F9" />
          <InputOption
            Icon={SubscriptionsOutlined}
            title="Video"
            color="#E7A33E"
          />
          <InputOption Icon={EventNoteOutlined} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayOutlined}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
