import express from "express";

import {veiculo , montadoras} from './dados.js';

const app  = express();

app.get('/',(req , res)=> {
    res.json({ msg: "ok" });

})
app.get('/veiculo',(req , res)=> {
    res.json(veiculo);

})

app.get('/montadoras', (req , res) =>{
    res.json(montadoras);

})

const Port = 3030;
app.listen(Port,()=>{
    console.log('Sistema inicializado:')
})