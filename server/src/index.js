const express = require('express');
const morgan = require('morgan'); // é um logger que registar todos os requests
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const middlewares = require('./middlewares');
const logs = require('./api/logs');

require('dotenv').config();

const app = express();
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(morgan('common'));
app.use(helmet()); // utilizando o helmet ele muda alguns headers por questões de segurança
app.use(cors({ origin: 'https://liftmaps.com' })); // diz que qualquer origem pode fazer request pro backend
app.use(express.json()); // bodyparser

app.get('/', (req, res) => {
  res.json({
    message: '🤣😂😊😁 hi world',
  });
});

app.use('/api/logs', logs);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log('listening on:', port);
});
