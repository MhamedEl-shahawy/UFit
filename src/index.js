import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql} from "apollo-server-express";
import {resolvers} from "./resolver";
import { typeDefs } from "./typeDefs";


const server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.applyMiddleware({app});

    try{
      await mongoose.connect("mongodb+srv://mohamedshahawy599:aurY39qqZklvMXfK@cluster0.thmer.mongodb.net/UFit?retryWrites=true&w=majority", {useNewUrlParser: true})
    }catch(err){
        console.log(err)
    }


    app.get('/', (req, res) => res.send('hello world'))

    app.listen({port: 4001}, ()=> {
        console.log('🚀 Server ready')
    })

}

server();