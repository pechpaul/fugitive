import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from '@fugitive/interfaces';
import { UpdateIngredientDto } from '@fugitive/interfaces';

@Injectable()
export class IngredientsService {
  create(createIngredientDto: CreateIngredientDto) {
    return 'This action adds a new ingredient';
  }

  findAll() {
    return `This action returns all ingredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
