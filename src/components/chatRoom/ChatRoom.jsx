import "./chatRoom.css";
import React, { useState } from "react";
import { collection, query, orderBy, doc, getFirestore, serverTimestamp, addDoc } from "firebase/firestore";
import { useAuth, FirestoreProvider, useFirestoreCollectionData, useFirestoreDocData, useFirestore, useFirebaseApp } from "reactfire";
import ChatMessage from "../chatMessage/ChatMessage";

const ChatRoom = () => {
  const firestore = useFirestore();
  const auth = useAuth();
  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"));
  const { status, data: messages } = useFirestoreCollectionData(messagesQuery, { idField: "id", });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue("");

  }



  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </main>
      <form onSubmit={sendMessage}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something" />

        <button type="submit" disabled={!formValue}>🕊️</button>

      </form>
    </>
  );
}

export default ChatRoom