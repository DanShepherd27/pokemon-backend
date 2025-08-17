import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonTypeService {
  async getAll() {
    const response = await axios.get(`${process.env.POKEAPI_URL}/type`);
    const pokemonTypes: string[] = response.data.results.map(
      (x: { name: string; url: string }) => x.name,
    );
    return pokemonTypes;
  }
}
