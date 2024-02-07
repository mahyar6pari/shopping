const applyToTheDatabase=require('../model/admin.model')
exports.checkadmin=async (req,res)=>{
    const result = applyToTheDatabase.Checkadmin(req.body)
    if (result) res.json("Success")
    else res.json("notacount")
    }