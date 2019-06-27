import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';

const ProductList = (props) => {
    return (
        <div>{
            props.list.map((e,i) => {
                return <Product product={e} name={e.name} price={e.price} url={e.url} key={i} />
            })
        }</div>
    )
}


const mapStoreToProps = (store) => {
    return {
        list: store.productReducer
    }
}
export default connect(mapStoreToProps)(ProductList);