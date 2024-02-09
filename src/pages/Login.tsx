import { IonContent,IonPage } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/Login.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent >
        <ContainLogin></ContainLogin>
      </IonContent>
    </IonPage>

  );
};

const ContainLogin: React.FC = () => {
  console.log("log in");
  const apiUrl = 'https://cloud-back-voiture-production-3dbf.up.railway.app/login/auth'; // Remplace TON_URL_API par ton URL réelle
  const [method, setMethod] = useState<string>('POST');
  const [headers, setHeaders] = useState<{ [key: string]: string }>({"content-type" : "application/json"});
  //const [body, setBody] = useState<string>(' {"login" : ${login}  "motDePasse" : ${motDePasse}}');
  const history = useHistory();
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
        body: JSON.stringify({ login, motDePasse }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('authToken',data.object.token);
        console.log('local storage : '+localStorage.getItem('authToken'));
        history.push('/accueil');
      } else {
        console.log('Login failed:', data)
        console.error('Login failed:', response.status, response.statusText);
        // Handle login failure
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other errors
    }

  };

    return (
      <body className='bodyy'>
         {/* <form onSubmit={handleLogin}> */}
         <div className='contain_login' style={{}}>
         <form onSubmit={handleRequest}>
              <div className='contain-login' style={{}} >
                 <h1 className='h1' style={{}}>Login</h1>
              </div>
              <div className='contain2_login' style={{}}>
                <input className='input-style' type="text" style={{}} placeholder="your mail"
                name='login'
                value={login}
                //value="fa"
                onChange={(e) => setLogin(e.target.value)}
                >
                </input>
              </div>
              <div className='contain2_login' style={{}}>
            <input className='input-style' type="password" style={{}} placeholder="your password"
                  name='password'
                  value={motDePasse}
                 // value="fa"
                  onChange={(e) => setMotDePasse(e.target.value)}
                 ></input>
          </div>
          <div className="contain2_login" style={{}}>
          <a href="/inscription">Sign up</a></div>
       
                <div className="contain2-login" style={{}}>

                      <input className='btn' type="submit" style={{}} value="Sign in"></input>
                      
                </div>
                 
          </form>
         </div>
         {/* </form> */}
      </body>


    );
  };

export default Login;