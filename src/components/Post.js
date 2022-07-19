import { Card, CardContent, Typography } from '@mui/material'
import moment from 'moment'
 

export default function Post({ post: { content, timestamp } }) {
    
    const styles = {
        cardContainer: {
            width: "100%",
            marginBottom: 10, 
        }
    }
    return (
        <Card elevation={10} style={styles.cardContainer}>
            <CardContent>
                <Typography>{content}</Typography>
                <span>{moment.unix(timestamp.seconds).startOf('second').fromNow()}</span>
            </CardContent>
            
        </Card>
    )
}

//Lay out card
//Change input fields color
//Implement user on the sidebar and posts