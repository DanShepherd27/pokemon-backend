import { Controller, Get } from '@nestjs/common';

@Controller('pokemon-type')
export class PokemonTypeController {
  @Get('/')
  getAll() {
    return ['ground'];
  }
}
