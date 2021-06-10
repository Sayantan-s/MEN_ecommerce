import express from 'express'

const router = express.Router();

router
.route('/products')
.get(async(req, res, next) => {

})
.post(async(req, res, next) => {
    console.log(req.body);
})

export default router;