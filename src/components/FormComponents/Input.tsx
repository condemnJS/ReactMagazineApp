import React from 'react';

interface Props {
    label: string,
    labelStyle?: string,
    type: string,
    placeholder?: string,
    name: string,
    error?: string,
    setState?: any,
    inputStyle?: string
}

export const Input: React.FC<Props> = ({label, type, placeholder = '', error, setState, name, labelStyle, inputStyle}) => {

    let setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        let targetValue: any = event.target.value
        if(type === 'file') {
            targetValue = event.target.files || null;
        }
        setState(event.target.name, targetValue)
    }

    return (
        <div className="inputComponent d-f fl-c">
            <label htmlFor="" className={labelStyle}>{label}</label>
            <input type={type} placeholder={placeholder} onInput={setValue} name={name} className={inputStyle}/>
            {error && <span className="invalid_feedback">{error}</span>}
        </div>
    );
}