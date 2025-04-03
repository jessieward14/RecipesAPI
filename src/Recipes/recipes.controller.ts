import {Controller, Body, Post, Get,Param, Patch, Delete} from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller ('recipes')
export class RecipesController{
    constructor(private readonly recipesService: RecipesService) { }


@Post() // update computer
async addRecipe(
    @Body('Name') prodName: string,
    @Body('Ingredients') prodIngredients: string,
    @Body('TotalCookTime') prodTotalCookTime: number,
    @Body('Instructions') prodInstructions: string,
) 

{
        
    const generatedId = await this.recipesService.insertRecipe(
        prodName,
        prodIngredients,
        prodTotalCookTime,
        prodInstructions,
    );
    return { id: generatedId };
}

@Get()
async getAllRecipes() {
    const recipes = await this.recipesService.getRecipes();
    return recipes;
}


@Get(':id')
getproduct(@Param('id') prodId:string,){
    return this.recipesService.getSingleRecipe(prodId);

}

@Patch(':id')
async updateRecipe(
    @Param('id') prodId:string, 
    @Body('Name') prodName:string,
    @Body('Ingredients') prodIngredients:string,
    @Body('TotalCookTime') prodTotalCookTime:number,
    @Body('Instructions') prodInstructions: string,
    
){
    await this.recipesService.updateRecipes(prodId, prodName, prodIngredients, prodTotalCookTime, prodInstructions);
      return null;

}
@Delete(':id')
async removeRecipe(@Param('id') prodId:string, ){
    await this.recipesService.deleteRecipe(prodId);
    return null;
    
}


}