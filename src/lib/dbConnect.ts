import mongoose from "mongoose";

// type for the connection object
type connectionDb = {
    isConnect?:number
}

//This object will store the database connection state (isConnect).
const connection:connectionDb = {};

async function dbConnect() : Promise<void> {
    if(connection.isConnect) {
        console.log("already connected");
        return;
    }
    try {
       const db = await mongoose.connect(process.env.MONGODB_URI || "")
       connection.isConnect = db.connections[0].readyState;
       console.log("db connected successfully");
       
    } catch (error) {
        console.log("database connection failed", error);
        
        process.exit(1);
    }
}

export default dbConnect;