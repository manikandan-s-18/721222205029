const express = require('express');  
const app = express();  
app.use(express.json());  

app.post('/average', (req, res) => {  
    const numbers = req.body.numbers; // Expect an array of numbers  
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;  
    res.json({ average });  
});  

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);  
});  