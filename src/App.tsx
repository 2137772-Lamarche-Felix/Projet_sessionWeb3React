import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { IMusiqueDetailsProps } from './Components/MusiqueDetail'
import MusiqueDetail from './Components/MusiqueDetail'
import { PagePrincipalRoute } from './Routes/PagePrincipal.route'
import PageAjout from './Components/PageAjout'






import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MusiqueGrid from './Components/MusiqueGrid'
import PageMiseAJour from './Components/PageMiseAJour'



function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [musiques, setMusiques] = useState<IMusiqueDetailsProps[]>();

  // useEffect(() => {
  //   setMusiques([initialMusique]);
  // }
  // , []);
  function AppelApi() {
    axios.get('https://main--fantastic-sherbet-ad5c6e.netlify.app/musiques').then((response) => {
      setMusiques(response.data.musiqueAll)
    })
  }

  useEffect(() => {
    
    if(isLoaded == false) {
      AppelApi()
      setIsLoaded(true)
    }

  }, [])

  
  

  
  return (

    <>
      <div>
        <h1>Ma musique</h1>
        {/* {musiques.map((lettre,index)=>{
          return(
            <MusiqueDetail id={index} titre={musiques[index].titre} artiste={musiques[index].artiste} album={musiques[index].album} genre={musiques[index].genre} dateDeSortie={musiques[index].dateDeSortie} duree={musiques[index].duree} paroles={musiques[index].paroles} compositeur={musiques[index].compositeur} producteur={musiques[index].producteur} enCollaboration={musiques[index].enCollaboration} artistesEnCollaboration={musiques[index].artistesEnCollaboration} nombreDecoute={musiques[index].nombreDecoute} evaluations={musiques[index].evaluations} commentaires={musiques[index].commentaires} imageDeCouverture={musiques[index].imageDeCouverture} fichierAudio={musiques[index].fichierAudio} source={musiques[index].source} estFavoris={musiques[index].estFavoris}/> 
          )
      })} */}
      {/* <MusiqueDetail id={musique.id} titre={musique.titre} artiste={musique.artiste} album={musique.album} genre={musique.genre} dateDeSortie={musique.dateDeSortie} duree={musique.duree} paroles={musique.paroles} compositeur={musique.compositeur} producteur={musique.producteur} enCollaboration={musique.enCollaboration} artistesEnCollaboration={musique.artistesEnCollaboration} nombreDecoute={musique.nombreDecoute} evaluations={musique.evaluations} commentaires={musique.commentaires} imageDeCouverture={musique.imageDeCouverture} fichierAudio={musique.fichierAudio} source={musique.source} estFavoris={musique.estFavoris}/> */}
      {/* Maintenant je ferais le grid pour toute les musiques et bien les afficher  */}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagePrincipalRoute />}>
            <Route path="detail/:id" element={<MusiqueDetail  />} /> 
            <Route path="modifier/:id" element={<PageMiseAJour />} /> 
            <Route path="ajout" element={<PageAjout />} />
            <Route path="listeMusique" element={<MusiqueGrid tabMusiques={musiques || []} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
