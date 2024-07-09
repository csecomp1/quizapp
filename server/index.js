const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const router=require("./src/routes/users");
const quizrouter=require("./src/routes/createquiz");
const app=express();
app.use(cors());
app.use(express.json());
app.use("/auth",router);
app.use("/createquiz",quizrouter)




mongoose.connect("mongodb+srv://csecomppooja:csepooja2025@quizz.fhvetmu.mongodb.net/quizz?retryWrites=true&w=majority")

app.listen(3001,()=>{console.log("server started")})
