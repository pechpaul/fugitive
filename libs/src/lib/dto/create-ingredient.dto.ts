import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  @ApiProperty({ example: 'Sugar', description: 'Name of the ingredient' })
  name!: string;
}
