import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
// import './assets/css/styles.css';
import './assets/css/Inscription.css';

const Inscription: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ContainInscription></ContainInscription>
      </IonContent>
    </IonPage>
 
  );
};

const ContainInscription: React.FC = () => {
    return (
      <body className='bodyy'>
         <div className='contain_inscription' style={{}}>
              <div className='contain-login' style={{}} >
                 <h1 className='h1' style={{}}>Inscription</h1>
              </div>
              <div className='contain2-login' style={{}}>
                <input className='input-style' type="text" style={{}} placeholder="name"></input>
              </div>
              <div className='contain2-login' style={{}}>
                <input className='input-style' type="text" style={{}} placeholder="Surname"></input>
              </div>
              <div className='contain2-login' style={{}}>
              <input className='input-style' type="text" style={{}} placeholder="Contact"></input>
               </div>
                  <div className='contain2-login' style={{}}>
                <input className='input-style' type="file" style={{}} placeholder="Photo"></input>
              </div>
                <div className="contain2-login" style={{}}>
                      <button   className='btn' type="submit" style={{}}> 
                      <a href="/validInscription"> Next</a> </button>

                  {/* <IonTabBar slot="bottom">
                      <IonTabButton  className="btn" tab="/inscription" href="/inscription" style={{ }}>S'inscrire
                      </IonTabButton>
                  </IonTabBar> */}
                </div>
         </div>
      </body>
     
   
    );
  };


export default Inscription;