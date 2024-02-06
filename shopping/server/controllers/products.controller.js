const applyToTheDatabase=require('../model/products.model')
exports.getproduct=async (req,res)=>{
    const result = await applyToTheDatabase.Getproduct()
    console.log(result);
    res.json(result)
}
exports.insertproduct=async (req,res)=>{
    const result = await applyToTheDatabase.Insertproduct(req.body)
    if (result) res.json("Success")
    else res.json("Failed")
}
exports.updateproduct=async (req,res)=>{
    const result = await applyToTheDatabase.Updateproduct(req.body)
    if (result) res.json("Success")
    else res.json("Failed")
    }