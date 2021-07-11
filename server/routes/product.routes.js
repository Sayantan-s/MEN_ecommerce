import express from 'express';
import CustomError from '../helpers/custom_error_handler';
import { db } from '../helpers/init_postgres';
import isAuth from '../middlewares/isAuth';

const router = express.Router();

router
    .route('/products')
    .get(async (req, res, next) => {
        const { rows } = await db.query('SELECT * FROM products');

        res.status(200).send({ data: rows });
    })
    .post(async (req, res, next) => {
        const { body } = req;

        const columns = Object.keys(body);

        const values = Object.values(body);

        const check_query = `SELECT * FROM products WHERE name = $1 AND tagname = $2`;

        const response = await db.query(check_query, [body.name, body.tagname]);

        if (response.rows.length) {
            return next(CustomError.alreadyExists('Product already exists'));
        }

        const query = `INSERT INTO products(${columns.join(',')}) VALUES(${values.map(
            (_, id) => `$${id + 1}`
        )}) RETURNING *`;

        const { rows } = await db.query(query, values);

        res.status(201).send({ data: rows });
    });

router
    .route('/cart')
    .get(async (req, res, next) => {
        const get_products_query = 'SELECT name, tagname FROM products WHERE _id = $1';

        const { rows } = await db.query(get_products_query, [_id]);
    })
    .post(async (req, res, next) => {
        console.log(req.body);
        try {
            const { user_id, product_id, quantity } = req.body;

            const check_query = `SELECT product_id FROM cart WHERE user_id = $1`;

            const prevProducts = await db.query(check_query, [user_id]);

            console.log(prevProducts.rows);

            if (prevProducts.rows.length) {
                console.log('Hello');
                const similarPrevProduct = prevProducts.rows.find(
                    (product) => product.product_id === product_id
                );

                console.log(similarPrevProduct.product_id);

                return;

                /*if (similarPrevProduct.product_id) {
                    const update_query = `UPDATE cart 
                    SET quantity = quantity + $1
                    WHERE product_id = $2 AND user_id = $3
                    `;
                    const updatePrevProducts = await db.query(update_query, [
                        +quantity,
                        similarPrevProduct.product_id,
                        user_id
                    ]);

                    return res.status(204).send({ message : `Product updated successFully` });
                }*/
            }

            const columns = Object.keys(req.body);

            const values = Object.values(req.body);

            const insert_item_query = `INSERT INTO cart(${columns
                .map((each) => each)
                .join(',')}) VALUES(${new Array(columns.length)
                .fill('$')
                .map((x, id) => x + (id + 1))
                .join(',')}) RETURNING *`;

            const { rows } = await db.query(insert_item_query, values);

            console.log(rows);
        } catch (error) {
            next(error);
        }
    });

router.route('/products/:id').get(async (req, res, next) => {
    console.log(req.params);

    const { id } = req.params;

    const [name, tagname] = id.split('_');

    const query = `SELECT name, tagname, price, cover, otherimages, gender, description, catagory, _id
    FROM products 
    WHERE name = $1 AND tagname = $2`;

    const { rows } = await db.query(query, [name, tagname]);

    if (!rows.length) {
        return next(CustomError.alreadyExists('Product is not present'));
    }

    res.status(200).send({ data: rows[0] });
});

router.get('/trendy-cloth', async (req, res, next) => {
    const { rows } = await db.query(
        `
        SELECT cover, name, tagname, price, _id 
        FROM products 
        WHERE catagory = $1 
        ORDER BY RANDOM() LIMIT 5`,
        ['clothing']
    );

    res.status(200).send({ data: rows });
});

router
    .route('/orders')
    .get(async (req, res, next) => {
        try {
            const { rows } = await db.query(
                `SELECT 
                order_id, product_id, cover, name, tagname, 
                catagory, description, size, gender, quantity, price, 
                tags, orders.created_at, orders.updated_at FROM products
                JOIN orders ON orders.product_id = products._id ORDER BY orders.created_at`
            );
            return res.send({ data: rows });
        } catch (error) {
            next(error);
        }
    })
    .post(async (req, res, next) => {
        const { _id } = req.body;
        try {
            const { rows } = await db.query(
                `
            SELECT cover, name, tagname, price
            FROM products 
            WHERE _id = $1 
            `,
                [_id]
            );
            if (rows.length) {
                const values = Object.values(req.body);

                const query = `
                INSERT INTO orders(
                    product_id,
                    size,
                    quantity
                ) VALUES(
                    ${values.map((_, id) => `$${id + 1}`)}
                )
                RETURNING *
            `;
                try {
                    const res = await db.query(query, values);

                    console.log(res);

                    return res.send({ message: 'OK' });
                } catch (error) {
                    next(error);
                }
            }
        } catch (error) {
            next(error);
        }
    });

export default router;
