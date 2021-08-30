import React from 'react';
import ShopData from './shopdata';
import PreviewCollection from '../../components/preview-collection/preview-collection';

class ShopPage extends React.Component {
    constructor(props) {
    super(props);
            this.state = {
                collections: ShopData

            };           

    }

    render () {
        const {collections} = this.state;
        return(<div>
                {
                    collections.map(({id, ...othercollectionprops}) => (
                        <PreviewCollection key={id} {...othercollectionprops}/>
                        ))
                }
            </div>
        );
    }
}
export default ShopPage;