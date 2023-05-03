const graphql=require('graphql')
const { GraphQLSchema,GraphQLObjectType,GraphQLString,}=graphql
const User=require('./../Models/User/User.model')
const UserType=new GraphQLObjectType({
    name:"User",
    fields:()=>({
        id:{type:GraphQLString},
        Name:{type:GraphQLString},
        Email:{type:GraphQLString},
        ProfilePic:{type:GraphQLString},  
    })
})
const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
        type:UserType,
        args:{id:{type:GraphQLString}},
        resolve(parents,args){
           return User.findOne({_id:id}) 
        }
        }
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery
})