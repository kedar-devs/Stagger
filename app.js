const express=require('express')
const cors=require('cors')
const Schema=require('./Schema/Schema')
const {createHandler}=require('graphql-http')
const app=express()

app.use('/graphql',createHandler({
    schema:Schema,
    graphiql:true

}))
app.use(cors())
app.use(express.json())
module.exports=app
