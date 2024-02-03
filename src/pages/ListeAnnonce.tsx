import { IonContent,  IonPage } from '@ionic/react';

import './assets/css/Listeannonce.css'
import Menu from './Menu';

export interface Annonce {

  path_img: string,
  nom: string;
  datee: Date;
  marque: string;
  modele: string;
  prix: number,
  id: number;
  
}
const annonce: Annonce[] = [

  {path_img: 'src/assets/img_voiture/Img-.jpg', nom: 'voiture ', datee : new Date('12-01-2023') , marque: 'marque1 ' , modele: 'modele1'  , prix : 10000 ,  id: 1},
  {path_img: 'src/assets/img_voiture/Img-.jpg', nom: 'voitur2', datee : new Date('12-01-2023') , marque: 'marque2 ' , modele: 'modele2'  , prix : 10000 , id: 2},
  {path_img: 'src/assets/img_voiture/Img-.jpg', nom: 'voiture3 ', datee : new Date('12-01-2023') , marque: 'marque3' , modele: 'modele3'  , prix : 10000 , id: 3}
 
];

const ListeAnnonce: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent >
      <Menu></Menu> 
        <ContainModele></ContainModele>
        {/* <Footer/> */}
      </IonContent>
    </IonPage>
  );

};

const ContainModele: React.FC = () => {
  return (
  
    <div className='contain-list' style={{}}>
      
        {annonce.map((item) => (
        <div className='contain_annonce' key={item.id} >
            <div className='detail_voiture'>
            <div className='col'>
            <a href="/detailannonce"> <img className='img_style' src={item.path_img} style={{}}>
             </img></a>
            </div>
            
            <div className='col'>
              <label className='col-form-label'>Nom :  {item.nom} &nbsp;</label>
              </div>
            <div className='col'>
              <label className='col-form-label'>Date : {item.datee.toLocaleDateString()} &nbsp;</label>
              </div>
            <div className='col'><label className='col-form-label'>Marque : {item.marque} </label></div>
            <div className='col'><label className='col-form-label'>Model : {item.modele} </label></div>
    
            <div className='col'><label className='col-form-label'>Prix : {item.prix}</label>  </div>
            <div>
            <div className='col'><button className='btn' type="button">Vendu</button></div>
            <div className='col'><button className='btn' type="button" >  Etat </button></div>
           
        </div>
        </div>
        </div>

          ))}
        <div>
        </div>
        

    </div>

  );
};

export default ListeAnnonce;