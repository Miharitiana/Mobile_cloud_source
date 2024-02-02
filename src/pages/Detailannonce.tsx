import { IonContent, IonPage} from '@ionic/react';

import './assets/css/detailannonce.css';
import './assets/css/Modelevoiture.css'
import Menu from './Menu';
import { useEffect, useRef, useState } from 'react';
import menuService from './ServiceMenu';

export interface Detail {
  nom: string;
  datee: Date;
  marque: string;
  modele : string;
  prix : number;
  id: number;
}

const detail: Detail[] = [
  {
    nom: 'nom voiture1',
    datee: new Date('2023-12-11'),
    marque: 'marque1',
    modele : 'modele1',
    prix : 1000,
    id: 1
  },

 
];

const ListeAnnonce: React.FC = () => {
  useEffect(() => {
    // Ferme le menu lorsqu'on arrive sur cette page
    menuService.toggleMenu(false);
  }, []);

//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('name'); // Initial filter: 'name'
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(5);

//   // Simuler des données de produits
//   useEffect(() => {
//     // Remplacez cela par la logique pour récupérer les produits depuis votre API
//     const fakeProducts = [
//       { id: 1, annee: '27-01-2023', categorie: 'categ1' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//       { id: 2, annee: '27-01-2023', categorie: 'categ2' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//       { id: 3, annee: '27-01-2023', categorie: 'categ3' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//       { id: 4, annee: '27-01-2023', categorie: 'categ4' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//       { id: 5, annee: '27-01-2023', categorie: 'categ5' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//       // ... Ajoutez plus de produits si nécessaire
//     ];

//     setProducts(fakeProducts);
//     setFilteredProducts(fakeProducts);
//   }, []);

//   // Filtrer les produits en fonction du terme de recherche et du filtre sélectionné
//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       String(product[selectedFilter]).toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchTerm, selectedFilter, products]);

// const element = [
//         { id: 1, annee: '27-01-2023', categorie: 'categ1' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//         { id: 2, annee: '27-01-2023', categorie: 'categ2' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//         { id: 3, annee: '27-01-2023', categorie: 'categ3' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//         { id: 4, annee: '27-01-2023', categorie: 'categ4' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//         { id: 5, annee: '27-01-2023', categorie: 'categ5' , nb_vendus:  1, comission: 2000, total_vendus: 10, total_comission: 100000  },
//         // ... Ajoutez plus de produits si nécessaire
//       ];


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

  const scrollableImageRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = 300; // Ajustez la quantité de défilement selon vos besoins
    const scrollableImage = scrollableImageRef.current;

    if (scrollableImage) {
      if (direction === 'left') {
        scrollableImage.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        scrollableImage.scrollLeft += scrollAmount;
      }
    }
  };

  return (

    <div className='contain-list' style={{}}>
        <div>
        <div className='col'>
          <div
            className='scrollable-image'
            style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
            ref={scrollableImageRef}
          >
            <img src="/src/pages/assets/img_voiture/Img-.jpg" alt="Model Image" className='img' />
            <img src="/src/pages/assets/img_voiture/Img-.jpg" alt="Model Image" className='img'/>
            <img src="/src/pages/assets/img_voiture/Img-.jpg" alt="Model Image" className='img'/>

          </div>
                 {/* Boutons de défilement */}
            <button onClick={() => handleScroll('left')} className="scroll-button left-button">
              &#9664;
            </button>
            <button onClick={() => handleScroll('right')} className="scroll-button right-button">
              &#9654;
            </button>
        </div>
        </div>

      <div className='contain1' style={{}}>
      <textarea className='textarea-style' style={{}} placeholder="Description">
      </textarea>
      </div>
        {detail.map((item) => (
          <div key={item.id}>
            <div className='col'>
              <label className='col-form-label'>Nom : {item.nom} &nbsp;</label></div>
            <div className='col'>
              <label className='col-form-label'>Date : {item.datee.toLocaleDateString()} &nbsp;</label></div>
            <div className='col'>
              <label className='col-form-label'>Marque : {item.marque}</label></div>
            <div className='col'>
              <label className='col-form-label'>Modèle : {item.modele}</label></div>
        <div>
            <div className='col'><label className='col-form-label'>Prix : {item.prix} </label></div>
        </div>
        </div>
        ))}
    </div>

  );
};

export default ListeAnnonce;