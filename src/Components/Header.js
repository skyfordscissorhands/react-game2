import React from 'react';

function Header(props) {
    // js is coded above the return ket


    return (
        <div className="card-header">
            <h1>{props.total}</h1>
            <h1 className="card-header-title header">{props.headerName}</h1>
        </div>
    )

}

export default Header;
