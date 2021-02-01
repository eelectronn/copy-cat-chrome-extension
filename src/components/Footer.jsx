import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                backgroundColor: '#233546',
                color: '#ffa5a5',
                height: '5vh',
                fontSize: '2vh',
                fontFamily: '\'Josefin Slab\', serif'
            }}
        >
            <a
                href='https://github.com/eelectronn'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faGithub} /> &nbsp;
                Github.com / eelectronn
            </a>
        </div>
    )
}

export default Footer