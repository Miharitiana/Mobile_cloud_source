
import {IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonList, IonItem, IonRouterLink, IonButtons, IonMenuButton, IonMenuToggle } from '@ionic/react';

import Header from './Header';

function Menu() {

  return (
    <>
    <Header></Header>
      <IonMenu contentId="main-content" >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonList>
          <IonItem>
            <IonMenuToggle>
              <a href="/accueil">Accueil</a>
            </IonMenuToggle>
            </IonItem>
          <IonItem>
            <IonMenuToggle>
              <a href="/voituremarque">Ajouter Annonce</a>
            </IonMenuToggle>
            </IonItem>
           
            <IonItem>
            <IonMenuToggle>
              <a href="/listeannonce"> Liste des annonces</a>
               
            </IonMenuToggle>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      
    
    </>
  );
}

export default Menu;
