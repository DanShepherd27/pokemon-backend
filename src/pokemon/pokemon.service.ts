import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  async getOne(name: string) {
    // dummy data for demonstration purposes
    return Promise.resolve({
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      name,
      weight: 1,
      height: 1,
      notHiddenAbilities: [],
    });
  }
  async getMany(type?: string): Promise<string[]> {
    // Simulating a database call or external API call
    const allPokemon = [
      'Pikachu',
      'Charmander',
      'Bulbasaur',
      'Squirtle',
      'Jigglypuff',
      'Meowth',
      'Eevee',
      'Snorlax',
    ];

    if (type) {
      // Filter by type if provided
      return allPokemon.filter((pokemon) =>
        pokemon.toLowerCase().includes(type.toLowerCase()),
      );
    }

    // Return all Pokemon if no type is specified
    return Promise.resolve(allPokemon);
  }

  async catchPokemon(name: string): Promise<string> {
    // Register the catch of a Pokemon for the user (get user from session token)
    // Simulate catching a Pokemon
    return Promise.resolve(`You caught a ${name}!`);
  }

  async releasePokemon(name: string): Promise<string> {
    // Register the release of a Pokemon for the user (get user from session token)
    // Simulate releasing a Pokemon
    return Promise.resolve(`You released a ${name}!`);
  }
}
