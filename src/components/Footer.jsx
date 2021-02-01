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
                height: '6vh',
                fontSize: '3vh',
                fontFamily: '\'Cutive Mono\', monospace'
            }}
        >
            <a
                href='https://github.com/eelectronn'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faGithub} />&nbsp;eelectronn
            </a>
        </div>
    )
}

export default Footer