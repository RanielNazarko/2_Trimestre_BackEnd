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
  
app.get("/clientes", (req, res) => {
    try {
        /*     Abrir o arquivo         */
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        res.status(200).json({resposta: bd})
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

/*       Encontra Cliente pelo NOME           */
app.get("/clientes/nome/:nome", (req, res) => {
    const nome = req.params.nome
    try {
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const cliente = bd.find((cliente) => cliente.nome == nome)
        if(!cliente){
            return res.status(404).json({erro: "Cliente com esse NOME não existe no BD!"})
        }
        res.status(200).json({resposta: cliente})
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

/*       Encontra Cliente pelo CPF            */
app.get("/clientes/cpf/:cpf", (req, res) => {
    const cpf = req.params.cpf
    try {
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const cliente = bd.find((cliente) => cliente.cpf == cpf)
        if(!cliente){
            return res.status(404).json({erro: "Cliente com esse CPF não existe no BD!"})
        }
        res.status(200).json({resposta: cliente})
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

/*       Encontra Cliente pela SENHA          */
app.get("/clientes/senha/:senha", (req, res) => {
    const senha = req.params.senha
    try {
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const cliente = bd.find((cliente) => cliente.senha == senha)
        if(!cliente){
            return res.status(404).json({erro: "Cliente com essa SENHA nâo existe no BD!"})
        }
        res.status(200).json({resposta: cliente})
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

app.listen(port, () => {
    console.log("API rodando na porta " + port)
})












/*    GET  = Ver o Perfil                                  http://localhost:3000/perfil                                   */
/*    GET  = Ver o clientes cadastrados                    http://localhost:3000/clientes                                 */
/*    POST = adicionar cliente                             http://localhost:3000/clientes                                 */
/*    GET  = Ver o cliente com o NOME em especifico        http://localhost:3000/clientes/nome/Raniel                     */
/*    GET  = Ver o cliente com o CPF em especifico         http://localhost:3000/clientes/cpf/10121989950                 */
/*    GET  = Ver o cliente com uma SENHA em especifico     http://localhost:3000/clientes/senha/Raniel                    */
