import React, { useEffect } from 'react';
import { isMetaProperty } from 'typescript';

interface Props {
    labelStyle?: string,
    label?: string,
    error?: string,
    options: Array<any>,
    selectStyle?: string,
    setState?: any,
    name: string
}

export const Select:React.FC<Props> = ({label, labelStyle, error, options, selectStyle, setState, name}) => {
    
    useEffect(() => {
        if(options[0]) {
            setState(name, options[0].id);
        }
    }, [options]);

    const setValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let value = parseInt(event.target.value);
        setState(event.target.name, value);
    }

    return (
        <div className={'select__component d-f fl-c'}>
            <label htmlFor="" className={labelStyle}>{label}</label>
            <select name={name} id="" className={selectStyle} onChange={setValue}>
                {options.map((item) => {
                    return <option key={item.id} value={item.id}>{item.title}</option>
                })}
            </select>
            {error && <span className="invalid_feedback">{error}</span>}
        </div>
    );
}