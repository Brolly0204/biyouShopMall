const express = require('express')
const app = express();
const router = express.Router();

app.use('/api', router);
app.listen(7000);

// 获取slide图片
const slides = require('./slide')
router.get('/getSlides', (req, res) => {
  res.send(slides)
})

// 获取分类食品
const foods = require('./foods')
router.get('/getFoods', (req, res) => {
  res.json(foods)
})
