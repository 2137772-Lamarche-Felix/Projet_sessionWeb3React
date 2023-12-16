import MusiqueCarte from "./MusiqueCarte";
import { IMusiqueDetailsProps } from "./MusiqueDetail";
import { Button, Grid, Stack, TextField } from "@mui/material";
import "../CSS/MusiqueGrid.css"
import React from "react";
import axios from "axios";
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
export interface IMusiqueGrilleProps {
    tabMusiques: IMusiqueDetailsProps[];

}


    const textFieldStyle = {
        backgroundColor: 'white',
        radius: 5,
    };
    const buttonStyle = {
        radius: 5,
        margin: 10,
    };
function MusiqueGrid(props: IMusiqueGrilleProps) {
    const [recherche, setRecherche] = React.useState("");
    const [entrainRecherche, setEntrainRecherche] = React.useState(false);
    const [rechercheMoyenne, setRechercheMoyenne] = React.useState("");
    const [rechercheMoyenneBool, setRechercheMoyenneBool] = React.useState(false);
    const [rechercheEcouteTotal, setRechercheEcouteTotal] = React.useState("");
    const [rechercheEcouteTotalBool, setRechercheEcouteTotalBool] = React.useState(false);
    const [musiquesRecherches, setMusiquesRecherche] = React.useState<IMusiqueDetailsProps[]>();
    const [min , setMin] = React.useState(0);
    const [max , setMax] = React.useState(0);
    const [messageErreur, setMessageErreur] = React.useState("");
    const [erreur,setErreur] = React.useState(false);
    function rechercheParTitre() {
        if(recherche === "") {
            setEntrainRecherche(false)
            return
        }
        else{
            setEntrainRecherche(true)
            setRechercheEcouteTotalBool(false)
            setRechercheMoyenneBool(false)
        axios.get('https://api-musik.netlify.app/musiques/titre/'+ recherche).then((response) => {
        setMusiquesRecherche(response.data.musique)
            })
            .catch(err => {
                setMessageErreur(err);
                setErreur(true);
                console.log(err)
              });
        }
    }
    function rechercheMoyenneArtiste() {
        setEntrainRecherche(false)
        if(recherche === "") {
            setRechercheMoyenneBool(false)
            return
        }
        else{
            setRechercheMoyenneBool(true)
            
        axios.get('https://api-musik.netlify.app/musiques/moyenne/'+recherche).then((response) => {
            setRechercheMoyenne(response.data.NombreMoyen)
            })
            .catch(err => {
                setMessageErreur(err);
                setErreur(true);
                console.log(err)
              });
        }
    }
    function rechercheEcouteTotalArtiste() {
        setEntrainRecherche(false)
        if(recherche === "") {
            setRechercheEcouteTotalBool(false)
            return
        }
        else{
            setRechercheEcouteTotalBool(true)
        axios.get('https://api-musik.netlify.app/musiques/total/'+recherche).then((response) => {
            setRechercheEcouteTotal(response.data.NombreTotale)
            })
            .catch(err => {
                setMessageErreur(err);
                setErreur(true);
                console.log(err)
              });
        }
    }
    function rechercheArtisteEntreMinEtMax() {
        setEntrainRecherche(false)
        if(min === 0 && max === 0) {
            setRechercheEcouteTotalBool(false)
            return
        }
        else{
            setMusiquesRecherche([])
            setEntrainRecherche(true)
        axios.get('https://api-musik.netlify.app/musiques/nombreEcoute/'+min + '/' + max).then((response) => {
            setMusiquesRecherche(response.data.musique)
            })
            .catch(err => {
                setMessageErreur(err);
                setErreur(true);
                console.log(err)
              });
        }
    }
    function resetRecherche() {
        setMusiquesRecherche([])
        setRechercheEcouteTotalBool(false)
        setRechercheEcouteTotal("")
        setRechercheMoyenneBool(false)
        setRechercheMoyenne("")
        setEntrainRecherche(false)
        setRecherche("")
    }
    return (
        <Stack justifyContent="center" alignItems="center">
            {/* Pas oublier de changer la couleur  */}
            <TextField id="outlined-basic" label="Recherche" variant="outlined" margin="normal" fullWidth onChange={(e) => setRecherche(e.target.value)}style={textFieldStyle}/>
            {erreur === true && (
                <h1>{messageErreur}</h1>
            )}
            <Button variant="contained" color="primary" style={buttonStyle} onClick={resetRecherche}fullWidth>Reset recherche</Button>
            <Button variant="contained" color="primary" style={buttonStyle} onClick={rechercheParTitre}fullWidth>Recherche par titre de musique</Button>
            <Button variant="contained" color="primary"style={buttonStyle} onClick={rechercheMoyenneArtiste} fullWidth>Trouver moyenne écoute d'un artiste</Button>
            <Button variant="contained" color="primary"style={buttonStyle} onClick={rechercheEcouteTotalArtiste} fullWidth>Trouver total écoute d'un artiste</Button>
            <Stack direction="row" spacing={2}>
            <NumberInput
            aria-label="Demo number input"
            placeholder="Minimum écoute"
            value={min}
            onChange={(_event, val) => setMin(val || 0)}
            />
            <NumberInput
            aria-label="Demo number input"
            placeholder="Maximum écoute"
            value={max}
            onChange={(_event, val) => setMax(val || 0)}
            />
            </Stack>
            <Button variant="contained" color="primary"style={buttonStyle} onClick={rechercheArtisteEntreMinEtMax} fullWidth>Trouver les artistes entre min et max écoutes</Button>
            <Grid container spacing={2}>
            <Grid item xs={5} md={15}>
            {entrainRecherche === false && rechercheMoyenneBool == false && rechercheEcouteTotalBool == false &&  (
            <>
                {props.tabMusiques.map((musique) => (
                <React.Fragment key={musique._id}>
                    <br />
                    <MusiqueCarte musique={musique} />
                    <br />
                </React.Fragment>
                ))}
            </>
            )}
            {entrainRecherche === true && (
            <>
                {musiquesRecherches?.map((musique) => (
                <React.Fragment key={musique._id}>
                    <br />
                    <MusiqueCarte musique={musique} />
                    <br />
                </React.Fragment>
                ))}
            </>
            )}
            {rechercheEcouteTotalBool === true && (
            <>
                <h1>{rechercheEcouteTotal}</h1>
            </>
            )}
            {rechercheMoyenneBool === true && (
            <>
                <h1>{rechercheMoyenne}</h1>
            </>
            )}
            </Grid>
        </Grid>
        </Stack>
        
    );
}

export default MusiqueGrid;


