const databas=require('../util/database')
class ApplyToTheDatabase{  
    async Getproduct(){
       const query="SELECT * FROM products "
       const [products] = await databas.connection.execute(query)
       return products
}

async Insertproduct(data){
    let {imgurl,name,category,price}=data
    console.log(imgurl, name,category,price);
   const queri="insert into products (img,name,category,price)  values (?,?,?,?)"
    try {
     await databas.connection.execute(queri, [imgurl,name,category,price]);
        return true
    } catch (error) {
        return false
    }
}
async Updateproduct(data){
    let { id,imgurl,name,category,price} = data
      const queryitem="SELECT * FROM products WHERE id=? "
       await databas.connection.execute(queryitem ,[id]);
      const query="UPDATE products SET  img=?,name=?,category=?,price=?  where id=?;"
      await databas.connection.execute(query ,[imgurl,name,category,price,id]);
   }
}
    module.exports=new ApplyToTheDatabase()