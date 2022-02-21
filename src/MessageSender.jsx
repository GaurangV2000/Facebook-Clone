import React from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import db from "./Firbase";
import firebase from "firebase/compat/app";

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState();
  const [imageURL, setImageURL] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });

    setInput("");
    setImageURL("");
  };

  return (
    <>
      <div className="messagesender">
        <div className="messagesender_top">
          <Avatar src={user.photoURL} />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="messagesender_input"
              placeholder={`What is in your mind , ${user.displayName}`}
              type="text"
            />
            <input
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              placeholder="image URL {optional}"
              type="text"
            />

            <button onClick={handleSubmit} type="submit">
              Hidden submit
            </button>
          </form>
        </div>

        <div className="messagesender_bottom">
          <div className="messagesender_option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>

          <div className="messagesender_option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3> Photo/Video</h3>
          </div>

          <div className="messagesender_option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feelings/Activity</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSender;
