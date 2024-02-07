const databas=require('../util/database')
class ApplyToTheDatabase{  
async Insertcart(data,id){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id);
        const queri="insert into cart (iduser,idproduct,name,category,img,price)  values (?,?,?,?,?,?)"
        await databas.connection.execute(queri, [id,data[i].id,data[i].name,data[i].category,data[i].img,data[i].price]);
    }
    let {imgurl,name,category,price}=data
    console.log("id",id);
}
async Getcartnotconfirmed(){
    const query="SELECT * FROM cart where status=0 "
    const [products] = await databas.connection.execute(query)
    return products
}
async Updatecart(data){

    for (let i = 0; i < data.length; i++) {
        const query="UPDATE cart SET status=1 where id=? ;"
        await databas.connection.execute(query ,[data[i].id] );
        
    }

   }
}
    module.exports=new ApplyToTheDatabase()