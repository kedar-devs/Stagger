const express=require('express')
const cors=require('cors')
const Schema=require('./Schema/Schema')
const {graphqlUploadExpress}=require('graphql-upload')
const {graphqlHTTP}= require('express-graphql');
const app=express()
app.use(cors())
app.use(express.json())
app.use('/graphql',graphqlHTTP({
    schema:Schema,
    graphiql:true

}))

module.exports=app
