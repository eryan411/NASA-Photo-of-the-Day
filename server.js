const express = require('express')
const PORT = process.env.PORT || 8000


const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.listen(PORT, () =>{
    console.log(process.env.PORT)
    console.log(`Your server is running on Port ${PORT}, better go catch it!`)
})