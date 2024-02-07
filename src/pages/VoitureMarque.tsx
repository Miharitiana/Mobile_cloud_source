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

const ContainVoiture: React.FC = () => {

  const apiUrl = 'https://cloud-back-voiture-production-3dbf.up.railway.app/detail/marca'; // Remplace TON_URL_API par ton URL réelle
  const [method, setMethod] = useState<string>('GET');
  const [headers, setHeaders] = useState<{ [key: string]: string }>({"content-type" : "application/json"});
  const history = useHistory();

 const [marques, setMarques] = useState<{ [id: string]: string }>({});


 useEffect(() => {
  const fetchMarques = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        const allMarques = data.object.reduce((acc: { [id: string]: string }, group: { _id: string, nom: string }[]) => {
          group.forEach((marque) => {
            acc[marque._id] = marque.nom;
            console.log("nom = " + marque.nom)
          });
          return acc;
        }, {});
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
  history.push('/voiturekilometre');
};



  return (
    <>
      <div className='container' style={{}}>

      <div className='congtain_heading' style={{}}>
            <h1 className='heading' style={{}}>Marque</h1>
        </div>
        <div className='contain-select1'>
  <select className='select'>
    {Object.entries(marques).map(([id, nom]) => (
      <option key={id} value={id}>{nom}</option>
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

    </>  
 
  );
};

export default VoitureMarque;