import { IonContent, IonPage } from '@ionic/react';

//import 'assets/bootstrap/css/bootstrap.min.css';
//import 'assets/css/styles.css';
import './assets/css/voitureMarque.css';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const VoitureMarque: React.FC = () => {


  return (

    <IonPage>
      <IonContent>
      <Menu/>
    <ContainVoiture />
      </IonContent>
    </IonPage>
    
  );
};

interface Marque {
  _id: string;
  nom: string;
}

const ContainVoiture: React.FC = () => {
  const apiUrl = 'https://cloud-back-voiture-production-3dbf.up.railway.app/detail/marca'; // Remplace TON_URL_API par ton URL réelle
  console.log("apiUrl = " + apiUrl)
  const [method, setMethod] = useState<string>('GET');
  const [headers, setHeaders] = useState<{ [key: string]: string }>({"content-type" : "application/json"});
  const history = useHistory();
 
  const [marques, setMarques] = useState<Marque[]>([]);
  const [selectedMarqueId, setSelectedMarqueId] = useState<string>('');



 useEffect(() => {
  const fetchMarques = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("data = "  , data);
      if (response.ok) {
        const marquesData = data.object[0];
        const allMarques: Marque[] = marquesData.map((marque: any) => ({
          _id: marque._id,
          nom: marque.nom
        }));
        console.log("Marques à l'indice 0:", allMarques);
        setMarques(allMarques);
      } else {
        console.error('Failed to fetch marques:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during fetching marques:', error);
    }
  }; 
  fetchMarques();
}, [apiUrl]);

const handleSuivantClick = () => {
  // Vérifiez si une marque est sélectionnée
  if (selectedMarqueId) {
    // Redirigez avec l'ID de la marque sélectionnée
    history.push(`/voiturekilometre/${selectedMarqueId}`);
  } else {
    console.error('Veuillez sélectionner une marque avant de continuer.');
  }
};
const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedMarqueId(e.target.value);
};

// const handleSuivantClick = () => {
//   history.push('/voiturekilometre');
// };

  return (
    
      <div className='container' style={{}}>

      <div className='congtain_heading' style={{}}>
            <h1 className='heading' style={{}}>Marque</h1>
      </div>
        <div className='contain-select1'>
  <select className='select' onChange={handleSelectChange} >
      {marques.map((marque) => (
            <option key={marque._id} value={marque._id}>{marque.nom}</option>
      ))}
  </select>
</div>
          <div className='contain-input'>
            <button className='btn' type="button" onClick={handleSuivantClick} style={{marginLeft: '10px'}}>Suivant</button>
          </div>  
           {/* <div className='contain-input' >
              <button className='btn' type="submit" style={{marginLeft: '10px'}}> <a href="/voiturekilometre">
              Suivant
            </a> </button>
           
        </div> */}
    </div>

   
 
  );
};

export default VoitureMarque;

