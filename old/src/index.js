const express = require('express')
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send(`<h1>API Running Heroku port ${Port}</h1>`)
})

app.use(express.json())
app.use(userRouter)


app.listen(port, () => {
    console.log("Running at ", port);
    
})