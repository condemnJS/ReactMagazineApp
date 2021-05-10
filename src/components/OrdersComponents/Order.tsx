import React from 'react';

interface Props {
    order: any
}

export const Order: React.FC<Props> = ({order}) => {
    return (
        <div className="order">
            <div className="order_image">
                <img src={JSON.parse(order.images)[0]} alt="" />
            </div>
            <div>
                <span className="order_price">{order.price}</span> ₽
            </div>
            <a href="" className="order_title">{order.title}</a>
            <a href="" className="btn-toBasket">В корзину</a>
        </div>
    );
}