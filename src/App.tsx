import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//import Home from './pages/Home';
import VoitureMarque from './pages/VoitureMarque';

import Modelevoiture from './pages/Modelevoiture';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import ValidInscription from './pages/ValidInscription';
import Footer from './pages/Footer';
import Accueil from './pages/Accueil';
import ImageVoiture from './pages/ImageVoiture';
import Menu from './pages/Menu';
import Header from './pages/Header';
import ListeAnnonce from './pages/ListeAnnonce';
import DetailAnnonce from './pages/Detailannonce';
import Voiturekilometre from './pages/Voiturekilometre';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
   
        <Route exact path="/footer" >
          <Footer />
        </Route>
        <Route exact path="/header" >
          <Header />
        </Route>
        <Route exact path="/menu" >
          <Menu />
        </Route>

        <Route exact path="/accueil" >
          <Accueil />
        </Route>

        <Route exact path="/listeannonce" >
          <ListeAnnonce />
        </Route>

        <Route exact path="/detailannonce" >
          <DetailAnnonce />
        </Route>
   

        <Route exact path="/accueil" >
          <Accueil />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/inscription">
          <Inscription />
        </Route>
        <Route exact path="/validInscription">
          <ValidInscription />
        </Route> 

        <Route exact path="/voituremarque">
          <VoitureMarque />
        </Route>
        <Route exact path="/voiturekilometre">
          <Voiturekilometre />
        </Route>
        <Route exact path="/modelevoiture">
        <Modelevoiture />
      </Route>
      <Route exact path="/imagevoiture">
      <ImageVoiture />
      </Route>

      <Route exact path="/">
          <Redirect to="/login" /> 
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
