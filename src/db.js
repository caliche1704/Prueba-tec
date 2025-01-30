import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://localhost/Cluster0')
        console.log('Conect DB');
    } catch (error) {
        console.error(error);
    }
    
}