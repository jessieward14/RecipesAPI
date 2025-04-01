import {Controller, Body, Post} from '@nestjs/common';

@Controller ('recipes')
export class RecipesController{


@Post() // update computer
async addRecipe(
    @Body('Name') prodName: string,
    @Body('Ingredients') prodIng: string,
    @Body('TotalCookTime') prodPrice: number,
    @Body('Instructions') prodInstruct: string,
) 

}