import PokemonService from '@/services/Pokemon';

interface PokelistProps {
  pokelist: any;
};


export default function Pokelist({ pokelist }: PokelistProps) {
  return (
    <>
      {/* HERE MUST BE POKE LIST COMPONENT */}
    </>
  )
}

export async function getStaticProps(context: any) {
  console.log('Context ', context);

  const initialPokeList = await PokemonService.getPokemonList({
    limit: 100,
    offset: 0,
  });

  return {
    props: {
      pokelist: initialPokeList
    }, 
  }
}