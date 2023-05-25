const graphql=require('graphql')
const { GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLFloat,GraphQLList,GraphQLInt}=graphql
exports.AddressType=new GraphQLObjectType({
    name:'Address',
    fields:()=>({
        id:{type:GraphQLString},
        Address:{type:GraphQLString},
        City:{type:GraphQLString},
        State:{type:GraphQLString},
        Coordinates:{type:GraphQLString},
    })
})