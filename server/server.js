import { CLIENT, PORT } from './config';
import express from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.routes';
import { connection } from './helpers/init_postgres';
import productRoutes from './routes/product.routes';
import cors from 'cors';

const app = express();

const middlewares = [morgan('dev'), express.json(), cors({ origin: CLIENT })];

app.use(middlewares);

app.use('/auth', authRoute);
app.use('/api', productRoutes);

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

connection(() => {
    app.listen(PORT, (_) => console.log('Server is live....' + PORT));
});
