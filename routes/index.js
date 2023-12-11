var express = require('express');
var router = express.Router();
var database=require("../models/schema");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/sendme', function(req, res, next) {
  res.render('sendme');
});
// router.post('/sendme',async function(req, res, next) {
//   await database.create(req.body)
//   try {
//   res.send('sendme');
//   } catch (error) {
//    res.send(error)
//   }

// // //  book.push(req.body);
// // //  res.redirect("/show");
// });
router.post("/sendme", async function (req, res, next) {
  console.log(req.body)
  try {
    const newMsg =   await database.create(
          { Name: req.body.Name, 
            email_id: req.body.email_id,
            subject:req.body.subject,
            message:req.body.message
           },
              
      );

      res.send(newMsg);
  } catch (error) {
      console.log(error);
      res.send(error);
  }
});
module.exports = router;
