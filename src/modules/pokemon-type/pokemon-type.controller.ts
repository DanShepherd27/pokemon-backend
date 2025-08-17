import { Controller, Get } from '@nestjs/common';
import { PokemonTypeService } from './pokemon-type.service';

@Controller('pokemon-type')
export class PokemonTypeController {
  constructor(private readonly pokemonTypeService: PokemonTypeService) {}

  @Get()
  async getAll() {
    return await this.pokemonTypeService.getAll();
  }
}
