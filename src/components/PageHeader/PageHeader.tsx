import React from 'react'
import styles from './PageHeader.module.scss';
import { Link, useParams } from 'react-router-dom';

const PageHeader: React.FC = () => {
    const {query, sex, designer, category, designers} = useParams();
    console.log(query, sex, designer, category, designers)
    const options = sex ? sex :
                    category ? category:
                    designer ? designer:
                    designers ? designers : ''   
    return ( 
        <div className={styles.block}>
        <Link to="/">Home</Link> {
           options ? <Link to={`/${options}`}>{options}</Link> : ''
        }
      </div>
     );
}
 
export default PageHeader;