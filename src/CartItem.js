import React from 'react';
import {connect} from 'react-redux';
import { deleteCart } from './redux/actions/actions';

const CartItem = (props) => {
    const deleteItem = () => {
        props.dispatch(deleteCart(props.index))
    }
    return (
        <div>{props.name} <span onClick={deleteItem}>- Delete</span></div>
    )
}

export default  connect()(CartItem)

//  [http / https]://[Base - URL]