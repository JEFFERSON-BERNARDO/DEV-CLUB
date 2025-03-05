

import express from 'express'

const app = express()
app.use(express.json())

const users=[]

app.get('/usuarios', (request, response)=>{
    response.status(200).json(users)
    
})

app.post('/usuarios', (req, res)=> {
    users.push(req.body)

    res.status(201).json({message:"ussuário criado com sucesso"})
})








app.listen (3000)