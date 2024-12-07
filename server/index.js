const express = require("express")
const App = express()
let PORT = 8000
const mongoose = require('mongoose')
const postModel = require("./model/postModel")
const cors = require("cors")

App.use(cors())
App.use(express.json())

const db = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Demo");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database", error);
    }
}

db()

App.get("/get", async(req,res)=>{
    try {
        let searchTerm = req.query.searchTerm
        let data;
        if(searchTerm == ''){
            data = await postModel.find()
        } else{
            data = [await postModel.findOne({ name: searchTerm })];
        }
        res.json(data)
    } catch (error) {
        console.log(error);
    }
})

App.post("/post", async(req,res)=>{
    try {
       let data = await postModel(req.body)
       let dataIns = await data.save()
       res.json(dataIns)
    } catch (error) {
        console.log(error);
    }
})

App.put("/put", async(req,res)=>{
    let play_link = req.body
    let updateData = await postModel.findOneAndReplace({Heading:"prem"}, {play_link: play_link.play_link}, {new:true})
    res.json(updateData)
})

App.patch("/patch",async(req,res)=>{
    let play_link = req.body
    let updateData = await postModel.findOneAndUpdate({Heading:"prem"}, {play_link: play_link.play_link}, {new:true})
    res.json(updateData)
})

App.delete("/delete",async(req,res)=>{
    let updateData = await postModel.findOneAndDelete({Heading:"kjsdfks"})
    res.json(updateData)
})

App.listen(PORT,()=>{
    console.log(`server started on port - ${PORT}`);
})