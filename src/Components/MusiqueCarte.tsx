import React from "react";
import { IMusiqueDetailsProps } from "./MusiqueDetail";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
export interface IMusiqueCarteProps {
    musique: IMusiqueDetailsProps;
}



function MusiqueCarte(props: IMusiqueCarteProps) {
  const [ouvert, setOuvert] = React.useState(false);
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    
    // Add your logic or action to be performed on card click
    console.log(props.musique._id);
    
    navigate("/detail/" + props.musique._id);
   
    
  };
 
  const  supprimer = async () => {
    await axios({
      method: 'delete',
      url: 'https://api-musik.netlify.app/musiques/' + props.musique._id,
    });
    console.log("Supprimer")
    handleClose()
    window.location.reload();
  }
  
  const modifier = () => {
    navigate("/modifier/" + props.musique._id);
  }
  const handleClickOuvert = () => {
    setOuvert(true);
  };

  const handleClose = () => {
    setOuvert(false);
  };

    return (
        <Card className="card" >
          {/* J'avais de la misere à resize ma photo j'ai demander à https://chat.openai.com/ et j'ai trouvé le objetfit : contains */}
      <CardMedia
        component="img"
        alt={props.musique.titre}
        height="300"
        width="300"
        style={{ objectFit: 'contain' }} // Crop the image to cover the specified dimensions
        image={props.musique.imageDeCouverture}
        onClick={handleCardClick}
      />
      <CardContent>
        <Typography variant="h4" component="div">
          <b>{props.musique.titre}</b>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {props.musique.artiste.nomArtiste}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          <FormattedMessage id="ecoutes">{txt => <p>{props.musique.nombreDecoute}  {txt}</p>}</FormattedMessage>
        </Typography>
      </CardContent>
      <DeleteIcon onClick={handleClickOuvert} />
      <Dialog
        open={ouvert}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Suppression?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Voulez-vous vraiment supprimer cette musique?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Non</Button>
          <Button onClick={supprimer}>Oui</Button>
        </DialogActions>
      </Dialog>
      <EditIcon onClick={modifier}/>


    </Card>
  );
}

export default MusiqueCarte;


