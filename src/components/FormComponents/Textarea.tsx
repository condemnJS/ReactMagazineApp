import React from 'react';

interface Props {
    labelStyle?: string,
    label?: string
    error?: string,
    textAreaStyle?: string,
    name: string,
    setState: any
}

export const Textarea: React.FC<Props> = ({label, labelStyle, error, textAreaStyle, name, setState}) => {

    const setValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let targetValue: string = event.target.value;
        setState(event.target.name, targetValue)
    }

    return (
        <div className="inputComponent d-f fl-c">
            <label htmlFor="" className={labelStyle}>{label}</label>
            <textarea rows={10} name={name} className={textAreaStyle} onInput={setValue}></textarea>
            {error && <span className="invalid_feedback">{error}</span>}
        </div>
    );
}