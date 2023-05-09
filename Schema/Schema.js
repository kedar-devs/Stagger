const graphql=require('graphql')
const { GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLFloat,GraphQLList}=graphql
const User=require('./../Models/User/User.model')
const Rating=require('./../Models/User/Rating.model')
const UserType=new GraphQLObjectType({
    name:"User",
    fields:()=>({
        id:{type:GraphQLString},
        Name:{type:GraphQLString},
        Email:{type:GraphQLString},
        ProfilePic:{type:GraphQLString},  
        Rating:{
            type:GraphQLList(RatingType),
            resolve(parents,args){
                return Rating.findOne({RatedTo:parents.Rating})
            }
        }
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
        },
        users:{
            type:GraphQLList(UserType),
            resolve(parents,args){
                return User.find()
            }
        }
    }
})

const Mutation=new GraphQLObjectType({
    name:'mutation',
    fields:{
        addUser:{
            type:UserType,
            args:{
                Name:{type:GraphQLString},
                Email:{type:GraphQLString},
                ProfilePic:{type:GraphQLString}, 

            },
            resolve(parents,args){
                
            }
        }
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})