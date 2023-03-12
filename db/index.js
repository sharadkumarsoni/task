const  Mongoose  = require( "mongoose");

const Connection = async ()=>{
    try {
        await Mongoose.connect(`mongodb+srv://sharad:1234@test-cluster1.lbmdids.mongodb.net/test`);
        console.log("connection Success");
    } catch (error) {
        console.log({"DBconection Error": error});
    }
}
module.exports = Connection;
