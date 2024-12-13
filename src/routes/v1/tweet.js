import express from 'express';

import {createTweet, getTweetById, getTweets} from '../../controllers/tweetController.js';

import {validate} from '../../validators/zodValidator.js';

import { tweetZodSchema} from '../../validators/tweetZodSchema.js';


const router = express.Router(); //Cfreate a new router object
router.get('/', getTweets);

router.get('/:id', getTweetById);

router.post('/', createTweet, validate(tweetZodSchema));
export default router; // export the router object