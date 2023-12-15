import axios from 'axios';
import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';

export interface IMusiqueDetailsProps {
    _id : string,
    titre : string,
    artiste : {
        nomArtiste: string,
        nom: string,
        prenom: string,
        nombreAnneeCarriere: number;
        dateNaissance: Date,
        origine: string,
        _id: string,
        },
    album : {
        name: string,
        url:string,
        }[],
    genre : string,
    dateDeSortie : Date,
    duree : number,
    paroles : string,
    compositeur : string,
    producteur : string,
    enCollaboration : boolean,
    artistesEnCollaboration : {
      Artiste : {
        nomArtiste?: string,
        nom?:string,
        prenom?:string,
        nombreAnneeCarriere?: number,
        dateNaissance?: Date,
        origine?: string,
        _id?: string,
      }
    }[],
    nombreDecoute : number,
    evaluations : {
        note: number,
        _id: string,
        }[],
    commentaires : string[],
    imageDeCouverture : string,
    fichierAudio : string,
    source : string,
    estFavoris : boolean,
}


function MusiqueDetails(){
  const [musiqueATrouver, setMusiqueATrouver] = React.useState<IMusiqueDetailsProps>();
  let {id} = useParams();
  useEffect(() => {
      axios.get('https://main--fantastic-sherbet-ad5c6e.netlify.app/musiques/'+id).then((response) => {
      setMusiqueATrouver(response.data.musique)
      
      })
  }, [])
  
  return (
    <Stack justifyContent="center" alignItems="center">
      
      <FormattedMessage id="titre.musique">{txt => <h1>{txt} : {musiqueATrouver?.titre}</h1>}</FormattedMessage>
      <div>
      <FormattedMessage id="artiste.musique">{txt => <h2>{txt} : {musiqueATrouver?.artiste.nomArtiste}</h2>}</FormattedMessage>
      <FormattedMessage id="artiste.musique.prenom">{txt => <p><strong>{txt}</strong> : {musiqueATrouver?.artiste.prenom}</p>}</FormattedMessage>
      <FormattedMessage id="artiste.musique.nom">{txt => <p><strong>{txt}</strong> : {musiqueATrouver?.artiste.nom}</p>}</FormattedMessage>
      <FormattedMessage id="artiste.musique.nombreAnneeCarriere">{txt => <p><strong>{txt}</strong> : {musiqueATrouver?.artiste.nombreAnneeCarriere}</p>}</FormattedMessage>
      <FormattedMessage id="artiste.musique.dateNaissance">{txt => <p><strong>{txt}</strong> : {musiqueATrouver?.artiste.dateNaissance?.toString().split('T')[0]}</p>}</FormattedMessage>
      <FormattedMessage id="artiste.musique.origine">{txt => <p><strong>{txt}</strong> : {musiqueATrouver?.artiste.origine}</p>}</FormattedMessage>
      </div>
      
      <FormattedMessage id="album.musique.name">{txt => <p>{txt} : {musiqueATrouver?.album[0].name}</p>}</FormattedMessage>
      <FormattedMessage id="album.musique.url">{txt => <p>{txt} : {musiqueATrouver?.album[0].url}</p>}</FormattedMessage>
      <FormattedMessage id="genre.musique">{txt => <p>{txt} : {musiqueATrouver?.genre}</p>}</FormattedMessage>
      
      <FormattedMessage id="dateDeSortie.musique">{txt => 
      <p>{txt} : 
      <FormattedDate value={musiqueATrouver?.dateDeSortie} year="numeric" month="long" day="2-digit" /></p>}
      </FormattedMessage>
      
      {/* POUR LA DATE JE VAIS CHECK APRES */}
      
      <FormattedMessage id="duree.musique">{txt => <p>{txt} : {musiqueATrouver?.duree}</p>}</FormattedMessage>
      <FormattedMessage id="paroles.musique">{txt => <p>{txt} : {musiqueATrouver?.paroles}</p>}</FormattedMessage>
      <FormattedMessage id="compositeur.musique">{txt => <p>{txt} : {musiqueATrouver?.compositeur}</p>}</FormattedMessage>
      <FormattedMessage id="producteur.musique">{txt => <p>{txt} : {musiqueATrouver?.producteur}</p>}</FormattedMessage>
      <FormattedMessage id="enCollaboration.musique">{txt => <p>{txt} : {musiqueATrouver?.enCollaboration ? 'Oui' : 'Non'}</p>}</FormattedMessage>

      {musiqueATrouver?.enCollaboration && (
        <div>
          <p>Artistes en collaboration:</p>
          <ul>
            {musiqueATrouver?.artistesEnCollaboration?.map((artisteCollab, index) => (

              <li key={index}>{artisteCollab.Artiste.nomArtiste} {artisteCollab.Artiste.prenom} {artisteCollab.Artiste.nom}  {artisteCollab.Artiste.nombreAnneeCarriere} {artisteCollab.Artiste.origine}</li>
            ))}
          </ul>
        </div>
      )}

<FormattedMessage id="nombreDecoute.musique">{txt => <p>{txt} : {musiqueATrouver?.nombreDecoute}</p>}</FormattedMessage>

      <div>
      <FormattedMessage id="evaluations.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
        <ul>
          {musiqueATrouver?.evaluations.map((evaluation, index) => (
            <p key={index}>Note: {evaluation.note}</p>
          ))}
        </ul>
      </div>

      {musiqueATrouver?.commentaires && (
        <div>
          <FormattedMessage id="commentaires.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <ul>
            {musiqueATrouver?.commentaires.map((commentaire, index) => (
              <p key={index}>{commentaire}</p>
            ))}
          </ul>
        </div>
      )}
      <Stack justifyContent="center" alignItems="center">
      <img src={musiqueATrouver?.imageDeCouverture} alt="Image de couverture" />
      <audio controls src={musiqueATrouver?.fichierAudio}>
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
      </Stack>
      

      <FormattedMessage id="source.musique">{txt => <p>{txt} : {musiqueATrouver?.source}</p>}</FormattedMessage>
      <FormattedMessage id="estFavoris.musique">{txt => <p>{txt} : {musiqueATrouver?.estFavoris ? 'Oui' : 'Non'}</p>}</FormattedMessage>
    </Stack>
  );
}

export default MusiqueDetails;


