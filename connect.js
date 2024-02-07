import mongoose from "mongoose";


let connect=async ()=>
{
    return mongoose.connect(
      "mongodb://webDevMaster:rajTheWebDeveloper@ac-70rgez7-shard-00-00.cqgngsb.mongodb.net:27017,ac-70rgez7-shard-00-01.cqgngsb.mongodb.net:27017,ac-70rgez7-shard-00-02.cqgngsb.mongodb.net:27017/comfurniture?ssl=true&replicaSet=atlas-3w8jnm-shard-0&authSource=admin&retryWrites=true&w=majority"
    ).then(()=>
    {
        console.log("Connected to ATLAS server")
    })
    .catch(()=>
    {
        console.log("Please check the connection again")
    })
}

export default connect