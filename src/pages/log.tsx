import { IonContent, IonPage, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import React, { useState } from 'react';

const App: React.FC = () => {
  const apiUrl = 'TON_URL_API'; // Remplace TON_URL_API par ton URL réelle
  const [method, setMethod] = useState<string>('GET');
  const [headers, setHeaders] = useState<{ [key: string]: string }>({});
  const [body, setBody] = useState<string>('');

  const handleRequest = async () => {
    try {
      const options: RequestInit = {
        method: method,
        headers: new Headers(headers),
        body: method !== 'GET' ? body : undefined,
      };

      const response = await fetch(apiUrl, options);
      const jsonData = await response.json();
      console.log('Réponse de l\'API :', jsonData);
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div>
          <h1>Configurer la requête :</h1>
          <IonSelect value={method} placeholder="Sélectionner la méthode" onIonChange={(e) => setMethod(e.detail.value)}>
            <IonSelectOption value="GET">GET</IonSelectOption>
            <IonSelectOption value="POST">POST</IonSelectOption>
            <IonSelectOption value="PUT">PUT</IonSelectOption>
          </IonSelect>

          <label>Headers :</label>
          <input
            type="text"
            value={JSON.stringify(headers)}
            onChange={(e) => setHeaders(JSON.parse(e.target.value))}
            placeholder="Ajouter des headers au format JSON"
          />

          {method !== 'GET' && (
            <div>
              <label>Corps de la requête (JSON) :</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Ajouter du JSON dans le corps de la requête"
              />
            </div>
          )}

          <IonButton onClick={handleRequest}>Envoyer la requête</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default App;