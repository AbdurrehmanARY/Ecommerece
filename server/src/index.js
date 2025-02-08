import dotenv from "dotenv"
import { app } from "./app.js";

import connectDb from "./db/index.js";
// config({
//     path: "../serv",
//   });

dotenv.config();

connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port  : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
// app.get('/',(req,res)=>{
//     res.send('hello worlf')
// })

