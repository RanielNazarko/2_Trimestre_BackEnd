/*    npm init                               */
/*    npm i express                          */
/*    Instalar extensão RapidAPI client      */

const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

app.get("/ola", (req, res) => {
    res.json({resposta: "ola mundo!"})
})

app.get("/perfil", (req, res) => {
    res.json({Nome: "Raniel de Jesus Nazarko", idade:"16 Anos"})
})

app.listen(port, () => {
    console.log("API rodando na porta " + port)
})

/*    http://localhost:3000/perfil            */