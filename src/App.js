import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './firebase'
import { doc, collection, setDoc, serverTimestamp} from 'firebase/firestore'

function App() {
  const createPost = async () => {
    console.log('Creating POst')
    const newPostRef = doc(collection(db, "posts"));
        await setDoc(newPostRef, {
            content: 'This is a test post from react',
            timestamp: serverTimestamp()
        });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={createPost}>Create Post</button>
      </header>
    </div>
  );
}

export default App;
