import React from 'react';
import PropTypes from 'prop-types'

const Header = ({title}) => (
<header> 
    <h1 className='text-center'>{title} </h1>
</header>
);

//Documentando el App;
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;