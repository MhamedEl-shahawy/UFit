import { Meals,SpeacialMeals } from "./models/meals";

export const resolvers = {
    Query: {
        meals: () => Meals.find()

    },
    Mutation: {
        NewMeal: async(_, {name,type,components,nutrition,img,description,total,Calories}) => {
            const meal = new Meals({name,type,components,nutrition,img,description,total,Calories});
            await meal.save();
            return meal;
        },
       MakeSpeacialMeals:async(_,{Calories,totalMeals,totalDays})=>{
            const caloryMeals =  `${(Calories/totalMeals)}kcal`;
           const speacialmeals =  Meals.find( { Calories: { $eq: "309kcal" } } );


           
            const meal = new SpeacialMeals({Calories:speacialmeals.Calories});
            await meal.save();
            return meal;
       }

    }
}

