
const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');


router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (error) {
        console.error('Erro ao obter livros:', error);
        res.status(500).json({ mensagem: 'Erro ao obter livros' });
    }
});


router.post('/', async (req, res) => {
    try {
        const novoLivro = await incluir(req.body); 
        res.status(201).json({ mensagem: 'Livro incluído com sucesso', livro: novoLivro });
    } catch (error) {
        console.error('Erro ao incluir livro:', error);
        res.status(500).json({ mensagem: 'Erro ao incluir livro' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const resultado = await excluir(id); 

        if (resultado.deletedCount > 0) {
            res.json({ mensagem: 'Livro excluído com sucesso' });
        } else {
            res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao excluir livro:', error);
        res.status(500).json({ mensagem: 'Erro ao excluir livro' });
    }
});


module.exports = router;
