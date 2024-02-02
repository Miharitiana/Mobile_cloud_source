import { IonContent,IonPage } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [login, setLogin] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    
    navigate('/Accueil', { state: { type: 1 } });
  };


    return (
      <body className='bodyy'>
         <form onSubmit={handleLogin}>
         <div className='contain_login' style={{}}>
          
              <div className='contain-login' style={{}} >
                 <h1 className='h1' style={{}}>Login</h1>
              </div>
              <div className='contain2-login' style={{}}>
                <input className='input-style' type="text" style={{}} placeholder="your mail"
                value={login}
                onChange={(e) => setLogin(e.target.value)}></input>

              </div>
              <div className='contain2-login' style={{}}>
            <input className='input-style' type="text" style={{}} placeholder="your password"
                     value={motDePasse}
                     onChange={(e) => setMotDePasse(e.target.value)}></input>
          </div>
                <div className="contain2-login" style={{}}>

                      <button   className='btn' type="submit" style={{}}> <a href="/accueil">Sign in</a> </button>

                  {/* <IonTabBar slot="bottom">
                      <IonTabButton  className="btn" tab="/inscription" href="/inscription" style={{ }}>S'inscrire
                      </IonTabButton>
                  </IonTabBar> */}
                </div>
                <div className="contain2-login" style={{}}>
                <a href="/inscription">Sign up</a>
                </div>
            
         </div>
         </form>
      </body>
     
   
    );
  };

export default Login;