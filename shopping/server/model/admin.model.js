class ApplyToTheDatabase{   
     Checkadmin(data){
        let {adminname,adminpassword}=data
        console.log(adminname,adminpassword);
        let username="admin"
        let password="admin"
        if (adminname==username && adminpassword==password) {
            return true
        }
       return false
}
}
    module.exports=new ApplyToTheDatabase()