//import csrf from 'csurf';
const { PORT }  = require('./config');
const express = require('express');
const morgan = require('morgan');
const parser = require('cookie-parser');
const cors = require('cors')

const app = express();

const middlewares = [
    morgan('dev'),
    express.json({ limit: '50mb' }),
    express.urlencoded({ limit: '50mb', extended: true }),
    cors(),
    parser()
];
 
app.use(middlewares);

app.use('/api', require('./routes/product.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/utilities', require('./routes/utils.routes'));
//app.use(express.static('client/build'));

app.use((req, res, next) => {
    const error = new Error('Page not found!');
    error.status = 404;
    next(error);
}); 

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    return res.status(statusCode).json({
        status: statusCode,
        message: err.message
    });
});

app.listen(PORT, (_) => console.log('Server is live....' + PORT));

  