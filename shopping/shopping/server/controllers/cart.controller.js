const applyToTheDatabase=require('../model/cart.model')
exports.insertcart=async (req,res)=>{
    const result = await applyToTheDatabase.Insertcart(req.body,req.params['id'])
    if (result) res.json("Success")
    else res.json("Failed")

}
exports.getcartnotconfirmed=async (req,res)=>{
    const result = await applyToTheDatabase.Getcartnotconfirmed()
    if (result) res.json(result)
    else res.json("Failed")
}

exports.updatecart=async (req,res)=>{
   const result = await applyToTheDatabase.Updatecart(req.body)

}
