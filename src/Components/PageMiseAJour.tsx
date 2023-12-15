import React, { useEffect, useState } from 'react';
import "../CSS/PageAjout.css"
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { IMusiqueDetailsProps } from './MusiqueDetail';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const PageMiseAJour = () => {
  const navigate = useNavigate();
  const [musiqueAModifier, setMusiqueAModifier] = useState<IMusiqueDetailsProps>();

  const [titre, setTitre] = useState('');
  const [artisteNomArtiste, setArtisteNomArtiste] = useState('');
  const [artisteNom, setArtisteNom] = useState('');
  const [artistePrenom, setArtistePrenom] = useState('');
  const [nombreAnneeCarriere, setNombreAnneeCarriere] = useState(0);
  const [dateNaissance, setDateNaissance] = useState('');
  const [origine, setOrigine] = useState('');
  const [albumNom, setAlbumNom] = useState('');
  const [albumUrl, setAlbumUrl] = useState('');
  const [genre, setGenre] = useState('');
  const [dateDeSortie, setDateDeSortie] = useState('');
  const [duree, setDuree] = useState(0);
  const [paroles, setParoles] = useState('');
  const [compositeur, setCompositeur] = useState('');
  const [producteur, setProducteur] = useState('');
  const [nombreDecoute, setNombreDecoute] = useState(0);
  const [evaluations, setEvaluations] = useState(0);
  const [commentaires, setCommentaires] = useState('');
  const [imageDeCouverture, setImageDeCouverture] = useState('');
  const [fichierAudio, setFichierAudio] = useState('');
  const [source, setSource] = useState('');
  const [estFavoris, setEstFavoris] = useState(false);
  let {id} = useParams();
  useEffect(() => {
      axios.get('https://api-musik.netlify.app/musiques/'+id).then((response) => {
        setMusiqueAModifier(response.data.musique)
        console.log(id)
      })
  }, [id])
  useEffect(() => {
    console.log(musiqueAModifier)
    if(musiqueAModifier != undefined){
      setTitre(musiqueAModifier?.titre)
      setArtisteNomArtiste(musiqueAModifier?.artiste.nomArtiste)
      setArtisteNom(musiqueAModifier?.artiste.nom)
      setArtistePrenom(musiqueAModifier?.artiste.prenom)
      setNombreAnneeCarriere(musiqueAModifier?.artiste.nombreAnneeCarriere)
      setDateNaissance(musiqueAModifier?.artiste.dateNaissance.toString().split('T')[0])
      setOrigine(musiqueAModifier?.artiste.origine)
      setAlbumNom(musiqueAModifier?.album[0].name);
      setAlbumUrl(musiqueAModifier?.album[0].url)
      setGenre(musiqueAModifier?.genre)
      setDateDeSortie(musiqueAModifier?.dateDeSortie.toString().split('T')[0])
      setDuree(musiqueAModifier?.duree)
      setParoles(musiqueAModifier?.paroles)
      setCompositeur(musiqueAModifier?.compositeur)
      setProducteur(musiqueAModifier?.producteur)
      setNombreDecoute(musiqueAModifier?.nombreDecoute)
      setEvaluations(musiqueAModifier?.evaluations[0].note)
      setCommentaires(musiqueAModifier?.commentaires[0])
      setImageDeCouverture(musiqueAModifier?.imageDeCouverture)
      setFichierAudio(musiqueAModifier?.fichierAudio)
      setSource(musiqueAModifier?.source)
      setEstFavoris(musiqueAModifier?.estFavoris)
    }
  }, [musiqueAModifier])


  
  const [ouvert, setOuvert] = React.useState(false);
    
    

    
 const musiqueForm = [
  titre, artisteNomArtiste, artisteNom, artistePrenom, nombreAnneeCarriere,
    dateNaissance, origine, albumNom, albumUrl, genre, dateDeSortie, duree, paroles,
    compositeur, producteur, nombreDecoute, evaluations, commentaires, imageDeCouverture,
    fichierAudio, source
 ]

  
    const handleSubmit = () => {
      const verifieState = musiqueForm.some((element) => element == '' || element == 0);
      console.log(verifieState);
      if (verifieState == true) {
        alert('Veuillez remplir tous les champs');
      }
      else {
        axios.put('https://api-musik.netlify.app/musiques', {
          "musique": {
          "_id": id,
          "titre": titre,
          "artiste": {
            "nomArtiste": artisteNomArtiste,
            "nom": artisteNom,
            "prenom": artistePrenom,
            "nombreAnneeCarriere": nombreAnneeCarriere,
            "dateNaissance": dateNaissance,
            "origine": origine,
          },
          "album": {
            "name": albumNom,
            "url": albumUrl,
          },
          "genre": genre,
          "dateDeSortie": dateDeSortie,
          "duree": duree,
          "paroles": paroles,
          "compositeur": compositeur,
          "producteur": producteur,
          "nombreDecoute": nombreDecoute,
          "evaluations": [
            {
              "note": evaluations,
            },
          ],
          "commentaires": [commentaires],
          "imageDeCouverture": imageDeCouverture,
          "fichierAudio": fichierAudio,
          "source": source,
          "estFavoris": estFavoris,
        }});
        setOuvert(true);
      }
      
      console.log('Form submitted with data:', musiqueForm);
    };
    


    const handleFermeture = () => {
      setOuvert(false);
      navigate("/listeMusique");
    };
    return (
        <>
        <FormattedMessage id="modifier.musique">{txt => <h1>{txt}</h1>}</FormattedMessage>
      <form className="music-form" onSubmit={handleSubmit}>
        
        <label>
        <FormattedMessage id="titre.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="artiste.musique.nomArtiste">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="nomArtiste" value={artisteNomArtiste} onChange={(e) => setArtisteNomArtiste(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="artiste.musique.nom">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="nom" value={artisteNom} onChange={(e) => setArtisteNom(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="artiste.musique.prenom">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="prenom" value={artistePrenom} onChange={(e) => setArtistePrenom(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="artiste.musique.nombreAnneeCarriere">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="number" name="nombreAnneeCarriere" value={nombreAnneeCarriere} onChange={(e) => setNombreAnneeCarriere(parseInt(e.target.value))} />
        </label>
        <label>
        <FormattedMessage id="artiste.musique.dateNaissance">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="date" name="dateNaissance" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="artiste.musique.origine">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="origine" value={origine} onChange={(e) => setOrigine(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="album.musique.name">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="name" value={albumNom} onChange={(e) => setAlbumNom(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="album.musique.url">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="url" value={albumUrl} onChange={(e) => setAlbumUrl(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="genre.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="dateDeSortie.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="date" name="dateDeSortie" value={dateDeSortie} onChange={(e) => setDateDeSortie(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="duree.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
        {/* Trouvé la solution de parse int sur https://www.arahansen.com/how-to-convert-a-string-to-a-number-in-typescript/ */}
          <input type="number" name="duree" value={duree} onChange={(e) => setDuree(parseInt(e.target.value))} />
        </label>
        <label>
        <FormattedMessage id="paroles.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="paroles" value={paroles} onChange={(e) => setParoles(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="compositeur.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="compositeur" value={compositeur} onChange={(e) => setCompositeur(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="producteur.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="producteur" value={producteur} onChange={(e) => setProducteur(e.target.value)} />
        </label>
        <label>
        </label>
        
        <label>
        <FormattedMessage id="nombreDecoute.musique">{txt => <p>{txt} : </p>}</FormattedMessage>  
          <input type="number" name="nombreDecoute" value={nombreDecoute} onChange={(e) => setNombreDecoute(parseInt(e.target.value))} />
        </label>
        <label>
        <FormattedMessage id="evaluations.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="number" name="note" value={evaluations} onChange={(e) => setEvaluations(parseInt(e.target.value))} />
        </label>
        <label>
        <FormattedMessage id="commentaires.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="commentaires" value={commentaires} onChange={(e) => setCommentaires(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="imageDeCouverture.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="imageDeCouverture" value={imageDeCouverture} onChange={(e) => setImageDeCouverture(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="fichierAudio.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="fichierAudio" value={fichierAudio} onChange={(e) => setFichierAudio(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="source.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="text" name="source" value={source} onChange={(e) => setSource(e.target.value)} />
        </label>
        <label>
        <FormattedMessage id="estFavoris.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="checkbox" name="estFavoris" checked={estFavoris} onChange={() => setEstFavoris(!estFavoris)} />
        </label>
        <button type="button" onClick={handleSubmit}>Envoie</button>
      </form>
      <Dialog
        open={ouvert}
        keepMounted
        onClose={handleFermeture}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Suppression?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Voulez-vous vraiment supprimer cette musique?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFermeture}>Non</Button>
        </DialogActions>
      </Dialog>
      </>
    );
  };

export default PageMiseAJour;




