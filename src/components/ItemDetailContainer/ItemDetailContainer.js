import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect (() => {
        setLoading(true);
        const docRef = doc(db, 'products', itemId);
        getDoc(docRef)
            .then((doc) => {
                if (doc.exists()) {
                    const data = doc.data();
                    setProduct({ id: doc.id, ...data });
                } else {
                    console.log('No such document!');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error getting document:', error);
                setLoading(false);
            });
    }, [itemId]);
    return (
        <div className='ItemDetailContainer'>
            {loading ? <p>Loading...</p> : <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;