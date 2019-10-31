const { Schema, model } = require('mongoose');

const devSchema = new Schema({ // Estrutura da minha tabela no banco de dados para armazenar um desenvolvedor
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = model('Dev', devSchema); 
//Primeiro parâmentro, nome do model e o segundo é o nome da Schema