import express from 'express';
import { createUser, getUser, deleteUser, updateUser, getUsers } from '../controllers/users.js';

const router  = express.Router();

// all routes in here are starting with /users:

// --> /users
router.get('/', getUsers)

// sending data from the front end to the server to create a new user and adding it to a mock database/ endpoint

// --> /users
router.post('/', createUser)

// Get a single user
// --> /users/:id
router.get('/:id', getUser)

// --> /users/:id
// Delete a single user
router.delete('/:id', deleteUser)

// Update a single user
// --> /users/:id
router.patch('/:id', updateUser)

export default router;



