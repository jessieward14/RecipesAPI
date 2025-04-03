import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './Recipes/recipes.module';

@Module({
  imports: [RecipesModule, MongooseModule.forRoot('mongodb+srv://jessicaward25:jessicaward25@cluster0.tp8tb.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
