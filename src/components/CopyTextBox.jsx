import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'
import { Row, Col } from 'react-bootstrap'

const CopyTextBox = ({ display, text }) => {

    return (
        <CopyToClipboard text={text}>
            <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                className='d-flex h-100'
                style={{
                    backgroundColor: '#233546',
                    minHeight: '50px',
                    borderRadius: '10px',
                }}
            >
                <Row
                    className='w-100 m-0'
                    style={{
                        color: 'white',
                    }}
                >
                    <Col
                        className='d-flex align-items-center'
                        xs={9}
                    >
                        <div
                            className='p-2'
                        >
                            {display}
                        </div>

                    </Col>
                    <Col
                        className='d-flex p-0 justify-content-center'
                        xs={3}
                    >
                        <Row
                            className='w-100'
                        >
                            <Col
                                xs={12}
                                className='d-flex align-items-center'
                                style={{
                                    borderLeft: 'white solid 1px',
                                    borderBottom: 'white solid 1px'
                                }}
                            >
                                <div
                                    className='p-1 w-100 text-center'>
                                    edit
                                </div>
                            </Col>
                            <Col
                                xs={12}
                                className='d-flex align-items-center'
                                style={{
                                    borderLeft: 'white solid 1px'
                                }}
                            >
                                <div
                                    className='p-1 w-100 text-center'
                                >
                                    delete
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </motion.div>
        </CopyToClipboard>
    )
}

CopyTextBox.propTypes = {
    display: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CopyTextBox