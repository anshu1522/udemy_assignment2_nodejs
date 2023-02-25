console.log("anshu")
const express = require("express");
const app=express();
 app.use((req, res, next) => {
   console.log('1st Middleware');
   next();
 });
 
app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>All Users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The Middleware </p>');
});


app.listen(9000);
