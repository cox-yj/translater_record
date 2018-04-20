var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const obj = req.query
  if (obj.EN) {
    console.log('obj.EN==>', obj.EN)
  } else if (obj.CH) {
    console.log('obj.CH==>', obj.CH)
  } else {
    res.status(500).json({ msg: '输入参数有误！', code: 500, data: {} });
  }
});

router.post('/', function (req, res) {
  res.json({ a: 1 });
});

module.exports = router;