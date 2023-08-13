import React from 'react'
import Sort from '../../components/Sort/Sort';
import ItemList from '../../components/ItemList/ItemList';

const SearchResult = () => {
    return ( 
        <div className="container">
        <div className="home-inner">
          <div className="page-header">Home * Collection</div>
          <div className="main-block">
            <div className="main-block__inner">
              <div className="list-info">
                <div className="list-info__title">Newness</div>
                <nav className="list-info__nav">
                  <ul>
                    <li>Accessories</li>
                    <li>Clothing</li>
                    <li>Footwear</li>
                  </ul>
                </nav>
              </div>
              <div className="item-block">
                <Sort />
                <ItemList/>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default SearchResult;