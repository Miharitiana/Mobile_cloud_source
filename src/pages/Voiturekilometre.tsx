import { IonContent,  IonPage } from '@ionic/react';

import './assets/css/Voiturekilometre.css';
import Menu from './Menu';

const VoitureMarqueSuite: React.FC = () => {


  return (

    <IonPage>
      
      <IonContent>
       
        <Menu/>

        <ContainVoitureMarque />
       
      </IonContent>

    </IonPage>
    
  );
};

const ContainVoitureMarque: React.FC = () => {
  return (
    <>
        <div className='container' style={{}}>

        <div className='contain-input' style={{}}>
          <input className='input' type="text" placeholder='Année' style={{marginTop:'110px'}}></input>
        </div>

        <div className='contain-input' ><input className='input' type="text" style={{}} placeholder="kilometre">
          </input>
        </div>

        <div className='contain-input' >
          <button className='btn' type="submit" style={{marginLeft: '10px'}}> <a href="/modelevoiture">
          Suivant
            </a> </button></div>
        </div>
    </>  
 
  );
};

export default VoitureMarqueSuite;