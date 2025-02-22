import {
  AlertTitle,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import moment from 'moment';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  'border-radius': '20px',
  boxShadow: 24,
  p: 7,
};

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

export default function Post({ post: { content, timestamp, title } }) {
  const styles = {
    cardContainer: {
      width: '100%',
      marginBottom: 10,
    },
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card elevation={10} style={styles.cardContainer}>
      <CardContent>
        <Typography variant='h5'>{title}</Typography>
        <Typography>{content}</Typography>
        <div>{moment.unix(timestamp.seconds).startOf('second').fromNow()}</div>
        <Grid container>
          <Grid item xs={8}>
            <ThemeProvider theme={theme}>
                <Button
                style={{ marginTop: 20, marginLeft: 5}}
                
                color='neutral'
                variant='outlined'
                endIcon={<SendIcon />}
                onClick={handleOpen}
                >
                Reply
                </Button>
            </ThemeProvider>
          </Grid>
          <Grid item>
            <Typography style={{ marginTop: 27 }}>
              Published by user@godaddy.com
            </Typography>
          </Grid>
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              <strong>Replying to: </strong> "{title}"
            </Typography>
            <TextField
              style={{ marginTop: 10 }}
              fullWidth
              multiline
              label='Enter Reply'
            ></TextField>
            <ThemeProvider theme={theme}>
                <Button onClick={handleClose} color='neutral'>
                Submit Reply
                </Button>
            </ThemeProvider>
            
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
}

//Lay out card
//Change input fields color
//Implement user on the sidebar and posts
