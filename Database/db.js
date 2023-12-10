import mongoose from "mongoose";

const Connection = async(username,password) => {

    const URL=`mongodb+srv://${username}:${password}@cluster.swd0asm.mongodb.net/Camperverse?retryWrites=true&w=majority`;
     try{

    await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true})
   
 console.log("Database Sucessfully Connected");

 }catch(error){
    console.log(error.message);
 }
}

export default Connection;