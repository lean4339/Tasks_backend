const { application } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const faker = require("faker");
const tasksRouter = require("./routes/tasksRouter");



app.get("/",(req,res)=>{
    res.send("holis como va?");
});
app.use(express.json());
app.use("/products",tasksRouter);
app.listen(port,()=>{
    console.log(`Corriendo en el puerto ${port}`);
})