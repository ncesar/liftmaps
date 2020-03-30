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
});

app.use(morgan('common'));
app.use(helmet()); // utilizando o helmet ele muda alguns headers por questões de segurança
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
); // diz que qualquer origem pode fazer request pro backend
app.use(express.json()); // bodyparser

app.get('/', (req, res) => {
  res.json({
    message: '🤣😂😊😁 hi world',
  });
});

app.use('/api/logs', logs);
app.get('/api/get', (req, res) => {
  res.json({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    domain: process.env.REACT_APP_FIREBASE_DOMAIN,
    database: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    senderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log('listening on:', port);
});
