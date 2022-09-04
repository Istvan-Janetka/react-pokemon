import {useEffect, useState} from 'react'
import axios from 'axios'
import Pokemon from './components/Pokemon'
import Pagination from './components/Pagination'

function App() {

  
  const [pokemon, setPokemon] = useState([]);
  
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon/");


  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();


  
  useEffect(()=> {

    let cancel;

    axios.get(currentUrl, {

      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {

      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setPokemon(res.data.results.map(p => p));
    })

   

    return () => cancel();

  }, [currentUrl])


  const goNextPage = () => {

      setCurrentUrl(nextPage)
  }

  const goPrevPage = () => {

    setCurrentUrl(prevPage)
}



  return (
    <div>
        <Pokemon data={pokemon} />
        <Pagination
          goNextPage={nextPage ? goNextPage : null}
          goPrevPage={prevPage ? goPrevPage : null}
        />
    </div>
  );
}

export default App;
