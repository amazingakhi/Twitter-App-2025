import express from 'express';

const router = express.Router(); //Cfreate a new router object
router.get('/' , (req, res) => {
    return res.render({
        message: 'Welcome to the commment route'
    });
});

router.get('/:id', (req, res) => {
    return res.render({
        message: 'Welcome to the comment route',
        id: req.params.id
    });
});

export default router; // export the router object