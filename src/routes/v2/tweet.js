import express from 'express';

const router = express.Router(); //Cfreate a new router object
router.get('/' , (req, res) => {
    return res.render({
        message: 'Welcome to the tweet route v2'
    });
});

router.get('/:id', (req, res) => {
    return res.render({
        message: 'Welcome to the tweet route v2',
        id: req.params.id
    });
});

export default router; // export the router object