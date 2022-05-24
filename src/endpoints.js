import { Router } from 'express'
import { somar, dobro, media, temp, tabuada, text, cinema, corprimaria, maiornumero } from './services.js'
const server = Router();

server.get('/dobro/:numero', (req, resp) => {
    try{const numero = Number(req.params.numero);
        const b = dobro(numero)
        resp.send({
            dobro: b
        })
    }
    catch(err){
        resp.status(500).send({
            error: err.message 
        })
    }
})
server.get('/somar', (req,resp) => {
    try{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const x = somar(a, b)
    resp.send({
        soma: x
    })
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})


server.post('/somar', (req, resp) => {
    try{
        const { a: num1, b: num2 } = req.body;
    const soma = somar(num1, num2);
    resp.send({
        soma: soma
    })
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})
server.post('/media', (req, resp) => {
    try{
        const { a: num1, b: num2, c: num3 } = req.body;
    const resposta = media(num1, num2, num3);
    resp.send({
        media: resposta
    })
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})

server.get('/temp', (req,resp) => {
    try{
    const a = Number(req.query.a);
    const x = temp(a)
    resp.send({
        febre: x
    })
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})

server.get('/tab', (req,resp) => {
    try{
    const a = Number(req.query.a);
    const x = tabuada(a)
    resp.send(x)
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})
server.get('/dia2/freqcaracter/:texto/:caracter', (req,resp) => {
    try{
    const a = String(req.params.texto);
    const b = String(req.params.caracter)

    const x = text(a, b)
    resp.send({
        freq: x
    })
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})
server.get('/dia2/corprimaria/:cor', (req,resp) => {
    try{
    const a = String(req.params.cor);
    const x = corprimaria(a)
    resp.send({
        resposta: x
    })
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})

server.post('/dia2/ingressocinema', (req, resp) => {
    try{
    const { a: num1, b: num2, c: num3, d:num4 } = req.body;
    const resposta = cinema(num1, num2, num3, num4)
    resp.send({
        total: resposta
    })
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})

server.post('/dia2/maiornumero', (req, resp) => {
    try{
        const { a: num1 } = req.body;
    const resposta = media(num1);
    resp.send({
        maior: resposta
    })
    }
    catch(err){
        resp.status(500).send({
            error: err.message
        })
    }
})
export default server
