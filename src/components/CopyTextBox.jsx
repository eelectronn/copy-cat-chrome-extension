import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'

const CopyTextBox = ({ display, text }) => {

    return (
        <CopyToClipboard text={text}>
            <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                className='d-flex p-2 justify-content-around align-items-center'
                style={{
                    backgroundColor: '#233546',
                    minHeight: '40px',
                    borderRadius: '10px',
                    transition: 'transform .1s',
                    height: '100%'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        color: 'white'
                    }}
                >
                    {display}
                </div>
            </motion.div>
        </CopyToClipboard>
    )
}

CopyTextBox.propTypes = {
    display: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CopyTextBox