import express from 'express';

import {getLists, addList} from '../controllers/lists.js'


/*
    The routes sets the routes to access/edit data
    This router (for lists) allows different operations via CRUD command and proper url
    Uses methods from the controller in order to execute operations on the database
*/
const router = express.Router();

router.get('/', getLists);

router.post('/', addList);

export default router;