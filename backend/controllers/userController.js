// from userModel
const User = require('../models/userModel')

const getAllUsers = async(req, res) => {
    // res.send('All Users Found!');

    // DB QUERY FOR GETTING ALL DOCUMENT
    const users =await User.find();
    res.json(users);
};

const addUser = async(req, res)=> {
    // console.log(req.body);

    const {name, email, contact, post, isMarried, age} = req.body

    if(!name || !email, !contact, !post, !isMarried, !age){
        res.json({error : 'Please fill all details'})
    }


    // User Add in DB : Create single document
    const user = await User.create({
        name,
        email,
        age,
        contact,
        post,
        isMarried
    });


    // Not a User
    if(!user){
        res.json({
            error : "Error in Creating User"
        });
    }

    res.json(user);
    // res.send('User Created!')

};

const getUser = async(req, res) => {
    // res.send('Single User Found!')
    
    // DB QUERY FOR GETTING SINGLE DOCUMENT BY ID
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(404);
        res.json({
            msg : 'User Not Found'
        })
    }
    res.json(user)
};

const removeUser = async(req, res) => {
    const removeUser = await User.findByIdAndDelete(req.params.id)

    res.json({
        msg : 'User Removed!'
    })

    // res.send('User Removed')
}

const updateUser = async(req, res) => {

    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.json(updateUser);
    // res.send('Single User Updated!')
}

module.exports = {getAllUsers, addUser, getUser, removeUser, updateUser}