import express from 'express';
import CustomError from '../helpers/custom_error_handler';
import { db } from '../helpers/init_postgres';

const router = express.Router();

router
    .route('/products')
    .get(async (req, res, next) => {
        const { rows } = await db.query('SELECT * FROM product');

        const error = CustomError.newError(406);

        console.log(error);

        res.status(200).send({ data : rows });
    })
    .post(async (req, res) => {

        const { body } = req;

        const columns = Object.keys(body);

        const values = Object.values(body);

        const check_query = `SELECT * FROM product WHERE name="Nike Air"`;

        console.log(check_query)

        const response = await db.query(check_query)

        console.log(response.rows)

        /*const query = `INSERT INTO product(${columns.join(',')}) VALUES(${values.map(
            (_, id) => `$${id + 1}`
        )}) RETURNING *`;
        
        const { rows } = await db.query(query, values);*/

        //res.status(201).send({ data : rows });
    });

export default router;
