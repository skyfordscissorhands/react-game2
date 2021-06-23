import React from 'react';
import Item from './Item';

function Button(props) {
    // js is coded above the return ket


    return (
        <button className="button" onClick={props.onClick}>{props.children}</button>
    )

}

export default Button;




