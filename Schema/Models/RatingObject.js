const graphql=require('graphql')
const { GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLFloat,GraphQLList,GraphQLInt}=graphql
exports.RatingType=new GraphQLObjectType({
    name:"Rating",
    fields:()=>({
        id:{type:GraphQLString},
        Comment:{type:GraphQLString},
        RatedBy:{type:GraphQLString},
        RatedTo:{type:GraphQLString},
        Rating:{type:GraphQLFloat}, 
    })
})