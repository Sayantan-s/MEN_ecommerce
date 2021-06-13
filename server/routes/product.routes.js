import express from 'express';
import CustomError from '../helpers/custom_error_handler';
import { db } from '../helpers/init_postgres';

const router = express.Router();

router
    .route('/products')
    .get(async (req, res, next) => {
        const { rows } = await db.query('SELECT * FROM product');

        res.status(200).send({ data : rows });
    })
    .post(async (req, res, next) => {

        const { body } = req;

        const columns = Object.keys(body);

        const values = Object.values(body);

        const check_query = `SELECT * FROM product WHERE name = $1 AND tagname = $2`;

        const response = await db.query(check_query,[body.name, body.tagname])

        console.log(Boolean(response.rows.length))

        if(Boolean(response.rows.length)){
            return next(CustomError.alreadyExists('Product already exists'))
        }

        const query = `INSERT INTO product(${columns.join(',')}) VALUES(${values.map(
            (_, id) => `$${id + 1}`
        )}) RETURNING *`;
        
        const { rows } = await db.query(query, values);

        res.status(201).send({ data : rows });
    });

export default router;
