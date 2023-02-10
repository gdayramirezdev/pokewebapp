interface GetPokemonListParams {
  limit: number;
  offset: number;
}

const api = {
  url: 'https://pokeapi.co/api/v2/',
  getPokemonList: ({ limit, offset }: GetPokemonListParams) => `pokemon?limit=${limit}&offset=${offset}`
}

export default class Pokemon {
  static async getPokemonList( params: GetPokemonListParams ) {
    try {
      const request = api.url + api.getPokemonList({...params});
      const response = await fetch(request);
      const result = await response.json();
      return result;
    } catch (error) {
      console.warn('[getPokemonList]: ', error);
      throw new Error('Can not get poke list');
    }
  }
}