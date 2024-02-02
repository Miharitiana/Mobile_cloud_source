import { IonContent, IonGrid, IonHeader, IonItemOption, IonPage, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';

import './assets/css/Modelevoiture.css'
import Menu from './Menu';
// import { useEffect } from 'react';
// import menuService from './ServiceMenu';

const Modelevoiture: React.FC = () => {
  // useEffect(() => {
  //   // Ferme le menu lorsqu'on arrive sur cette page
  //   menuService.toggleMenu(false);
  // }, []);
  return (
    <IonPage>
      <IonContent>
      <Menu></Menu> 
      <ContainModele></ContainModele>
      </IonContent>
      

    </IonPage>
  );
};

const ContainModele: React.FC = () => {
  return (
    <div className='container' style={{}}>
    <div className='contain-select' style={{}}>
      <select className='select' style={{}} >
            <optgroup label="This is a group">
                <option value="12" >This is item 1</option>
            </optgroup>
        </select>
    </div>
    <div className='contain1' style={{}}>
      <input className='input' type="text" style={{}} placeholder="Prix">
      </input>
    </div>
    <div className='contain1' style={{}}>
      <textarea className='textarea-style' style={{}} placeholder="Description">
      </textarea>
    </div>
    <div className='contain1' style={{}}>
      <button className='btn' type="submit" style={{}}> <a href='/imagevoiture' > Suivant </a></button>
    </div>
    </div>

    
  );
};

export default Modelevoiture;