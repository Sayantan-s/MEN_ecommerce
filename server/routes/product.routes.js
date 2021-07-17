import express from 'express';
import CustomError from '../helpers/custom_error_handler';
import { db } from '../helpers/init_postgres';
import { prisma, PrismaClient } from '@prisma/client'
import isAuth from '../middlewares/isAuth';

const router = express.Router();

const { products, cart } = new PrismaClient();

router
    .route('/products')
    .get(async (req, res, next) => {

        const data = await products.findMany();
        
        res.status(200).send({ data });
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
        console.log(req.query)
        const { user_id } = req.query;
        try {

            const data = await cart.findMany({
                where : { user_id }
            })

            res.send(data);
            
        } catch (error) {
            next(CustomError.newError(400, 'Something went wrong!'))
        }
    })
    .post(async (req, res, next) => {
        console.log(req.body);
        try {
            const { user_id, product_id, quantity,size } = req.body;

            const getCart = await cart.findMany({
                where : { user_id }
            })
            
            console.log(getCart);

            if(!getCart.length){
                const addedProduct = await cart.create({
                    data : req.body
                })
    
                return res.status(201).send({ addedProduct, message : `Added ${addedProduct.id} to cart` });
            }

            const findProduct = getCart.find(product => (
                product.user_id === user_id && product.product_id === product_id &&  product.size === size 
            ))

            if(!!findProduct){
                const updateProduct = await cart.update({
                    where : { id: findProduct.id },
                    data : {
                        quantity : {
                            increment : quantity
                        }
                    }
                })

                return res.status(204).send({ updateProduct,  message : `Added ${quantity} more of ${updateProduct.product_id}`});
            }

            const addedProduct = await cart.create({
                data : req.body
            })

            res.status(201).send({ addedProduct, message : `Added ${addedProduct.id} to cart` });
        }
        catch(err){
            console.log(err)
        }
    });

router.route('/products/:id').get(async (req, res, next) => {

    const { id } = req.params;

    const [name, tagname] = id.split('_');

    const data = await products.findFirst({
        where : { name, tagname },
        select : {
            name:true, tagname:true, price:true, cover:true, otherimages:true, gender:true, description:true, catagory:true, id:true
        }
    })

    if (!data) {
        return next(CustomError.alreadyExists('Product is not present'));
    }

    res.status(200).send({ data });
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
