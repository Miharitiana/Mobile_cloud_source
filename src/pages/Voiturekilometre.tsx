import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './assets/css/Voiturekilometre.css'
import Menu from './Menu';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { Toast } from "@capacitor/toast";

interface Modele {
  _id: string;
  nom: string;
}

const showToast = async (msg: string) => {
  await Toast.show({
      text: msg
  })
}

const Voiturekilometre: React.FC = () => {
  console.log("Va afficher le composant");
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
  const apiUrl = 'http://127.0.0.1:8080/annonce/nouvelle_annonce';
  var apiUrlModele = 'https://cloud-back-voiture-production-3dbf.up.railway.app/detail/model';
  const [immatriculation, setImmatricul] = useState<string>('');
  const [kilometre, setKilometre] = useState<string>('');
  const [prix, setPrix] = useState<string>('');
  const [annee, setAnnee] = useState<string>('');
  const [description, setDescri] = useState<string>('');
  const [modele, setModele] = useState<Modele[]>([]);
  const [idmodele, setSelectedModele] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const history = useHistory();

  //useEffect(() => {
  //  console.log('immatriculation:', immatriculation);
  //  console.log('kilometre:', kilometre);
  //  console.log('prix:', prix);
  //  console.log('annee:', annee);
  //  console.log('description:', description);
  //  console.log('modele:', idmodele);
  //}, [immatriculation, kilometre, prix, annee, description, idmodele]);

  const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      showToast("Enregistrement en cours...");
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
          'authorization': 'Bearer '+localStorage.getItem("authToken"),
        },
        body: JSON.stringify({ immatriculation, kilometre, prix, annee, description, idmodele, images}),
      });

      if (!response.ok) {
        console.error('Échec de la requête annonce:', response.statusText);
        return;
      }
       else {
        console.log('Annonce insérée');
      }
    }
    catch (error) {
      console.error('Error occured while insertice your ad:', error);
    }
  };

  useEffect(() => {
    const fetchMarques = async () => {
      const queryParams = new URLSearchParams();
      const param = localStorage.getItem("selected_marque") as string;
      queryParams.append("idmarque",param);
      apiUrlModele = apiUrlModele+'?'+queryParams.toString();
      console.log("------>>URL des modeles "+apiUrlModele);
      try {
        showToast("Chargement, veuillez patienter...");

        const response = await fetch(apiUrlModele);
        const data = await response.json();
        console.log("data modele = "  , data);
        if (response.ok) {
          const modelesData = data.object;
          const allModeles: Modele[] = modelesData.map((modele: any) => ({
            _id: modele._id,
            nom: modele.nom
          }));
          console.log("Modeles chargés:", allModeles);
          setModele(allModeles);
        } else {
          console.error('Failed to fetch modeles:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during fetching modeles:', error);
      }
    }; 
    fetchMarques();
  }, [apiUrlModele]);
  

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) =>{
      setSelectedModele(e.target.value);
  }



  return (
<form onSubmit={handleRequest}>
    <select className='select' style={{}} onInput={handleSelection}name='modele' >
        <option>Choisir le modèle</option>
      {modele.map((model) => (
      <option key={model._id} value={model._id}>{model.nom}</option>
    ))}
    </select>


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
