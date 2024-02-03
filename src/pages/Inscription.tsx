import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
// import './assets/css/styles.css';
import './assets/css/Inscription.css';

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

  const apiUrl = 'https://cloud-back-voiture-production.up.railway.app/login/register'; // Remplace TON_URL_API par ton URL réelle
  const [method, setMethod] = useState<string>('POST');
  const [headers, setHeaders] = useState<{ [key: string]: string }>({"content-type" : "application/json"});
  //const [body, setBody] = useState<string>(' {"login" : ${login}  "motDePasse" : ${motDePasse}}');

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
        body: JSON.stringify({nom , prenom, login, motDePasse }),
      });

      const data = await response.json();

      if (data.information == 200) {
        console.log('Inscription successful:', data);
        localStorage.setItem('authToken',data.object.token);
        console.log('local storage : '+localStorage.getItem('authToken'));
        //navigate('/HomePage', { state: { type: 4 } });
      } else {
        console.log('Inscription failed:', data)
        console.error('Inscription failed:', response.status, response.statusText);
        // Handle login failure
      }
    } catch (error) {
      console.error('Error during Inscription:', error);
      // Handle other errors
    }

  };

    return (
      <body className='bodyy'>
         <div className='contain_inscription' style={{}}>
         <form onSubmit={handleRequest}>
                <div className='contain-login' style={{}} >
                  <h1 className='h1' style={{}}>Inscription</h1>
                </div>
                <div className='contain2-login' style={{}}>
                  <input className='input-style' type="text" style={{}} placeholder="name"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  ></input>
                </div>
                <div className='contain2-login' style={{}}>
                  <input className='input-style' type="text" style={{}} placeholder="Surname"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  ></input>
                </div>
                <div className='contain2-login' style={{}}>
                  <input className='input-style' type="text" style={{}} placeholder="your mail"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  ></input>
                </div>
                <div className='contain2-login' style={{}}>
                  <input className='input-style' type="password" style={{}} placeholder="your password"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  ></input>
                </div>
                  <div className="contain2-login" style={{}}>
                        <input   className='btn' type="submit" style={{}} value="Valider" ></input>

                  </div>
          </form>
         </div>
      </body>
    );
  };


export default Inscription;