import { Outlet } from "react-router-dom";
import "../CSS/PagePrincipale.css"
import { FormattedMessage } from "react-intl";

function PagePrincipale() {
  
  return (
    <div>
      <FormattedMessage id="page.principal">{txt => <a href="/" className="button-like">{txt}</a>}</FormattedMessage>
      <FormattedMessage id="ajout.musique">{txt => <a href="/ajout" className="button-like">{txt}</a>}</FormattedMessage>
      <FormattedMessage id="liste.musique">{txt => <a href="/listeMusique" className="button-like">{txt}</a>}</FormattedMessage>
      <FormattedMessage id="messages.accueil">{txt => <h2>{txt}</h2>}</FormattedMessage>
      
      <br />
      <Outlet />  
      
    </div>
    
      
  );
}

export default PagePrincipale;