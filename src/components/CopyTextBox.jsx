import React from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'

const CopyTextBox = ({ display, text }) => {

    return (
        <div
            className='p-2'
            style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                height: '100%',
                minHeight: '50px',
            }}
        >
            {display}
            <CopyToClipboard text={text}>
                <div
                    style={{
                        backgroundColor: 'blue',
                        height: '20px',
                        width: '20px'
                    }}
                >

                </div>
            </CopyToClipboard>
        </div>
    )
}

CopyTextBox.propTypes = {
    display: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CopyTextBox