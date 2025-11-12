import mongoose from "mongoose";

const connectToDatabase = async () => {

    try {
        mongoose.set("strictQuery", false); 
        const conn =  await mongoose.connect(process.env.MONGO_URI, {
           // useUnifiedTopology: true,
          // useNewUrlParser: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err){
        console.log(`MongoDB Error: ${err.message} `);
    }
};

export default connectToDatabase;
 