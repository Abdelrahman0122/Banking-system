import express from 'express';
import cors from 'cors';
import { connection } from './Database/Connection.js';
import userRoutes from './src/User/user.routes.js';
import  transfareRoutes  from './src/transfare/transfare.routes.js';



const app = express();
const port = 3000 ;
app.use(express.json());
app.use(cors())

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/transfare',transfareRoutes);




connection();

app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});


app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});