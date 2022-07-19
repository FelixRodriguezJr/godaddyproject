import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './firebase'
import { doc, collection, setDoc, serverTimestamp } from 'firebase/firestore'
import { Button, TextField } from '@mui/material';

function App() {
  const [value, setValue] = useState('')
  
  const handleChange = event => {
    setValue(event.target.value)
  }
  const createPost = async () => {
    console.log('Creating POst')
    const newPostRef = doc(collection(db, "posts"));
    await setDoc(newPostRef, {
        content: value,
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
        <Button variant="contained" onClick={createPost}>Create Post</Button>
    
        <TextField style={{color: "white"}} value={value} onChange={handleChange} variant="outlined" />
      </header>
    </div>

  );
}

export default App;
