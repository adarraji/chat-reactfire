import React from "react";
import { collection, query, orderBy, doc, getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirestoreCollectionData, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';
import ChatMessage from "../chatMessage/ChatMessage";

const ChatRoom = () => {
  const firestore = useFirestore();
  const messagesCollection = collection(firestore, 'messages');
  const messagesQuery = query(messagesCollection, orderBy('createdAt'));
  const { status, data: messages } = useFirestoreCollectionData(messagesQuery, { idField: 'id', });

  if (status === 'loading') {
    return <span>loading...</span>;
  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </main>
      <form>
      </form>
    </>
  );
}

export default ChatRoom