import React from "react";
import { collection, query, orderBy, doc, getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirestoreCollectionData, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';

const ChatRoom = () => {
  const firestore = useFirestore();
  const messagesCollection = collection(firestore, 'messa');
  const messagesQuery = query(messagesCollection, orderBy('createdAt'));
  const { status, data: messages } = useFirestoreCollectionData(messagesQuery, { idField: 'id', });

  if (status === 'loading') {
    return <span>loading...</span>;
  }

  return (
    <ul>
      {messages.map((msg) => (
        <li key={msg.id}>{msg.text}</li>
      ))}
    </ul>
  );
}

export default ChatRoom