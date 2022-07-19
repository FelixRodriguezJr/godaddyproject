import db from "../firebase"
import { collection, onSnapshot} from "firebase/firestore"
import {useEffect, useState} from "react"
import Post from "./Post"
export default function Posts () {
    const [posts, setPosts] = useState([])

    useEffect(() => {

            const unsubscribe = onSnapshot(collection(db, "posts"), (querySnapshot) => {
                const updatedPosts = [];
                console.log(querySnapshot)
                querySnapshot.forEach((doc) => {
                    return !doc.metadata.hasPendingWrites ? updatedPosts.push(doc.data()) : null;
                });
                console.log(updatedPosts);
                updatedPosts.sort(function (x, y) {return y.timestamp - x.timestamp})
                setPosts(updatedPosts)
            });

            return () =>  unsubscribe();
    },[])



    return (<>{posts.map(doc => <Post post={doc} key={doc.id} />)}</> )
}