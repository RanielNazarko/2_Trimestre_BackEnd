/*    npm init                               */
/*    npm i express                          */
/*    Instalar extensão RapidAPI client      */

const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require("fs")

app.post("/clientes", (req, res) => {
    const cliente = req.body
    try {
        /*     Abrir o arquivo         */
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        /*     adicionar o cliente     */
        bd.push(cliente)
        /*     salvar o arquivo        */
        fs.writeFileSync("bd.json", JSON.stringify(bd), "utf8")
        /*     Resposta                */
        res.status(201).json({ resposta: "Cliente cadastrado!" })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

app.get("/ola", (req, res) => {
    res.json({ resposta: "ola mundo!" })
})

app.get("/perfil", (req, res) => {
    res.json({ Nome: "Raniel de Jesus Nazarko", idade: "16 Anos" })
})

app.listen(port, () => {
    console.log("API rodando na porta " + port)
})

/*    http://localhost:3000/perfil            */
