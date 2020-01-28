import React from 'react';

const Footer = () => {
    let style= {
        backgroundColor: '#ggg',
    }
    let fecha = new Date().getFullYear();
    return (
        <div style={style}>
            <p>Copy right &copy; {fecha}</p>
        </div>
    );
};

export default Footer;