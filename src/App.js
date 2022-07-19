import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './firebase'
import { doc, collection, setDoc, serverTimestamp } from 'firebase/firestore'
import { Button, TextField, Typography, Grid, Box } from '@mui/material';
import Posts from './components/Posts'

function App() {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')


  const handleChangeContent = (event) => {
    setContent(event.target.value)
  }
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const createPost = async () => {
    console.log('Creating POst')
    if (title !== "" && content !== "") {
      const newPostRef = doc(collection(db, "posts"));
      await setDoc(newPostRef, {
        title: title,
        content: content,
        timestamp: serverTimestamp()
      });
    }
  }

  return (
    <Box style={{ margin: 20 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography style={{ textAlign: "center" }} variant="h3">GoDaddy Answers</Typography>
        </Grid>

        <Grid item xs={4} style={{ textAlign: "left" }} >
          <TextField required fullWidth label="Question" value={title} onChange={handleChangeTitle} variant="outlined" />
        </Grid>

        <Grid item xs={0} style={{ textAlign: "left" }} >
          <Button size="large" variant="contained" onClick={createPost}>Create Post</Button>
        </Grid>

        <Grid item xs={8} style={{ textAlign: "center" }} >
          <TextField required fullWidth multiline maxRows={4} label="Details" value={content} onChange={handleChangeContent} variant="outlined" />
        </Grid>

        {/*
        <Grid item xs={12} style={{textAlign: "center"}} >
          <Button variant="contained" onClick={createPost}>Create Post</Button>
        </Grid>
        */}

        <Grid item xs={8} justifyContent="center">
          <Posts></Posts>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
