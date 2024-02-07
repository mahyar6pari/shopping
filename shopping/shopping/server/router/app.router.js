const express=require('express')
const router=express.Router()
const {insertdata,checkdata}=require('../controllers/app.controller')
const {getproduct,insertproduct,updateproduct}=require('../controllers/products.controller')
const {checkadmin}=require('../controllers/admin.controller')
const {insertcart,getcartnotconfirmed,updatecart}=require('../controllers/cart.controller')
router.post('/insert',insertdata)
      .post('/checkdata',checkdata)
      .get('/products',getproduct)
      .post('/admin',checkadmin)
      .post('/insertproduct',insertproduct)
      .post('/updateproduct',updateproduct)
      .post('/cart/:id',insertcart)
      .get('/getcartnotconfirmed',getcartnotconfirmed)
      .post('/update',updatecart)
module.exports=router