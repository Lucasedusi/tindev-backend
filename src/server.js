// express é uma função que quando chmada cria um novo servidor
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('nova conexao', socket.id);
});

mongoose.connect('mongodb+srv://tindev:tindev@cluster0-k5spm.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);