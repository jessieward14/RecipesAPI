import { Module } from "@nestjs/common";
import{MongooseModule} from '@nestjs/mongoose';

import { RecipesController } from "./recipes.controller";
import { RecipesService } from "./recipes.service";
import { RecipesSchema } from "./recipes.model";




@Module({
    imports:[
        MongooseModule.forFeature([{name:'Recipes', schema: RecipesSchema}])
],
    controllers: [RecipesController],
    providers: [RecipesService],
})
export class RecipesModule {
}