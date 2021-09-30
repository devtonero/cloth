import React from 'react';
import './preview-collection.styles.scss';
import CollectionItems from '../collection-item/collection.components';

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, idx)=> idx < 4)
            .map((item)=> (
              <CollectionItems key= {item.id} item={item}/>
            ))}
        </div>
    </div>

);

export default PreviewCollection;