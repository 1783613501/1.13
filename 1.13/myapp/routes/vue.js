var express = require('express');
var router = express.Router();
const user = require('../sql/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  user.find({},(err,data)=>{
    if(err){
      console.log(err)
    }
    console.log(data)
    res.send(data)
    // res.render('user', {
    //   data:data
    // });
  })
  
});


router.post('/add', function(req, res, next) {
  
  var data = {
    code:200,
    msg:'验证通过，客官里面请'
}

  res.send(data)
  
});
module.exports = router;