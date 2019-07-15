var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/authenticate', (req, res) => {
  setTimeout(() => {
    console.log(req.body.email);
    let credential = true;
    res.send({credential});
  }, 1000);

})

module.exports = router;