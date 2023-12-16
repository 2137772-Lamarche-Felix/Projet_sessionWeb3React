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
import { FormattedMessage, IntlProvider } from 'react-intl'
import Francais from './lang/fr.json';
import Anglais from './lang/en.json';
import { Button } from '@mui/material'
import Login from './Routes/login.route'
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './firebase'






function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [musiques, setMusiques] = useState<IMusiqueDetailsProps[]>();

  const [locale, setLocale] = useState('fr');
  const [messages, setMessages] = useState(Francais);
  const [langue, setLangue] = useState('English');
  function AppelApi() {
    axios.get('https://api-musik.netlify.app/musiques').then((response) => {
      setMusiques(response.data.musiqueAll)
    })
  }

  useEffect(() => {
    
    if(isLoaded == false) {
      AppelApi()
      setIsLoaded(true)
    }

  }, [])

  function ChangerLangue() {
    if (locale == 'fr') {
      setLocale('en')
      setMessages(Anglais)
      setLangue('Français')
      
    }
    else {
      setLocale('fr')
      setMessages(Francais)
      setLangue('English')
      
    }
  }
  
  function Deconnexion() {
      auth.signOut();
    }
  
  return (

    <>
    <IntlProvider locale={locale} messages={messages}>
      <div>
        <FormattedMessage id="titre.musique.site">{txt => <h1>{txt}</h1>}</FormattedMessage>
        <Button onClick={ChangerLangue}>{langue}</Button>
        <LogoutIcon onClick={Deconnexion}/>
      </div>

      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagePrincipalRoute />}>
            <Route path="detail/:id" element={<MusiqueDetail  />} /> 
            <Route path="modifier/:id" element={<PageMiseAJour />} /> 
            <Route path="ajout" element={<PageAjout />} />
            <Route path="listeMusique" element={<MusiqueGrid tabMusiques={musiques || []} />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
      </IntlProvider>
    </>
  )
}

export default App
