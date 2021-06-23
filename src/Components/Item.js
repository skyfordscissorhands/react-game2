import React from 'react';

function Item(props) {
    // js is coded above the return ket


    return (
        <img src={"pic/" + props.item} className={`shoe ${props.selected ? "selected" : ""}`}/>
    )

}

export default Item;
