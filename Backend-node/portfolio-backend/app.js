require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const config = require('config')
app.use(express.json());
const db = `mongodb+srv://${config.get('db_username')}:${config.get('db_password')}@cluster0.wqw2c.mongodb.net/Portfolio_db?retryWrites=true&w=majority`;
var cors = require('cors')

app.use(cors())



// Middleware Register
const MiddleWareRegister = require('./middleware/rootMiddleware')
MiddleWareRegister(app);

// Route Register
const RouterRegister = require('./routes/web');

RouterRegister(app);

const PORT = process.env.PORT || 5000;
// SERVER
mongoose.connect(db,{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>{
        console.log('Database connected')
        app.listen(PORT, ()=>{
            console.log(`App is running on port ${PORT}`)
        });
    })
    .catch(err=>{
        console.log(err)
    })
