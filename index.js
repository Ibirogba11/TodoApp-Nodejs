import express from 'express'
import authRoute from  './routes/authRoute.js';
const app = express();

app.use('/api/auth', authRoute);

app.listen(9000, () => {
    console.log('Server is runnning on port 9000' );
    
});