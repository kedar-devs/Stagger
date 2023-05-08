const graphql=require('graphql')
const { GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLFloat}=graphql
const User=require('./../Models/User/User.model')
const Rating=require('./../Models/User/Rating.model')
const UserType=new GraphQLObjectType({
    name:"User",
    fields:()=>({
        id:{type:GraphQLString},
        Name:{type:GraphQLString},
        Email:{type:GraphQLString},
        ProfilePic:{type:GraphQLString},  
    })
})
const RatingType=new GraphQLObjectType({
    name:"Rating",
    fields:()=>({
        id:{type:GraphQLString},
        Review:{type:GraphQLString},
        RatedBy:{type:GraphQLString},
        RatedTo:{type:GraphQLString},
        Rating:{type:GraphQLFloat}, 
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
        },
        rating:{
            type:RatingType,
            args:{id:{type:GraphQLString}},
            resolve(parents,args){
                return Rating.findOne({_id:id})
            }
        }
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery
})