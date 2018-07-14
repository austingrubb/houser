const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(database =>{
    app.set('db', database);
}).catch(error => {
    console.log('error',error)
})

const PORT = 4000;
app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));

