import express from 'express';

const router  = express.Router();

router.get('/csrf', (req,res) => {
    return res.json({  csrf :  req.csrfToken() });
})

export default router;