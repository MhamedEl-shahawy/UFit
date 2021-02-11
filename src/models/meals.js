import mongoose from "mongoose";
// import nanoid from  'nanoid';

export const Meals = mongoose.model("Meals", {name: String,type:String,Calories:String,total:String,img:String,description:String,nutrition:Object,components:Array})
export const SpeacialMeals = mongoose.model("SpeacialMeals", {name: String,type:String,Calories:String,total:String,img:String,description:String,nutrition:Object,components:Array})
