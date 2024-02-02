import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonTabButton ,IonLabel, IonTabBar , IonCol, IonIcon, IonGrid, IonRow  } from '@ionic/react';
import Footer from './Footer';

//import 'assets/bootstrap/css/bootstrap.min.css';
//import 'assets/css/styles.css';
import './assets/css/voitureMarque.css';
import Menu from './Menu';
import { useEffect } from 'react';
import menuService from './ServiceMenu';

const VoitureMarque: React.FC = () => {

  useEffect(() => {
    // Ferme le menu lorsqu'on arrive sur cette page
    menuService.toggleMenu(false);
  }, []);

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
  return (
    <>
      <div className='container' style={{}}>

      <div className='congtain_heading' style={{}}>
            <h1 className='heading' style={{}}>Marque</h1>
        </div>
        <div className='contain-select1' style={{}}>
         
          <select className='select' style={{}}>
                <optgroup label="This is a group">
                    <option value="12" >This is item 1</option>
                </optgroup>
            </select>
          </div>

        <div className='contain-input' >
          <button className='btn' type="submit" style={{marginLeft: '10px'}}> <a href="/voiturekilometre">
          Suivant
            </a> </button>

           
        </div>
    </div>

    </>  
 
  );
};

export default VoitureMarque;