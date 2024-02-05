const express=require('express')
const router=express.Router()
const {insertdata,checkdata}=require('../controllers/app.controller')
const {getproduct}=require('../controllers/products.controller')
router.post('/insert',insertdata)
      .post('/checkdata',checkdata)
      .get('/products',getproduct)
module.exports=router