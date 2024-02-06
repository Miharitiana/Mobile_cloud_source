import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/fonts/font-awesome.min.css';
import './assets/css/footer-servitech.css';
import './assets/css/gradient-navbar-1.css';
import './assets/css/gradient-navbar.css';
import './assets/fonts/font-awesome.min.css';
import './assets/css/Header.css';

const Header: React.FC = () => {

 
  return (

    <div className='header_position navbar-expand-md .navbar-collapse' id="main-content">
    <nav className="navbar navbar-dark navbar-expand-md" id="app-navbar">
        <div className="container-fluid">
            <div  className="collapse navbar-collapse contain-menu" id='contain-menu' style= {{}}>
          <IonButtons slot="start">
            <IonMenuButton ></IonMenuButton>
          </IonButtons>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link active" href="/login">Item1</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#">Item</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#">Item</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
 
 
  );
};

export default Header;



