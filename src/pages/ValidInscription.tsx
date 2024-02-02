import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/validInscription.css';

const validInscription: React.FC = () => {
  return (
    <IonPage>
      <IonContent >
        <ContainLogin></ContainLogin>
      </IonContent>
    </IonPage>
 
  );
};

const ContainLogin: React.FC = () => {
    return (
      <body className='bodyy'>
         <div className='contain_login' style={{}}>
          
              <div className='contain-login' style={{}} >
                 <h1 className='h1' style={{}}>Inscription</h1>
              </div>
              <div className='contain2-login' style={{}}>
                <input className='input-style' type="text" style={{}} placeholder="your mail"></input>

              </div>
              <div className='contain2-login' style={{}}>
            <input className='input-style' type="text" style={{}} placeholder="your password"></input>
          </div>
                <div className="contain2-login" style={{}}>

                      <button   className='btn' type="submit" style={{}}> <a href="/login">ok  </a></button>

                </div>
            
         </div>
      </body>
     
   
    );
  };

export default validInscription;