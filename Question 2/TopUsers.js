// src/components/TopUsers.js  
import React, { useEffect, useState } from 'react';  
import { Typography, Card, CardContent } from '@mui/material';  

const TopUsers = () => {  
    const [users, setUsers] = useState([]);  

    useEffect(() => {  
        const fetchTopUsers = async () => {  
            const response = await fetch('http://localhost:5000/top-users');  
            const data = await response.json();  
            setUsers(data.users.slice(0, 5));  
        };  

        fetchTopUsers();  
    }, []);  

    return (  
        <div>  
            <Typography variant="h4">Top Users</Typography>  
            {users.map(user => (  
                <Card key={user.id}>  
                    <CardContent>  
                        <Typography variant="h6">{user.name}</Typography>  
                    </CardContent>  
                </Card>  
            ))}  
        </div>  
    );  
};  

export default TopUsers;  