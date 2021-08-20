import { PORT } from './config';
import express from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.routes';
import productRoutes from './routes/product.routes';
import utilsRoutes from './routes/utils.routes';
import cors from 'cors';
//import csrf from 'csurf';
import parser from 'cookie-parser';

const app = express();

const middlewares = [
    morgan('dev'),
    express.json({ limit: '50mb' }),
    express.urlencoded({ limit: '50mb', extended: true }),
    cors(),
    parser()
];
 
app.use(middlewares);

app.use('/api', productRoutes);
app.use('/api/auth', authRoute);
app.use('/api/utilities', utilsRoutes);
app.use(express.static('client/build'));

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

  