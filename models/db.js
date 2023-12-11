const mongoose= require('mongoose');
mongoose.
connect('mongodb+srv://mddaniyalaman8084:Yw9tXvCDbgUYh5P3@cluster0.j2x0fs7.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("db connected"))
.catch(()=>console.log("error"));
