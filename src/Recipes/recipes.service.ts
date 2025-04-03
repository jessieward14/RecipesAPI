import { Injectable, NotFoundException } from '@nestjs/common';
import { Recipes } from './recipes.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ignoreElements } from 'rxjs';

export class RecipesService {

    constructor(
        @InjectModel('Recipes') private readonly recipesModel: Model<Recipes>
    ) { }


    async insertRecipe(Name: string, Ingredients: string, TotalCookTime: number, Instructions: string) {
        const newRecipe = new this.recipesModel({
            Name,
            Ingredients,
            TotalCookTime,
            Instructions,
        });
        const result = await newRecipe.save();
        return result.id as string;
    }

    async getRecipes() {
        const recipes = await this.recipesModel.find().exec();
        return recipes.map(prod => ({
            id: prod.id,
            name: prod.Name,
            ingredients: prod.Ingredients,
            totalcooktime: prod.TotalCookTime,
            instructions: prod.Instructions,
        }));
    }

    async getSingleRecipe(recipesId: string) {
        const recipes = await(await this.findRecipes(recipesId));
        return {
            id: recipes.id,
            name: recipes.Name,
            Ingredients: recipes.Ingredients,
            TotalCookTime: recipes.TotalCookTime,
            Instructions: recipes.Instructions,
        };
    }

    async updateRecipes(
        recipesId: string,
        name: string,
        ingredients: string,
        totalcooktime: number,
        instructions: string,
    ) {
        const updatedRecipes = (await this.findRecipes(recipesId));
        if (name) {
            updatedRecipes.Name = name;
        }
        if (ingredients) {
            updatedRecipes.Ingredients = ingredients;
        }
        if (totalcooktime) {
            updatedRecipes.TotalCookTime = totalcooktime;
        }
        if (instructions) {
            updatedRecipes.Instructions = instructions;
        }
        updatedRecipes.save();
    }

    async deleteRecipe(prodId: string) {
        const result = await this.recipesModel.deleteOne({ _id: prodId }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Could not find product');
        }
    }

    private async findRecipes(id: string): Promise<Recipes> {
        let recipes;
        try {
            recipes = await this.recipesModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find product');
        }

        if (!recipes) {
            throw new NotFoundException('Could not find product');
        }
        return recipes;

    }


}