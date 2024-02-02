import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/ImageVoiture.css';
import Menu from './Menu';
import { useEffect } from 'react';
import menuService from './ServiceMenu';


export interface Image {
  src_img: string;
  id: number;
}
const image: Image[] = [

  { src_img: '/src/pages/assets/img_voiture/Img-.jpg',id: 1},
  { src_img: '/src/pages/assets/img_voiture/Img-.jpg',id: 2},
  { src_img: '/src/pages/assets/img_voiture/Img-.jpg',id: 3},
 
];

const image2: Image[] = [

  { src_img: '/src/pages/assets/img_voiture/Img-.jpg',id: 1},
  { src_img: '/src/pages/assets/img_voiture/Img-.jpg',id: 2},
  { src_img: '/src/pages/assets/img_voiture/Img-.jpg',id: 3},
 
];


const ImageVoiture: React.FC = () => {
  useEffect(() => {
    // Ferme le menu lorsqu'on arrive sur cette page
    menuService.toggleMenu(false);
  }, []);
  return (
    <IonPage>
      {/* <Header/> */}
      <IonContent>
      <Menu/>
      <ContainImage></ContainImage>
      </IonContent>
    

    </IonPage>
  );
};

  const ContainImage: React.FC = () => {
    return(
    <div className='container1' style={{}}>
      <div className='col' >
        <input type="file" style={{height: '29px'}} ></input>
      </div>

      <div className='container2' style={{}}>
      {image.map((item) => (
          <div  key={item.id} className= 'container2' style= {{ marginLeft: '15px'}}>
              <div  className='contain-img' style={{}}>
                <img src={item.src_img} className='img' style={{}}></img>
                  <p className='detail-img' style={{}}> </p>
                  <a className='a-style' href="/accueil" >  Voiture </a> 
              </div>
          </div>
       ))}
      </div>

      <div className='container2' style={{}}>
      {image2.map((item) => (
          <div  key={item.id} className= 'container2' style= {{ marginLeft: '15px'}}>
              <div  className='contain-img' style={{}}>
                <img src={item.src_img} className='img' style={{}}></img>
                  <p className='detail-img' style={{}}> </p>
                  <a className='a-style' href="/accueil" >  Voiture </a> 
              </div>
          </div>
       ))}
      </div>

      <div className='contain-button' style={{}}>
        <button className='btn' type="button" style={{}}>Soumettre</button>
      </div>
    </div>
  );
  };

export default ImageVoiture;