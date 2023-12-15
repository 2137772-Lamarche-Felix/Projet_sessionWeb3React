import { Outlet } from "react-router-dom";
import "../CSS/PagePrincipale.css"

function PagePrincipale() {
  
  return (
    <div>
      <a href="/" className="button-like">Page principale</a>&nbsp;
      <a href="/ajout"className="button-like">Ajouter Musique</a>&nbsp;
      <a href="/listeMusique"className="button-like">Liste Musique</a>
      
      <br />
      <Outlet />  
    </div>
      
  );
}

export default PagePrincipale;