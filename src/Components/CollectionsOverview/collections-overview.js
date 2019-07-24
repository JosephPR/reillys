import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview/collection-preview'
import { selectCollections } from '../../Redux/Shop/shop.selectors';


import './collections-overview.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
  {
    collections.map(({id, ...otherCollectionProps}) => {
      return (
         <CollectionPreview key={id} {...otherCollectionProps} />
      )
    })
  }
  </div>
);


  const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
  });

export default connect(mapStateToProps)(CollectionsOverview)
