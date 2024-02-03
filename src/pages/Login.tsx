import { IonContent,IonPage } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/Login.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ContainLogin></ContainLogin>
      </IonContent>
    </IonPage>
 
  );
};

const ContainLogin: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {

    const config = {
      headers: {
        // 'Authorization': 'Bearer your_token', // Remplacez 'your_token' par votre jeton d'authentification
        'content-type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    };
    // Effectue une requête GET vers le web service lorsque le composant est monté
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {

        // Met à jour le state avec les données reçues du web service
        setUserData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la requête GET', error);
      });
  }, []); // Le tableau vide signifie que cette fonction s'exécutera une seule fois après le montage du composant

  const handleSignIn = () => {

   
    // Utilise les valeurs de login et password pour effectuer une action (par exemple, connexion)
    console.log('Login:', login);
    console.log('Password:', password);
    // Ici, tu pourrais faire une autre requête pour valider le login et le mot de passe

      // Stocke les valeurs dans le localStorage
      localStorage.setItem('userLogin', login);
      localStorage.setItem('userPassword', password);
  };

  return (
    <body className='bodyy'>
      <div className='contain_login'>
        {userData && (
          <div>
            <div className='contain-login'>
              <h1 className='h1'>Login</h1>
            </div>
            <div className='contain2-login'>
              <input
                className='input-style'
                type="text"
                placeholder="your mail"
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className='contain2-login'>
              <input
                className='input-style'
                type="text"
                placeholder="your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="contain2-login">
              <button className='btn' type="submit" onClick={handleSignIn}> <a href="/accueil">Sign in</a></button>
            </div>
            <div className="contain2-login">
              <a href="/inscription">Sign up</a>
            </div>
          </div>
        )}
      </div>
    </body>
  );
};

export default Login;