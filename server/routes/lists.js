import express from 'express';

import {getLists, addList, deleteList, addListItem, updateListItem} from '../controllers/lists.js'


/*
    The routes sets the routes to access/edit data
    This router (for lists) allows different operations via CRUD command and proper url
    Uses methods from the controller in order to execute operations on the database
*/
const router = express.Router();

router.get('/', getLists);

router.post('/', addList);

router.delete('/:id', deleteList);

router.patch('/:id', addListItem);

router.patch('/:parentID/:itemID', updateListItem);

export default router;