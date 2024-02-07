const databas=require('../util/database')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const privateKey='private.key'
class ApplyToTheDatabase{
    
    async insert(data){
        let {name,password,tel}=data
        console.log(name,password,tel);
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);
       const queri="insert into users (username,password,Phone)  values (?,?,?)"
        try {
         await databas.connection.execute(queri, [name,hash,tel]);
            return true
        } catch (error) {
            return false
        }
    }
    async Checkdata(data){
        let {tel,password}=data
       const query="SELECT * FROM users WHERE Phone= ? "
       console.log(tel,password);
       const [user] = await databas.connection.execute(query, [tel])
       console.log(user.length);
       if (user.length!=0) {
        const   pkey=bcrypt.compareSync(password, user[0].password);
        if (pkey) {
         var token = jwt.sign( user[0].id , privateKey);
         return token
        } else {
         return "PasswordIsWrong"
   
       }
       
       }

       else{ return "NotAccount"}
      

}
}
module.exports=new ApplyToTheDatabase()