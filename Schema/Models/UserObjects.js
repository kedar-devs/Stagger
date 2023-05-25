const graphql=require('graphql')
const { GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLFloat,GraphQLList,GraphQLInt}=graphql
const Rating=require('./../../Models/User/Rating.model')
const {RatingType}=require('./RatingObject')
exports.UserType=new GraphQLObjectType({
    name:"User",
    fields:()=>({
        id:{type:GraphQLString},
        Name:{type:GraphQLString},
        Email:{type:GraphQLString},
        ProfilePic:{type:GraphQLString},
        accessToken:{type:GraphQLString}, 
        Rating:{
            type:new GraphQLList(RatingType),
            resolve(parents,args){
                return Rating.findOne({RatedTo:parents.Rating})
            }
        }
    })
})