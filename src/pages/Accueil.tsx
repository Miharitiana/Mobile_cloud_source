import { IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import Footer from './Footer';
import Menu from './Menu';
import './assets/css/accueil.css';

const Accueil: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
    
      <Menu/>
      <ContainAccueil></ContainAccueil>
      <Footer/>
      </IonContent>
    </IonPage>
 
  );
};

const ContainAccueil: React.FC = () => {
  return (
    <body className='body_accueil'>
 
    </body>
  );
};

export default Accueil;