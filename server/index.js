const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://kanishka:aN3emSwVi0ntgOJh@cluster0.nxmxgqm.mongodb.net/kanishkacrud1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//displaying users-backend code
app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) =>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});


app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//update
app.put('/updateUser/:id' , (req, res) =>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//delete
app.delete('/deleteUser/:id' , (req, res) =>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log("Server is running on port 3001");
});
