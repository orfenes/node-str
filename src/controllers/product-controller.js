'use strict';

const ValidarionContract = require('../validators/fluent-validator');
const repository = require('../respositories/product-repositorie');

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

exports.getBySlug = async(req, res, next) => {
  try{
    let data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch(e) {
    res.status(400).send({
      message: 'Falha ao carregar lista de produtos',
      date: e
    })
  }
}

exports.getById = async(req, res, next) => { 

  try{
    let data = await repository.getById(req.params.id)
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao carregar lista de produtos', 
      data: e
    });
  }
}

exports.getByTags = async(req, res, next) => {  
  
  try{        
    let data = await repository.getByTags(req.params.tags)    
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao carregar lista de produtos', 
      data: e
    });
  }
}

exports.post = async(req, res, next) => {
  let contract = new ValidarionContract();
  contract.hasMinLen(req.body.title, 3, 'O titulo deve conter pelo menos 3 caracters');
  contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracters');
  contract.hasMinLen(req.body.description, 3, 'O description deve conter pelo menos 3 caracters');

  if(!contract.isValid()){
    res.status(400).send(contract.errors()).end();
    return;
  }

  try{
    await repository.create(req.body)
    res.status(201).send({
      message: 'Produto cadastrado com sucesso'
    });
  }catch (e) {
    res.status(400).send({
      message: 'Falha ao cadastrar o produto', 
      data: e
    });
  } 
}

exports.put = async(req, res, next) => {  
  try{
    await repository.update(req.params.id, req.body);
    res.status(200).send({ 
      message: 'Produto atualizar com sucesso'
    });
  }catch (e){
    res.status(400).send({
      message: 'Falha ao atualizar o produto', 
      data: e
    })
  }
};

exports.delete = async(req, res, next) => {
  try{
    await repository.delete(req.params.id)
    res.status(200).send({ 
      message: 'Produto removido com sucesso'
    });
  } catch (e){
    res.status(400).send({
      message: 'Falha ao remover o produto', 
      data: e
    });
  }
};