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
          <input className='input' type="text" placeholder='immatriculation' style={{marginTop:'110px'}}  ></input>
        </div>

        <div className='contain-input' ><input className='input' type="text" style={{}} placeholder="kilometre">
          </input>
        </div>

        <div className='contain-input' ><input className='input' type="text" style={{}} placeholder="prix">
          </input>
        </div>


        <div className='contain-input' style={{}}>
          <input className='input' type="text" placeholder='Année' style={{marginTop:'110px'}}></input>
        </div>

        <div className='contain1' style={{}}>
      <textarea className='textarea-style' style={{}} placeholder="Description">
      </textarea>
    </div>   <div className='contain1' style={{}}>
      <textarea className='textarea-style' style={{}} placeholder="Description">
      </textarea>
    </div>

    <div className='contain-select' style={{}}>
      <select className='select' style={{}} >
            <optgroup label="This is a group">
                <option value="12" >This is item 1</option>
            </optgroup>
        </select>
    </div>

       <div className='contain1' style={{}}>
      <input type='file' style={{}} placeholder="Description">
      </input>
    </div>
    
        <div className='contain-button' style={{}}>
        <button className='btn' type="button" style={{}}>Soumettre</button>
      </div>
      </div>
    </>  
 
  );
};

export default VoitureMarqueSuite;