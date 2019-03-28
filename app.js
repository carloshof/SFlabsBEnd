var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
   extended:true
}));


var Pessoa = [];





app.get('/', function (req, res) {
    res.send(Pessoa);

});

app.post('/', function (req, res) {
        let cadastro = {};

        cadastro.CPF=req.body.cpf;
        cadastro.Nome=req.body.name;
        cadastro.email=req.body.email   ;
        cadastro.tel=req.body.tel;
        cadastro.senha=req.body.senha;
        Pessoa.push(cadastro);
        res.send(Pessoa);
});

app.delete('/', function (req, res) {
    var cpf = req.body.cpf;
    Pessoa.forEach((Deletar,i) => {
        console.log(Deletar.CPF);
        if(Deletar.CPF == cpf)
        {
            Pessoa.splice(i,1);
            res.send();
        }
    });
            
       
       

});

app.put('/', function (req, res) {
    var Troca = req.body.cpf;
    Pessoa.forEach((Deletar,i) => {
        if(Deletar.CPF == Troca)
        {   
            Pessoa[i].Nome=req.body.name;
            Pessoa[i].email=req.body.email;
            Pessoa[i].tel=req.body.tel;
            Pessoa[i].senha=req.body.senha;

        }
    })
            res.send();

});





app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});
