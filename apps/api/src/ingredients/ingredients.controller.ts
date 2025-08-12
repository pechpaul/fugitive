
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto, UpdateIngredientDto } from '@fugitive/interfaces';

@ApiTags('Ingredients')
@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}


  @Post()
  @ApiOperation({ summary: 'Create a new ingredient' })
  @ApiResponse({ status: 201, description: 'Ingredient created' })
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.create(createIngredientDto);
  }


  @Get()
  @ApiOperation({ summary: 'Get all ingredients' })
  @ApiResponse({ status: 200, description: 'List of ingredients' })
  findAll() {
    return this.ingredientsService.findAll();
  }


  @Get(':id')
  @ApiOperation({ summary: 'Get a single ingredient by id' })
  @ApiResponse({ status: 200, description: 'Ingredient found' })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  findOne(@Param('id') id: string) {
    return this.ingredientsService.findOne(+id);
  }


  @Patch(':id')
  @ApiOperation({ summary: 'Update an ingredient by id' })
  @ApiResponse({ status: 200, description: 'Ingredient updated' })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientsService.update(+id, updateIngredientDto);
  }


  @Delete(':id')
  @ApiOperation({ summary: 'Delete an ingredient by id' })
  @ApiResponse({ status: 200, description: 'Ingredient deleted' })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  remove(@Param('id') id: string) {
    return this.ingredientsService.remove(+id);
  }
}
