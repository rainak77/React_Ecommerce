import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollectionforPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';



const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...others }) => (
                    <CollectionPreview key={id} {...others} />
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionforPreview
});

export default connect(mapStateToProps)(CollectionsOverview);