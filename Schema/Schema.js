const graphql=require('graphql')
const { GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLFloat,GraphQLList,GraphQLInt}=graphql
const {AddUser}=require('./../Controller/User.controller')
const {AddAdress}=require('./../Controller/Adress.controller')
const {AddRating}=require('./../Controller/Rating.Controller')
const User=require('./../Models/User/User.model')
const {GraphQLUpload}=require('graphql-upload')
const Rating=require('./../Models/User/Rating.model')
const AddressModal = require('../Models/User/Address.model')
const UserType=new GraphQLObjectType({
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
const AddressType=new GraphQLObjectType({
    name:'Address',
    fields:()=>({
        id:{type:GraphQLString},
        Address:{type:GraphQLString},
        City:{type:GraphQLString},
        State:{type:GraphQLString},
        Coordinates:{type:GraphQLString},
    })
})
const RatingType=new GraphQLObjectType({
    name:"Rating",
    fields:()=>({
        id:{type:GraphQLString},
        Comment:{type:GraphQLString},
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
        address:{
            type:AddressType,
            args:{id:{type:GraphQLString}},
            resolve(parents,args){
                return AddressModal.findOne({_id:id})
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
            type:new GraphQLList(UserType),
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
                Password:{type:GraphQLString},
                PhoneNumber:{type:graphql.GraphQLString},

            },
            resolve(parents,args){
                return AddUser(args)
            }
        },
        addAddress:{
            type:AddressType,
            args:{
                AccessToken:{type:GraphQLString},
                Address:{type:GraphQLString},
                City:{type:GraphQLString},
                State:{type:GraphQLString}
            },
            resolve(parents,args){
                return AddAdress(args)
            }
        },
        addRating:{
            type:RatingType,
            args:{
                RatingTo:{type:GraphQLString},
                RatedBy:{type:GraphQLString},
                Rating:{type:GraphQLFloat},
                Comment:{type:GraphQLString}
            },
           resolve(parents,args){
            return AddRating(args)
           } 
        }
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})