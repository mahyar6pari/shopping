const applyToTheDatabase=require('../model/products.model')
exports.getproduct=async (req,res)=>{
    const result = await applyToTheDatabase.Getproduct()
    console.log(result);
    res.json(result)
    }
