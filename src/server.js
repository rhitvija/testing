import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import cors from 'cors'
import { usersTable } from './db/schema.js';

import express from 'express'
const app = express();

app.use(express.json())
 
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
  
const db = drizzle("postgresql://neondb_owner:npg_7EevcL0GJoDu@ep-green-shape-b4uqe0ho-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

app.get ('/', function (req, res){
    res.json("Welcome!")
})

app.post ('/users', async function (req, res){
    const user= req.body 
     
      await db.insert(usersTable).values(user);
  console.log('New user created!')

})



app.listen (3002, function(){
    console.log("Server is on, 3002")
})