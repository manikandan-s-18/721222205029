
import React, { useEffect, useState } from 'react';  
import { Typography, Card, CardContent } from '@mui/material';  

const TrendingPosts = () => {  
    const [trendingPosts, setTrendingPosts] = useState([]);  

    useEffect(() => {  
        const fetchTrendingPosts = async () => {  
            const response = await fetch('http://localhost:3000/posts?type=popular');   
            const data = await response.json();  
            setTrendingPosts(data.posts); 
        };  

        fetchTrendingPosts();  
    }, []);  

    return (  
        <div>  
            <Typography variant="h4">Trending Posts</Typography>  
            {trendingPosts.map(post => (  
                <Card key={post.id}>  
                    <CardContent>  
                        <Typography variant="body1">{post.content}</Typography>  
                    </CardContent>  
                </Card>  
            ))}  
        </div>  
    );  
};  

export default TrendingPosts;  