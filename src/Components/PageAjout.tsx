import { useState } from 'react';
import "../CSS/PageAjout.css"
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

const PageAjout = () => {
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
  const [enCollaboration, setEnCollaboration] = useState(false);
  const [artistesEnCollaborationNom, setArtistesEnCollaborationNom] = useState('');
  const [artistesEnCollaborationNomArtiste, setArtistesEnCollaborationNomArtiste] = useState('');
  const [artistesEnCollaborationPrenom, setArtistesEnCollaborationPrenom] = useState('');
  const [artistesEnCollaborationNombreOrigine, setArtistesEnCollaborationNombreOrigine] = useState('');
  const [artistesEnCollaborationNombreAnneeCarriere, setArtistesEnCollaborationNombreAnneeCarriere] = useState(0);
  const [artistesEnCollaborationDateNaissance, setArtistesEnCollaborationDateNaissance] = useState('');
  const [nombreDecoute, setNombreDecoute] = useState(0);
  const [evaluations, setEvaluations] = useState(0);
  const [commentaires, setCommentaires] = useState('');
  const [imageDeCouverture, setImageDeCouverture] = useState('');
  const [fichierAudio, setFichierAudio] = useState('');
  const [source, setSource] = useState('');
  const [estFavoris, setEstFavoris] = useState(false);
    
    

    
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
      else if(enCollaboration == true)
      {
        axios.post('https://api-musik.netlify.app/musiques', {
          "musique": {
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
          "enCollaboration": enCollaboration,
          "artistesEnCollaboration": [
            {
              "Artiste":
            {
              "nomArtiste": artistesEnCollaborationNomArtiste,
              "nom": artistesEnCollaborationNom,
              "prenom": artistesEnCollaborationPrenom,
              "nombreAnneeCarriere": artistesEnCollaborationNombreAnneeCarriere,
              "dateNaissance": artistesEnCollaborationDateNaissance,
              "origine": artistesEnCollaborationNombreOrigine,
            }
            },
          ],
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
      }
      else {
        axios.post('https://api-musik.netlify.app/musiques', {
          "musique": {
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
          "enCollaboration": enCollaboration,
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
      }
      
      console.log('Form submitted with data:', musiqueForm);
    };
    

  
    return (
        <>
        <FormattedMessage id="ajout.musique">{txt => <h1>{txt}</h1>}</FormattedMessage>
      <form className="music-form" onSubmit={handleSubmit}>
        {/* Add your input fields here, for example: */}
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
        <FormattedMessage id="enCollaboration.musique">{txt => <p>{txt} : </p>}</FormattedMessage>
          <input type="checkbox" name="enCollaboration" checked={enCollaboration} onChange={() => setEnCollaboration(!enCollaboration)} />
        </label>
        {/* Solution trouvée et inspiré de ce site https://legacy.reactjs.org/docs/conditional-rendering.html */}
        {enCollaboration == true && <>
            <label>
            <FormattedMessage id="artiste.musique.nomArtiste">{txt => <p>{txt} : </p>}</FormattedMessage>
                <input type="text" name="nom" value={artistesEnCollaborationNomArtiste} onChange={(e) => setArtistesEnCollaborationNomArtiste(e.target.value)} />
            </label>
            <label>
            <FormattedMessage id="artiste.musique.nom">{txt => <p>{txt} : </p>}</FormattedMessage>
                <input type="text" name="nom" value={artistesEnCollaborationNom} onChange={(e) => setArtistesEnCollaborationNom(e.target.value)} />
            </label>
            <label>
            <FormattedMessage id="artiste.musique.prenom">{txt => <p>{txt} : </p>}</FormattedMessage>
                <input type="text" name="prenom" value={artistesEnCollaborationPrenom} onChange={(e) => setArtistesEnCollaborationPrenom(e.target.value)} />
            </label>
            <label>
            <FormattedMessage id="artiste.musique.nombreAnneeCarriere">{txt => <p>{txt} : </p>}</FormattedMessage>
                <input type="number" name="nombreAnneeCarriere" value={artistesEnCollaborationNombreAnneeCarriere} onChange={(e) => setArtistesEnCollaborationNombreAnneeCarriere(parseInt(e.target.value))} />
            </label>
            <label>
            <FormattedMessage id="artiste.musique.dateNaissance">{txt => <p>{txt} : </p>}</FormattedMessage>
                <input type="date" name="dateNaissance" value={artistesEnCollaborationDateNaissance} onChange={(e) => setArtistesEnCollaborationDateNaissance(e.target.value)} />
            </label>
            <label>
            <FormattedMessage id="artiste.musique.origine">{txt => <p>{txt} : </p>}</FormattedMessage>
                <input type="text" name="origine" value={artistesEnCollaborationNombreOrigine} onChange={(e) => setArtistesEnCollaborationNombreOrigine(e.target.value)} />
            </label>

            </>
            }
        
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
        <button type="submit">Submit</button>
        <button type="button" onClick={handleSubmit}>Envoie</button>
      </form>
      </>
    );
  };

export default PageAjout;


