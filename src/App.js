import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './firebase'
import { doc, collection, setDoc, serverTimestamp } from 'firebase/firestore'
import { Button, TextField, Typography, Grid, Box } from '@mui/material';
import Posts from './components/Posts'
import SearchBar from './components/SearchBar'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    neutral: {
      main: '#00d6d5',
      contrastText: '#fff',
    },
  },
});



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
    <><Box />
      <Box style={{  }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} >
            <SearchBar></SearchBar>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ textAlign: "center" }} variant="h1"  fontWeight="500">GoDaddy Companion</Typography>
          </Grid>

         
          
          <Grid item xs={8} style={{ textAlign: "left" }}>
            <TextField required fullWidth label="Question" value={title} onChange={handleChangeTitle} variant="outlined" />
          </Grid>

          <Box></Box>

          <Grid xs={8} item>
            <TextField required fullWidth multiline maxRows={4} label="Details" value={content} onChange={handleChangeContent} variant="outlined" />
          </Grid>

          <Grid item xs={5} style={{ textAlign: "center" }}>
            <ThemeProvider theme={theme}>
              <Button fullWidth color="neutral" size="large" variant="contained" onClick={createPost}>Publish</Button>
            </ThemeProvider>
            
          </Grid>

          <Grid item xs={8} justifyContent="center">
            <Posts></Posts>
          </Grid>
        </Grid>
      </Box></>
      
  );
}

export default App;
