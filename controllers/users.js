import { v4 as uuidv4 } from 'uuid';

// Our controller: this is where all our modular functions for the router live - each function/ method represents a crud operation related to our app

let users = []

// Get all users
export const getUsers = (req, res) => {
    console.log(users)
    res.send(users);
}

// Create a new user
export const createUser = (req, res) => {
    console.log('POST ROUTE REACHED');
    const user = req.body;

    // adding a new id key with the value being generated from uuid
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
}

// find a specific user
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser)
    console.log(foundUser)
}

// Delete a user
export const deleteUser = (req, res) => {
    const { id } = req.params;


    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted`)
}

// Update/ Edit a user
export const updateUser = (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;
    }

 res.send(`User with the id ${id} has been updated`)


}