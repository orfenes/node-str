'use strict';

const ValidarionContract = require('../validators/fluent-validator');
const repository = require('../respositories/customer-repositorie');
const md5 = require('md5');
const emailService = require('../service/new-service');


exports.get = async(req, res, next) => {
  try{
    let data = await repository.get();
    res.status(200).send(data);
  } catch(e){
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }  
}


exports.post = async(req, res, next) => {
  let contract = new ValidarionContract();
  contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracters');
  contract.hasMinLen(req.body.email, 3, 'O email deve conter pelo menos 3 caracters');
  contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracters');

  if(!contract.isValid()){
    res.status(400).send(contract.errors()).end();
    return;
  }

  try{
    await repository.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    })

    emailService.send( req.body.email, 'Bem vindo ao node store', global.EMAIL_TMPL.replace('{0}', req.body.name));

    res.status(201).send({
      message: 'Cadastro realizando com sucesso'
    });
  }catch (e) {
    res.status(400).send({
      message: 'Ocorreu uma falha durante o cadastro', 
      data: e
    });
  } 
}
