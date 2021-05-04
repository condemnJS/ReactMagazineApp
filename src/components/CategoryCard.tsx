import React, { MouseEvent,  } from 'react';
import Drop from "../assets/crud/trash.svg";
import Edit from "../assets/crud/edit.svg";
import { useHistory } from 'react-router';

interface ItemProps {
    id: number,
    title: string,
    icon: string | null,
    slug: string,
    image: string
}

interface Props {
    el: any
}

export const CategoryCard: React.FC<Props> = ({el}) => {
    const history = useHistory();
    const deleteCurrentElement = () => {
        console.log('deleted');
    }
    console.log(history.location.pathname);
    return (
        <div className={`category_card${history.location.pathname.includes('admin') ? ' animate_category_card' : ''}`}>
            <img src={el.image} alt=""/>
            {history.location.pathname.includes('admin') ?
                    <div className="d-f fl-c">
                        <img src={Drop} alt="" className="icon_admin drop" onClick={deleteCurrentElement}/>
                        <img src={Edit} alt="" className="icon_admin edit"/>
                    </div>   
            : ''}
            <strong>{el.title}</strong>
        </div>
    );
}