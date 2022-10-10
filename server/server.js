import express from 'express';
import bodyParser from "body-parser";
import cors from  "cors";
import dotenv from "dotenv";
import fs from "fs";

import TestData from "./TestData.json"


const app = express();
dotenv.config()


app.use(bodyParser.json({limit:`30mb`,extended:true}));
app.use(bodyParser.urlencoded({limit:`30mb`,extended:true}));

app.use(cors());

app.get(`/`, async(req,res)=>{
    try {
        //Send The Json Data
        res.status(200).json(TestData)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})


const PORT = process.env.PORT || 6030;
app.listen(PORT,()=>{console.log(`Server Runs On Port : ${PORT}`)})

