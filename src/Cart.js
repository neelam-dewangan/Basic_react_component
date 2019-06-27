import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const Cart = (props) => {
    console.log("cart props", props);
    return (
        <div>
            <h1>Cart</h1>
            {
                props.cartList.map((e,i) => {
                    return <CartItem index={i} name={e.name} key={i} />
                })
            }
        </div>
    )
}

const mapStoreToProps = (store) => {
    return {
        cartList: store.cartReducer
    }
}

export default connect(mapStoreToProps)(Cart)