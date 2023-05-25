import "./chatRoom.css";
import React, { useRef, useState } from "react";
import { collection, query, orderBy, doc, getFirestore, serverTimestamp, addDoc } from "firebase/firestore";
import { useAuth, FirestoreProvider, useFirestoreCollectionData, useFirestoreDocData, useFirestore, useFirebaseApp } from "reactfire";
import ChatMessage from "../chatMessage/ChatMessage";

const ChatRoom = () => {
  const ref = useRef();
  const firestore = useFirestore();
  const auth = useAuth();
  const messagesCollection = collection(firestore, "messages");
  const messagesQuery = query(messagesCollection, orderBy("createdAt"));
  const { status, data: messages } = useFirestoreCollectionData(messagesQuery, { idField: "id", });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesCollection, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue("");    
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={ref}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something" />
        <button type="submit" disabled={!formValue}>📩</button>

      </form>
    </>
  );
}

export default ChatRoom