const graphql=require('graphql')
const { GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLFloat,GraphQLList,GraphQLInt}=graphql
exports.SocialMediaType=new GraphQLObjectType({
    name:"Social",
    fields:()=>({
        id:{type:GraphQLString},
        SocialName:{type:GraphQLString},
        SocialLink:{type:GraphQLString}
    })
})
