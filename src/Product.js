import React from 'react';
import { addToCart } from './redux/actions/actions';
import {connect} from 'react-redux';

const Product = (props) => {
    const Cart = () => {
        props.dispatch(addToCart(props.product))
    }
    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div onClick={Cart}>Add To Cart</div>
        </div>
    )
}

export default connect()(Product)