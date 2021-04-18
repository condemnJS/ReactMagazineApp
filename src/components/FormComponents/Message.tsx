import React from 'react';

interface Props {
    message: string,
    backgroundColor?: string
}

export const Message:React.FC<Props> = ({message, backgroundColor}) => {
    return (
        <div className={'success__admin__field'} style={{backgroundColor}}>
            <span>{ message }</span>
        </div>
    );
}