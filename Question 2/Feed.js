
import React, { useEffect, useState } from 'react';  
import { Typography, Card, CardContent } from '@mui/material';  

const Feed = () => {  
    const [posts, setPosts] = useState([]);  

    useEffect(() => {  
        const fetchLatestPosts = async () => {  
            const response = await fetch('http://localhost:3000/api/posts?type=latest'); 
            const data = await response.json();  
            setPosts(data.posts);  
        };  

        fetchLatestPosts();  

        const interval = setInterval(fetchLatestPosts, 5000);  
        return () => clearInterval(interval); 
    }, []);  

    return (  
        <div>  
            <Typography variant="h4">Latest Feed</Typography>  
            {posts.map((post) => (  
                <Card key={post.id}>  
                    <CardContent>  
                        <Typography variant="body1">{post.content}</Typography>  
                    </CardContent>  
                </Card>  
            ))}  
        </div>  
    );  
};  

export default Feed;  