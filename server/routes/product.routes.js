import express from 'express'
import { db } from '../helpers/init_postgres';

const router = express.Router();

router
.route('/products')
.get(async(req, res, next) => {

    const { rows } = await db.query('SELECT * FROM product');

    res.send({ rows });

})
.post(async(req, res) => {

    const columns = Object.keys(req.body);

    const values = Object.values(req.body);

    const query  = `INSERT INTO product(${columns.join(',')}) VALUES(${values.map((_,id) => `$${id + 1}`) }) RETURNING *`;

    const { rows } = await db.query(query, values);

    res.send({ rows })
})

export default router;