const databas=require('../util/database')
class ApplyToTheDatabase{
    
    async Getproduct(){
       const query="SELECT * FROM products "
       const [products] = await databas.connection.execute(query)
       return products
}
}
    module.exports=new ApplyToTheDatabase()