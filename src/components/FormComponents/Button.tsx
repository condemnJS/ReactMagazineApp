import React from 'react';

interface Props {
    prevent?: boolean | false,
    value: string,
    className: string,
    onClick?: (event: any) => void
}

export const Button: React.FC<Props> = ({value, className, onClick}) => {
    return (
        <input type="submit" value={value} className={className} onClick={onClick}/>
    );
}