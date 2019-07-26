import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
    return(
        <div className="container">
            <div className="row"> 
                <div className="container-fluid">
                    <div>
                        {
                            cart.map(item => {
                                return <CartItem key={item.id} item={item} value={value} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}