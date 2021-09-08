const { PrismaClient } = require('@prisma/client');
const router = require('express').Router();
const AuthUtils = require('../helpers/auth_helper');
const CustomError = require('../helpers/custom_error_handler');
const client = require("../helpers/init_redis");
const { users } = new PrismaClient();  

router.get('/csrf', (req, res) => {
    return res.json({ csrf: req.csrfToken() });
});

router.get('/refresh', async (req, res, next) => {

    let payload;

    try {
        const { ["x-refresh"]: token } = req.cookies;

        if (!token) return next(CustomError.newError(401, 'You are not authorized!'));

        client.GET(token, async(err, _id) => {
            if(err) return next(CustomError.newError(401, 'You are not authorized!'));

            payload = await client.get(_id);

            if(!payload){

                console.log("GET PAYLOAD FROM DB")

                const { id , username } = await users.findUnique({
                    where : { id : _id }
                })

                payload = { id, username, role : 'user' }    

                client.set(id, JSON.stringify(payload))
            }
            
            const accessToken = await AuthUtils.generate_JWT({ 
                payload : typeof(payload) === "string" ?
                JSON.parse(payload)
                : payload
            });

            res.header('x-access-token', accessToken);

            res.status(200).send({ message : "Acesstokens are refreshed!"});

        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
