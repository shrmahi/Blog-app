import mongoose from "mongoose";


export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://webdeveloper:Vision8888@cluster0.zpsjckr.mongodb.net/blog-app');
    console.log("DB Connected");
}