const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


//All MiddleWares Imports here

//Use middlewares here
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // if using cookies or auth headers
  }));
//import all files here
const connectDB = require('./Config/Database')

//use all files here
connectDB();

//import all routes here 
const user = require('./Routes/user.routes');
const product = require('./Routes/product.routes');
const category = require('./Routes/category.routes');
const cart = require('./Routes/cart.routes');
const order = require('./Routes/order.routes');

//use all routes here
app.use('/api/user', user);
app.use('/api/product', product);
app.use('/api/category', category);
app.use('/api/cart', cart);
app.use('/api/order', order);




app.get('/', (req, res)=>{
    res.send("hello this is my new app");
})


app.listen(port, ()=>{
    console.log("this app is running on port: ", port);
})