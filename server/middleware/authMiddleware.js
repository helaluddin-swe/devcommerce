const jwt=require('jsonwebtoken')
const adminAuth=async(req,res,next)=>{
 try {
  const {token}=req.headers
 if(!token){
  return res.json({success:false,message:"Not authorized try again "})
 }
 const decode_token= jwt.verify(token,process.env.JWT_SECRET_KEY)
 if(decode_token!== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
   return res.json({success:false,message:"Not authorized try again "})
 }
 else{
  res.json({success:true,message:"hello admin "})
 }
  
 } catch (error) {
  console.log(error)
  res.json({success:false,message:error.message})
 }


}
module.exports=adminAuth