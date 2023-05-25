import React from "react"
import { useAuth } from 'reactfire';

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  const auth = useAuth();
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"} />
        <p>{text}</p>
      </div>
    </>
  )
}

export default ChatMessage