const applyToTheDatabase=require('../model/app.model')
exports.insertdata=async (req,res)=>{
    const result = await applyToTheDatabase.insert(req.body)
    if (result) res.json("Success")
    else res.json("Failed")
    }
    exports.checkdata=async (req,res)=>{
        const result = await applyToTheDatabase. Checkdata(req.body)
        if (result=="PasswordIsWrong") res.json("PasswordIsWrong")
        else if(result=="NotAccount") res.json("NotAccount");
        else if(result) res.json(result);
        }
