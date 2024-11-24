const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/livraria';

mongoose.connect(uri)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro na conexão com o MongoDB:', err));

module.exports = mongoose;
