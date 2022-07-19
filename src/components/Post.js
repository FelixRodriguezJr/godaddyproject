import { AlertTitle, Card, CardContent, Typography, Button} from '@mui/material'
import moment from 'moment'
import SendIcon from '@mui/icons-material/Send';

 

export default function Post({ post: { content, timestamp, title } }) {
    
    const styles = {
        cardContainer: {
            width: "100%",
            marginBottom: 10, 
        }
    }
    return (
        <Card elevation={10} style={styles.cardContainer}>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography>{content}</Typography>
                <div>{moment.unix(timestamp.seconds).startOf('second').fromNow()}</div>
                <Button style={{ marginTop: 10}} color="secondary" variant="outlined" endIcon={<SendIcon />}>Reply</Button>
               
            </CardContent>
            
        </Card>
    )
}

//Lay out card
//Change input fields color
//Implement user on the sidebar and posts