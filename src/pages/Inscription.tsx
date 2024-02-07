import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
// import './assets/css/styles.css';
import './assets/css/Inscription.css';
import { useHistory } from 'react-router-dom';

import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
import { Toast } from "@capacitor/toast";


const Inscription: React.FC = () => {
  return (
    <IonPage>
      <IonContent >
        <ContainInscription></ContainInscription>
      </IonContent>
    </IonPage>
 
  );
};

const ContainInscription: React.FC = () => {
    const nullEntry: any[] = []
    const [notifications, setnotifications] = useState(nullEntry);
    const[notif_token, setNotif_token] = useState('');
    

   useEffect( ()=>{
      console.log("-------> Demande de permission de notifier ");
        PushNotifications.checkPermissions().then((res) => {
            if (res.receive !== 'granted') {
              PushNotifications.requestPermissions().then((res) => {
                if (res.receive === 'denied') {
                  showToast('Push Notification permission denied');
                }
                else {
                  showToast('Push Notification permission granted');
                  register();
                }
              });
            }
            else {
              register();
            }
          });
        }, []);

    const register = () => {

    // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();

        // On success, we should be able to receive notifications
        PushNotifications.addListener('registration',
            (token: Token) => {
                showToast('Push registration success');
                setnotifications(notifications => [...notifications, { id: -1, title: 'Token', body: JSON.stringify(token), type: 'action' }])
                //showToast(token.value);
                setNotif_token(token.value);
                //console.log("Votre token");
                //console.log(token.value);
            }
        );
          
        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {
                alert('Error on registration: ' + JSON.stringify(error));
            }
        );
          
    }

    const showToast = async (msg: string) => {
      await Toast.show({
          text: msg
      })
  }

  const apiUrl = 'https://cloud-back-voiture-production-3dbf.up.railway.app/login/register'; // Remplace TON_URL_API par ton URL réelle
  const [method, setMethod] = useState<string>('POST');
  const [headers, setHeaders] = useState<{ [key: string]: string }>({"content-type" : "application/json"});
  //const [body, setBody] = useState<string>(' {"login" : ${login}  "motDePasse" : ${motDePasse}}');
  const history = useHistory();

  const [nom, setNom] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [motDePasse, setMotDePasse] = useState<string>('');

  const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({nom , prenom, login, motDePasse, notif_token}),
        
      });

      const data = await response.json();
      showToast(data);
      if (data.information == "200") {

        console.log('Inscription successful:', data);
        localStorage.setItem('authToken',data.object.token);
        console.log('local storage : '+localStorage.getItem('authToken'));
        showToast('Signed up successfully !');
        history.push('/login');
       
      } else {

        console.log('Inscription failed:', data)
        console.error('Inscription failed:', response.status, response.statusText);
     
      }
    } catch (error) {

      console.error('Error during Inscription:', error);

    }

  };

  
    return (
      <body className='bodyy'>
         <div className='contain_inscription' style={{}}>
         <form onSubmit={handleRequest}>
                <div className='contain-login' style={{}} >
                  <h1 className='h1' style={{}}>Inscription</h1>
                </div>
                <div className='contain2_inscription' style={{}}>
                  <input className='input-style' type="text" style={{}} placeholder="name"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  ></input>
                </div>
                <div className='contain2_inscription' style={{}}>
                  <input className='input-style' type="text" style={{}} placeholder="Surname"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  ></input>
                </div>
                <div className='contain2_inscription' style={{}}>
                  <input className='input-style' type="text" style={{}} placeholder="your mail"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  ></input>
                </div>
                <div className='contain2_inscription' style={{}}>
                  <input className='input-style' type="password" style={{}} placeholder="your password"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  ></input>
                </div>
                  <div className="contain2_inscription" style={{}}>
                        <input   className='btn' type="submit" style={{}} value="Valider" ></input>
                  </div>
          </form>
         </div>
      </body>
    );
  };


export default Inscription;