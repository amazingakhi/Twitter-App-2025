import express, { urlencoded } from 'express';
import morgan from 'morgan';

// Create a new express app/server object

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get('/ping' , (req, res) => {
    return res.json({
        message: 'pong'
    });
});


app.post('/hello' ,  (req, res) => {
    console.log("query params" , req.query);
    console.log("req body" , req.body)
    return res.json({
        message: 'world'
    });
});

app.get('/tweets/:tweet_id/comments/:comment_id' ,(req, res) => {
    console.log("params" , req.params)
    return res.json({
        message: 'comment'
    });
});



app.listen(3000, () => {
    console.log('server is running on port 3000');
});