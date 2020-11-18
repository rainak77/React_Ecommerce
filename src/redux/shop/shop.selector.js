import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

//bringing shop data as it is 'as an object'
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


// Transform shop data into an array
export const selectCollectionforPreview = createSelector(
    [selectCollections],
    collections => collections
        ? Object.keys(collections).map(key => collections[key]) : []

);


//Selecting user data using Specific url-Parameter
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
);