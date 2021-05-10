import React, { MouseEvent } from 'react';
import { Order } from './Order';
import ArrowLeft from '../../../public/img/icons/arrow-left.svg';

interface Props {
    orders: any
}

export const OrdersSlider: React.FC<Props> = ({orders}) => {
    const turnSlider = (event: MouseEvent) => {
        const sliderItems = document.querySelectorAll('.orders-slider-items > div');
        console.log(sliderItems);
    }
    console.log(orders);
    return (
        <div className="order-slider-wrapper">
            <img src="../../../img/icons/arrow-left.svg" alt="" className="slider-arrows" onClick={turnSlider}/>
            <div className="d-f orders-slider-items">    
                {orders.map((item: any) => {
                    return <Order order={item} key={item.id}/> 
                })}
            </div>
        </div>
    );
}