import User from "../Model/Userschema.js";
import bcrypt from "bcrypt";
import Jwt  from "jsonwebtoken";

const createtoken = async(email) =>{
  const token = await Jwt.sign({email:email},process.env.TOKEN_SECRET_KEY);
  
  const userver = await Jwt.verify(token,process.env.TOKEN_SECRET_KEY);
 console.log(userver);
  return token;
}

export const  Usersignup = async(req,res) => {
    try {
        
      const {
        name,
        email,
        studentId,
        password
      } = req.body;

      const exist = await User.findOne({studentId : studentId});

      if(exist){
        res.status(401).json({message:"User Already Exist"});
      }

      const token = createtoken(email);
       console.log(token);

      const hashedpassword = await bcrypt.hash(password,3);

      await User.insertMany({
        name:name,
        email:email,
        studentId:studentId,
        password:hashedpassword
      });
      res.status(200).json({message:"User added Sucessfully"});

    } catch (error) {
        res.status(500).json({message:error});
        console.log(error);
    }
}

export const UserLogin = async(req,res)=>{
  try {
    const {
      studentId,
      password
    } = req.body;
   
    const exist = await User.findOne({studentId});

 if(exist){

  const comaprision = await bcrypt.compare(password,exist.password);
  
  if(!comaprision){
    res.status(401).json({message:"Invalid Credentials"});
  }

  res.status(200).json({message:"User Logged in Sucessfully"});
}else{
  res.status(401).json({message:"User Doesn't Exist"});
}

  } catch (error) {
    console.log(error);
    res.status(500).json({message:error});
  }
}

export const LoginwithGoogle = async(req,res) => {
  try{
     res.status(200).json({message:"Logined with Google"});
  }catch(error){
    console.log(error);
    res.status(500).json({message:error});
  }
}
