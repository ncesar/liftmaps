const notFound = (req, res, next) => {
  // isso é 1 middleware de 404
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // o next faz ir para o próximo middleware
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  // precisa ter 4 params
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // A ideia é que se alguma outra
  // rota além da principal
  // deu status 200, que indica sucesso ou 400, ou qualquer outro erro,
  // ate de database, isso não deveria acontecer,
  // ja que essa rota não foi definida. Então ele seta como 500.
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'error' : error.stack, // é bom pra debug, mostra o que houve mas ñ é bom p produção
  });
};

module.exports = {
  notFound,
  errorHandler,
};
