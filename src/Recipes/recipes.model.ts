import * as mongoose from 'mongoose';

export const RecipesSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    Ingrediants: {type: String, required: true},
    TotalCookTime: {type: Number, required: true},
    Instructions: {type: String, required: true},
});

export interface Recipes extends mongoose.Document{
id: string;
Name: string;
Ingredients: string; 
TotalCookTime: number;
Instructions: string;

}