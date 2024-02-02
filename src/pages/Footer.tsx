import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonTabButton ,IonLabel, IonTabBar , IonCol, IonIcon, IonGrid, IonRow, IonFooter  } from '@ionic/react';
import './assets/css/Footer.css';

const Footer: React.FC = () => {

  return (

    <IonFooter translucent={true}>
      <ContainFooter></ContainFooter>
  </IonFooter>
  );
};


const ContainFooter: React.FC = () => {
  return (

      <div data-aos="zoom-in" className='footer-dark  contain-footer' style={{}}>
      <footer>
          <div className='container"' style={{height: '193px'}}>
              <div className='row'>
                  <div className='col-sm-4 col-md-3 item detail-footer' style={{}}>
                      <h3>Servitech </h3>
                      <ul>
                          <li><a href="#">Somos una empresa que&nbsp;brinda soluciones integralesen el área de tecnología.&nbsp; </a></li>
                      </ul>
                  </div>
                  <div className='col-sm-4 col-md-3 item detail-footer' style={{}}>
                      <h3>Donde estamos</h3>
                      <ul>
                          <li><i className='fa fa-map-marker espacio-ico-01'></i><a href="#">Dirección Carrera&nbsp;48 # 16 Sur 43 Int 102,,</a></li>
                          <li><i className='fa fa-phone espacio-ico-01'></i><a href="#">Teléfono: 3224993Movil: 310-3736281 </a></li>
                      </ul>
                  </div>
                  <div className='col-sm-4 col-md-3 item detail-footer' style={{}}>
                      <h3>Servitech </h3>
                      <ul>
                          <li><a href="#">Mantenimiento <i className='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                          <li><a href="#">ReparaciónPC - portatiles <i className='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                          <li><a href="#">Reparación Impresoras <i className='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                      </ul>
                  </div>
                  <div className='col-sm-4 col-md-3 item detail-footer' style={{}}>
                      <h3>Boletines </h3>
                      <ul>
                          <li><a href="#">Mantenimiento <i className='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                      </ul>
                      {/* <form style={{marginTop:'19px'}} method="post">
                          <div className='form-group mb-3'>
                            <input className='form-control"' type="email" name="email" placeholder="Your Email">
                            </input>
                          </div>
                          <div className='form-group mb-3'><button className='btn btn-primary' type="submit">Subscribe </button></div>
                      </form> */}
                  </div>
                  <div className='col-sm-4 col-md-12 item social' style={{paddingTop: '176px' , marginTop: '-120px'}}>
                    <a href="#"><i className='icon ion-social-facebook'></i></a>
                    <a href="#"><i className='icon ion-social-twitter'></i></a>
                    <a href="#"><i className='icon ion-social-snapchat'></i></a>
                    <a href="#"><i className='icon ion-social-instagram'></i></a></div>
              </div>
              <p className='copyright'style={{marginTop: '-50px;'}}>© 2024 </p>
          </div>
      </footer>
      </div>



  );
};



export default Footer;


