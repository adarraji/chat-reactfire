import "./App.css";
import { doc, getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp, useAuth, AuthProvider, DatabaseProvider } from 'reactfire';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import SignIn from "../components/signIn/SignIn";
import Home from "./Home";


function App() {
  const app = useFirebaseApp();
  const firestoreInstance = getFirestore(useFirebaseApp());
  const database = getDatabase(app);
  const auth = getAuth(app);

  return (
    <div className="App">
      <FirestoreProvider sdk={firestoreInstance}>
        <AuthProvider sdk={auth}>
          <DatabaseProvider sdk={database}>
            <Home />
          </DatabaseProvider>
        </AuthProvider>
      </FirestoreProvider>
    </div>
  );
}

export default App;
