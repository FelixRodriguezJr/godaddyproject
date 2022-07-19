import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './firebase'
import { doc, collection, setDoc, serverTimestamp } from 'firebase/firestore'
import { Button, TextField, Typography, Grid, Box } from '@mui/material';
import Posts from './components/Posts'

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
    <Box style={{margin: 20}}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">GoDaddy Answers</Typography>
      </Grid>
      <Grid item xs={6}>
          <Button variant="contained" onClick={createPost}>Create Post</Button>
          <TextField style={{color: "white"}} value={value} onChange={handleChange} variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Posts></Posts>
        </Grid>
        
        
        
    
        
        
      </Grid>
    </Box>
  );
}

export default App;
