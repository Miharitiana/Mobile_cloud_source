
import {IonContent, IonHeader, IonMenu,  IonPage, IonTitle, IonToolbar, IonList, IonItem, IonRouterLink, IonButtons, IonMenuButton, IonMenuToggle } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Header from './Header';
import menuService from './ServiceMenu';

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
              <a href="/voituremarque">Voiture marque</a>
            </IonMenuToggle>
            </IonItem>
            
            <IonItem>
            <IonMenuToggle>
              <a href="/modelevoiture"> Modèle voiture</a>
  
            </IonMenuToggle>
            </IonItem>

            <IonItem>
            <IonMenuToggle>
            <a href="/imagevoiture">  Image voiture </a>
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
