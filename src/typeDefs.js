import { gql } from 'apollo-server-express';

export const typeDefs = gql`

type Nutrition{
      protein:String!
      Carbohydrates:String!
      fiber:String!
      fat:String!
      Vitamin_A:String!
      Vitamin_C:String!
      Iron:String!
      Calcium:String!
      Calories:String!
  }
  type Meal{
      id:ID!
      name:String!
      components:[String!]!
      nutrition:[Nutrition!]!
      img:String!
      description:String!
      total:String!
      type:String!
      Calories:String!
      
  }

  input NutritionInput{
     protein:String!
      Carbohydrates:String!
      fiber:String!
      fat:String!
      Vitamin_A:String!
      Vitamin_C:String
      Iron:String!
      Calcium:String!
      Calories:String!
  }
  
 type Query{
    meals:[Meal]!
 }
 type Mutation{
     NewMeal(name:String!,type:String!,components:[String!],nutrition:[NutritionInput],img:String,description:String,total:String,Calories:String):Meal
     MakeSpeacialMeals(Calories:Int!,totalMeals:Int!,totalDays:Int!):Meal
 }

`;