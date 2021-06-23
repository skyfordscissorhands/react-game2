import React, { useState } from 'react';
import Item from './Item';
import Button from './Button';

function Generator(props) {
    // js is coded above the return ket
    const [selectedItem, setSelectedItem] = useState();

    return (
        <>
            {props.items.map(item => (
                <Item item={item} selected={selectedItem===item} />
                
            ))}
            <br></br>
            <Button onClick={() => {
               setSelectedItem(props.items[Math.floor(Math.random() * props.items.length)])
            }} >Generate</Button>
        </>
    )

}

export default Generator;
