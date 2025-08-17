import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getMany(type?: string): Promise<string[]> {
    return await this.pokemonService.getMany(type);
  }

  @Get('one')
  async getOne(@Query('name') name: string) {
    return await this.pokemonService.getOne(name);
  }

  //@AuthGuard()
  @Post('/catch')
  async catchPokemon(@Body('name') name: string): Promise<string> {
    return await this.pokemonService.catchPokemon(name);
  }

  //@AuthGuard()
  @Post('/release')
  async releasePokemon(@Body('name') name: string): Promise<string> {
    return await this.pokemonService.releasePokemon(name);
  }
}
