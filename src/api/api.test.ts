import fetchMock from 'jest-fetch-mock';
import { getPokemonDetailsByUrl, getPokemons } from './api';

describe('test api', function () {
  describe('getPokemons', () => {
    beforeAll(() => {
      fetchMock.enableMocks();
    });

    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it('fetches a list of Pokemon', async () => {
      const mockData = {
        next: 'mock-next-url',
        results: [
          { name: 'pokemon1', url: 'pokemon1-url' },
          { name: 'pokemon2', url: 'pokemon2-url' },
        ],
      };

      fetchMock.mockResponseOnce(JSON.stringify(mockData));

      const { nextUrl, pokemonList } = await getPokemons(null);

      expect(nextUrl).toBe('mock-next-url');
      expect(pokemonList).toEqual([
        { name: 'pokemon1', url: 'pokemon1-url' },
        { name: 'pokemon2', url: 'pokemon2-url' },
      ]);

      expect(fetchMock).toHaveBeenCalledWith(expect.any(String));
    });

    it('handles errors', async () => {
      fetchMock.mockReject(new Error('Fetch error'));

      await expect(getPokemons(null)).rejects.toThrow('Fetch error');
    });
  });

  describe('getPokemonDetailsByUrl', () => {
    beforeAll(() => {
      fetchMock.enableMocks();
    });

    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it('fetches Pokemon details by URL', async () => {
      const mockData = { name: 'Pikachu', height: 40, weight: 6 };

      fetchMock.mockResponseOnce(JSON.stringify(mockData));

      const details = await getPokemonDetailsByUrl('mock-pokemon-url');

      expect(details).toEqual(mockData);
      expect(fetchMock).toHaveBeenCalledWith('mock-pokemon-url');
    });

    it('handles errors', async () => {
      fetchMock.mockReject(new Error('Fetch error'));

      await expect(getPokemonDetailsByUrl('mock-pokemon-url')).rejects.toThrow(
        'Fetch error',
      );
    });
  });
});
