import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                backgroundColor: '#233546',
                color: '#ffa5a5',
                height: '7vh',
                fontSize: '5vh',
                fontFamily: '\'Josefin Slab\', serif'
            }}
        >
            <FontAwesomeIcon icon={faFeatherAlt} /> &nbsp;
            Copy Text
        </div>
    )
}

export default Header