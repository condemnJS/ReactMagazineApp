import React, {MouseEvent, useState} from 'react';
import {Order} from './Order';
import ArrowLeft from '../../../public/img/icons/arrow-left.svg';

interface Props {
    orders: any
}

export const OrdersSlider: React.FC<Props> = ({orders}) => {

    const [turn, setTurn] = useState(0);

    const turnSlider = (event: MouseEvent, side: string) => {
        const target = event.target as HTMLImageElement;
        const slider = target.parentElement;
        const sliderItems = document.querySelectorAll('.orders-slider-items > div');

        let mark = -1;
        let sliderWrapper = target.nextElementSibling as HTMLDivElement;

        if (side === 'right') {
            sliderWrapper = target.previousElementSibling as HTMLDivElement;
            mark = 1;
        }

        const sliderItemsWidthWithMargin = sliderItems.length * 150 + sliderItems.length * 15 - sliderWrapper.offsetWidth;

        if (slider) {
            console.log(sliderWrapper.offsetWidth + 'расстояние')
            sliderWrapper.style.transition = '1s';
            if (side === 'right') {
                setTurn((turn) => {
                    let maxOfOffset = sliderItemsWidthWithMargin + turn;
                    console.log(maxOfOffset)
                    if(maxOfOffset <= sliderWrapper.offsetWidth) {
                        turn = -sliderItemsWidthWithMargin;
                    } else {
                        turn -= sliderWrapper.offsetWidth;
                    }
                    sliderWrapper.style.transform = `translateX(${turn}px)`;
                    return turn;
                })
            } else {
                setTurn((turn) => {
                    let minOfOffset = turn + sliderWrapper.offsetWidth;
                    if(minOfOffset >= 0) {
                        turn = 0;
                    } else {
                        turn += sliderWrapper.offsetWidth;
                    }
                    // turn += sliderWrapper.offsetWidth;
                    sliderWrapper.style.transform = `translateX(${turn}px)`;
                    return turn;
                })
            }
        }
    }

    return (
        <div className="order-slider-wrapper">
            <img src="../../../img/icons/arrow-left.svg" alt="" className="slider-arrows arrow-left"
                 onClick={(event) => turnSlider(event, 'left')}/>
            <div className="d-f orders-slider-items">
                {orders.map((item: any) => {
                    return <Order order={item} key={item.id}/>
                })}
            </div>
            <img src="../../../img/icons/arrow-left.svg" alt="" className="slider-arrows arrow-right"
                 onClick={(event) => turnSlider(event, 'right')}/>
        </div>
    );
}