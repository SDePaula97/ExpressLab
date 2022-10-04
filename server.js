const express = require('express')

const app = express();
const PORT = 3000


// Middleware
app.use(morgan(dev))


// Routes
app.get("/greeting/:name", (req,res) => {
    const{name} = req.params;
    res.send(`${name}! It's so great to see you!`);
});
app.get("/tip/:total/:tipPercentage", (req,res) => {
    let {total,tipPercentage} = req.params;
    let tip = tipPercentage /= total
    res.send('Your tip is ${tip}!')
});
app.get("/magic/:question", (req,res) => {
    let question = req.params 
    const qArray = ["It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", 
    "My sources say no","Outlook not so good", 
    "Very doubtful"] 
    question = qArray(Math.floor(Math.random() * qArray.length))
    res.send(`${question} : ${answer}`)
}) //'/magic/Will%20I%20Be%20A%20Millionaire'

// tell the app to listen on port 3000
app.listen(PORT, () => {
    console.log("listening on port:", PORT)
});
