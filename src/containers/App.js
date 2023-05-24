import "./App.css";
import { doc, getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp, useAuth, AuthProvider } from 'reactfire';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import SignIn from "../components/signIn/SignIn";




function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);

  return (
    <div className="App">
      <AuthProvider sdk={auth}>
        <SignIn />
      </AuthProvider>
    </div>
  );
}

export default App;
