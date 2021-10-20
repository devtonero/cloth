
import CollectionOverview from '../../components/collection-overview/collection-overview.components';
import React from 'react';

import CollectionPage from '../collectionspage/collectionspage';

import {Route} from 'react-router-dom';

import { firestore, convertCollectionsSnapshot } from '../../firebase/firebase';

import { connect } from 'react-redux';
import { updateCollection } from '../../redux/shop/shop.action';

import WithSpinner from '../../components/with-spinner/with-spinner.components';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionspageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
   state = {
            loading: true
        };
   
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {update} = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(snapshot =>{
            const collectionMap = convertCollectionsSnapshot(snapshot);
            update(collectionMap);
            this.setState({ loading: false});
        });
        
        }

    render(){
        const {match} = this.props;
        const {loading} = this.state
        return (
    
   
            <div className='shop-page'>
                <Route exact path={`${match.path}`} 
                 render={props => (
                    <CollectionOverviewWithSpinner isLoading={loading} {...props} />
                  )}
                />
                < Route path={`${match.path}/:collectionId`} 
                    render={ props => (
                    <CollectionspageWithSpinner isloading={loading} {...props}/>
                    )} 
                />
                
        
            </div>
           
                
            );
    }

} 
const mapDispatchToProps = dispatch => ({
    update: collectionsMap => dispatch(updateCollection(collectionsMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);