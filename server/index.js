const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");



const app = express(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'))

app.get('/:id',(req,res) => {
//    TODO redirect to url
})


app.get("/url", (req, res) => {
  //    get a short url by id
});


app.post("/url/:id", (req, res) => {
  //    
});

const port = process.env.PORT || 1337;


app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
})