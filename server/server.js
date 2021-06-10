import { PORT } from './config';
import express from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.route';

const app = express();

const middlewares = [morgan('combined'), express.urlencoded({ extended: true }), express.json()];

app.use(middlewares);

app.use('/auth', authRoute);

app.use((req, res, next) => {
    const error = new Error('Page not found!');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    return res.status(statusCode).send({
        status: statusCode,
        message: err.message
    });
});

app.listen(PORT, (_) => console.log('Server is live....'));
