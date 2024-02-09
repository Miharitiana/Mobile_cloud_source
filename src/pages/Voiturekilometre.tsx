import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Menu from './Menu';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

interface Modele {
  _id: string;
  nom: string;
}

const Voiturekilometre: React.FC = () => {
  return (
    <IonPage>
      <Menu />
      <IonContent>
        <ContainVoitureMarque />
      </IonContent>
    </IonPage>
  );
};

const ContainVoitureMarque: React.FC = () => {
  const { idMarque } = useParams<{ idMarque: string }>();
  const apiUrl = 'https://cloud-back-voiture-production.up.railway.app/annonce/nouvelle_annonce';
  const apiUrlModele = 'https://cloud-back-voiture-production-3dbf.up.railway.app/detail/model?idmarque=bd03ac35-69ea-4c99-9dd6-d10cd9bd1a6a';
  const [immatriculation, setImmatricul] = useState<string>('');
  const [kilometre, setKilometre] = useState<string>('');
  const [prix, setPrix] = useState<string>('');
  const [annee, setAnnee] = useState<string>('');
  const [description, setDescri] = useState<string>('');
  const [modele, setModele] = useState<Modele[]>([]);
  const history = useHistory();

  useEffect(() => {
    console.log('immatriculation:', immatriculation);
    console.log('kilometre:', kilometre);
    console.log('prix:', prix);
    console.log('annee:', annee);
    console.log('description:', description);
    console.log('modele:', modele);
  }, [immatriculation, kilometre, prix, annee, description, modele]);

  const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({ immatriculation, kilometre, prix, annee, description }),
      });

      if (!response.ok) {
        console.error('Échec de la requête:', response.statusText);
        return;
      }

      const response_modele = await fetch(apiUrlModele, {
        method: 'GET',
        headers: {
          'content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      const data_model = await response_modele.json();
      if (response_modele.ok) {
        const allModele: Modele[] = data_model.object.map((model: any) => ({
          _id: model._id,
          nom: model.nom
        }));
        setModele(allModele);
      } else {
        console.error('Échec de la récupération des modèles:', response_modele.statusText);
      }
      
      if (data.information == "200") {
        console.log(' successful:', data);
        localStorage.setItem('authToken', data.object.token);
        console.log('local storage : ' + localStorage.getItem('authToken'));
        history.push('/accueil');
      } else {
        console.log(' failed:', data);
        console.error(' failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error leiz:', error);
    }
  };

  return (
<form onSubmit={handleRequest}>

<div className='container' style={{}}>
<input className='input' type="text" placeholder='immatriculation' style={{marginTop:'110px'}}  value={immatriculation}
  onChange={(e) => setImmatricul(e.target.value)} />

<input className='input' type="text" style={{}} placeholder="kilometre"value={kilometre}
  onChange={(e) => setKilometre(e.target.value)} />

<input className='input' type="text" style={{}} placeholder="prix"value={prix}
  onChange={(e) => setPrix(e.target.value)} />

<input className='input' type="text" placeholder='Année' style={{}}value={annee}
  onChange={(e) => setAnnee(e.target.value)} />

<textarea className='textarea-style' style={{}} placeholder="Description "value={description}
  onChange={(e) => setDescri(e.target.value)} />


<select className='select' style={{}} name='modele' >{modele.map((model) => (
    <option key={model._id} value={model._id}>{model.nom}</option>
  ))}
</select>

<div className='contain1' style={{}}>
  <input type='file' style={{}} placeholder="file" />
</div>

<div className='contain-button' style={{}}>
  <input className='btn' type="submit" style={{}} value="Soumettre" />
</div>

    </div>
</form>
  );
};

export default Voiturekilometre;
