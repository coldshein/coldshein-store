import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Item } from '../../redux/itemSlice';

const FullCard: React.FC = () => {
    type itemParams = {
        id: string;
    }
    
    const { id } = useParams<itemParams>();
    const [items, setItems] = React.useState([]);
    const fetchOneItem = async (id: any) => {
        const { data } = await axios.get(`http://localhost:3001/items/${id}`)
        setItems(data);
    }
    React.useEffect(() => {
        fetchOneItem(id)
    },[])
    
    return ( 
        <div className="full-card">
            <div className="container">
            <div className="page-header">Home * full card</div>
                <div className="full-card__inner">
                    <div className="photo-block">
                      {
                       
                      }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FullCard;